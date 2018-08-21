var wordList = []
var routeMap = {}
var wordMap = {}
var tagList = []
;(function init() {
  importScripts('//cdn.jsdelivr.net/npm/ramda@latest/dist/ramda.min.js')
  importScripts('./searchUtil.js')

  fetch(`/search/searchIndex.json`)
    .then(res => res.json())
    .then(searchIndex => {
      wordList = searchIndex.wordList
      routeMap = searchIndex.routeMap
      wordMap = searchIndex.wordMap
      tagList = searchIndex.tagList
    })
})()

/**
 * event listener for postMessage
 *
 * postMessage({
 *  action: string,
 *  payload: any
 * })
 */
onmessage = function(e) {
  var action = e.data.action
  var payload = e.data.payload

  switch (action) {
    case searchUtil.actions.SEARCH_REQUEST:
      search(payload.searchInput)
      break

    default:
      break
  }
}

var MIN_SEARCH_LEN = 2

function search(search = '') {
  var startTime = +new Date()

  if (!search) {
    sendNoResult({
      startTime,
    })
    return
  }

  if (search && search.length < MIN_SEARCH_LEN) {
    sendNoResult({
      startTime,
    })
    return
  }

  var searchWords = searchUtil.trimText(search).split(/\s+/)
  var resultRouteMap = {}
  var resultTagRouteList = []

  for (var searchWord of searchWords) {
    if (searchWord.length >= MIN_SEARCH_LEN) {
      // 검색어가 단어와 매칭되는지 확인
      for (var word of wordList) {
        // 검색어는 인덱싱된 단어의 시작 부분부터 매칭되어야 한다
        if (word.match(`^${searchWord}`)) {
          resultRouteMap = addMatchingRoutes(
            resultRouteMap,
            wordMap[searchUtil.getKey(word)][searchUtil.ROUTES],
            search
          )
        }
      }

      // 검색어가 태그와 매칭되는지
      for (var tag of tagList) {
        if (tag.toLowerCase().match(`^${searchWord}`)) {
          resultTagRouteList.push(addMatchingTagToRoute(tag))
        }
      }
    }
  }

  // 결과가 없으면 단어를 1글자씩 줄여서 한번 검색한다.
  if (R.and(R.isEmpty(resultRouteMap), R.isEmpty(resultTagRouteList))) {
    // 단어를 더 이상 줄일 수 없으면 결과 없음 전송
    if (R.all(s => s.length < MIN_SEARCH_LEN, searchWords)) {
      sendNoResult({
        startTime,
      })
    }

    // 단어를 1글자씩 줄여서 한번 더 검색
    this.search(searchWords.map(s => R.take(s.length - 1, s)).join(' '))
  } else {
    // onmessage 이벤트에서 전달받을 수 있도록 메시지 전달
    sendResult({
      resultPostRoutes: convertResultToList(resultRouteMap),
      resultTagRoutes: R.uniqBy(tagRoute => tagRoute.name, resultTagRouteList),
      searchTime: +new Date() - startTime,
    })
  }
}

function sendNoResult({ startTime }) {
  sendResult({
    resultPostRoutes: [],
    resultTagRoutes: [],
    searchTime: +new Date() - startTime,
  })
}

var sendResult = ({ resultPostRoutes, resultTagRoutes, searchTime }) => {
  postMessage({
    action: searchUtil.actions.SEARCH_SUCCESS,
    payload: {
      resultPostRoutes,
      resultTagRoutes,
      searchTime,
    },
  })
}

var increasePoint = ({ resultRouteMap, routeId, amount }) => {
  return R.assocPath(
    [routeId, 'point'],
    R.path([routeId, 'point'], resultRouteMap) + amount,
    resultRouteMap
  )
}

var addMatchingRoutes = (resultRouteMap = {}, matchingRoutes = [], search = '') => {
  matchingRoutes.forEach((routeId = 0) => {
    var matchingData = routeMap[routeId]

    if (!resultRouteMap[routeId]) {
      // 추가되어 있지 않다면 새로 추가한다. 기본 point는 1
      resultRouteMap[routeId] = {
        data: matchingData,
        point: 1,
      }
    } else {
      // 이미 추가되어 있다면 point를 증가시킨다.
      resultRouteMap = increasePoint({
        resultRouteMap,
        routeId,
        amount: 1,
      })
    }

    // 검색 제목에 포함되어 있다면 포인트 추가한다.
    if (matchingData.title.split(' ').filter(w => w.match(`^${search}`)).length > 0) {
      resultRouteMap = increasePoint({ resultRouteMap, routeId, amount: 10 })
    }

    // 태그에 포함되어 있다면 포인트 추가한다.
    if (matchingData.tags.filter(t => t.toLowerCase().match(`^${search}`)).length > 0) {
      resultRouteMap = increasePoint({ resultRouteMap, routeId, amount: 5 })
    }
  })

  return resultRouteMap
}

var addMatchingTagToRoute = (tag = '') => {
  return { name: tag, route: searchUtil.getTagRoute(tag) }
}

/**
 * 결과 라우트 맵을 배열로 변환하고, point로 정렬한다.
 */
var convertResultToList = (resultPostRoutes = {}) => {
  var routeIds = Object.keys(resultPostRoutes)
  var sortedRoutes = R.pipe(
    R.map(routeId => resultPostRoutes[routeId]),
    R.sort((a, b) => b.point - a.point)
  )(routeIds)

  return sortedRoutes
}
