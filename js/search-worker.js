var wordList = []
var routeMap = {}
var wordMap = {}
var tagList = []
;(function init() {
  importScripts('//cdn.jsdelivr.net/npm/ramda@latest/dist/ramda.min.js')

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
    case 'SEARCH':
      search(payload)
      break

    default:
      break
  }
}

const IDENTIFIER = '@_' // 워드맵 키 앞에 붙일 식별자. 예약어와 충돌 방지를 위함

const getKey = w => `${IDENTIFIER}${w}`

const trimSearchText = (search = '') => {
  return search
    .toLowerCase()
    .replace(/\.|\s{1,}|\n|\r|,|\(|\)/g, ' ')
    .replace(/'|"|\{|\}|\[|\]/g, '')
}

function search(search = '') {
  if (search < 1) return null

  const searchWords = trimSearchText(search).split(/\s+/)

  let resultRouteMap = {}
  let resultTagRouteList = []

  for (const searchWord of searchWords) {
    if (searchWord.length > 1) {
      for (const word of wordList) {
        if (word.indexOf(searchWord) > -1) {
          resultRouteMap = addMatchingRoutes(resultRouteMap, wordMap[getKey(word)].routes, search)
        }
      }

      for (const tag of tagList) {
        if (tag.toLowerCase().indexOf(searchWord) > -1) {
          resultTagRouteList.push(addMatchingTagToRoute(tag))
        }
      }
    }
  }

  // 결과가 없으면 단어를 1글자씩 줄여서 한번 검색한다.
  if (R.and(R.isEmpty(resultRouteMap), R.isEmpty(resultTagRouteList))) {
    if (R.all(s => s.length <= 1, searchWords)) {
      sendResult({
        resultPostRoutes: [],
        resultTagRoutes: [],
      })
    }

    this.search(searchWords.map(s => R.take(s.length - 1, s)).join(' '))
  } else {
    // onmessage 이벤트에서 전달받을 수 있도록 메시지 전달
    sendResult({
      resultPostRoutes: convertResultToList(resultRouteMap),
      resultTagRoutes: R.uniqBy(tagRoute => tagRoute.name, resultTagRouteList),
    })
  }
}

const sendResult = ({ resultPostRoutes, resultTagRoutes }) => {
  postMessage({
    action: 'SEARCH_RESULT',
    payload: {
      resultPostRoutes,
      resultTagRoutes,
    },
  })
}

const increasePoint = ({ resultRouteMap, routeId, amount }) => {
  return R.assocPath(
    [routeId, 'point'],
    R.path([routeId, 'point'], resultRouteMap) + amount,
    resultRouteMap
  )
}

const addMatchingRoutes = (resultRouteMap = {}, matchingRoutes = [], search = '') => {
  matchingRoutes.forEach((routeId = 0) => {
    const matchingData = routeMap[routeId]

    if (!resultRouteMap[routeId]) {
      // 추가되어 있지 않다면 새로 추가한다. point는 1
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
    // 제목에 포함되어 있다면 포인트를 추가한다.
    if (matchingData.title.toLowerCase().includes(search)) {
      resultRouteMap = increasePoint({ resultRouteMap, routeId, amount: 1 })
    }
  })

  return resultRouteMap
}

const cervertToKebab = str => str.replace(/\s+/g, '-').toLowerCase()

const addMatchingTagToRoute = (tag = '') => {
  return { name: tag, route: `/tags/${cervertToKebab(tag)}` }
}

/**
 * 결과 라우트 맵을 배열로 변환하고, point로 정렬한다.
 */
const convertResultToList = (resultPostRoutes = {}) => {
  const routeIds = Object.keys(resultPostRoutes)
  const sortedRoutes = R.pipe(
    R.map(routeId => resultPostRoutes[routeId]),
    R.sort((a, b) => b.point - a.point)
  )(routeIds)

  return sortedRoutes
}
