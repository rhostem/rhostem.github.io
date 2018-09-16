/**
 * npm run dev:worker
 */

var wordList = []
var routeMap = {}
var wordMap = {}
var tagList = []
;(function init() {
  importScripts('//cdn.jsdelivr.net/npm/ramda@latest/dist/ramda.min.js')
  importScripts('./searchUtil.js')

  fetch('/search/searchIndex.json')
    .then(function(res) {
      return res.json()
    })
    .then(function(searchIndex) {
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
onmessage = function onmessage(e) {
  var action = e.data.action
  var payload = e.data.payload

  switch (action) {
    case searchUtil.actions.SEARCH_REQUEST:
      search(payload.searchInput)
      break

    case searchUtil.actions.GET_ROUTE_TITLE_MAP:
      getRouteTitleMap(payload)
      break

    default:
      break
  }
}

function isEng(str) {
  return /^[A-Za-z]*$/.test(str)
}

function getMinSearchLen(str) {
  return isEng(str) ? 2 : 1
}

/**
 * 문자열의 길이가 충분한지 확인. 영어는 2글자 이상. 한글은 1글자
 */
function isTooShort() {
  var str =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ''

  var minLen = getMinSearchLen(str)
  return str.length < minLen
}

function search() {
  var search =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ''

  if (!search) {
    sendNoResult()
    return
  }

  if (search && isTooShort(search)) {
    sendNoResult()
    return
  }

  var minSearchLen = getMinSearchLen(search)
  var searchWords = searchUtil.trimText(search).split(/\s+/)
  var resultRouteMap = {}
  var resultTagRouteList = []

  var _iteratorNormalCompletion = true
  var _didIteratorError = false
  var _iteratorError = undefined

  try {
    for (
      var _iterator = searchWords[Symbol.iterator](), _step;
      !(_iteratorNormalCompletion = (_step = _iterator.next()).done);
      _iteratorNormalCompletion = true
    ) {
      var searchWord = _step.value

      if (searchWord.length >= minSearchLen) {
        // 검색어가 단어와 매칭되는지 확인
        var _iteratorNormalCompletion2 = true
        var _didIteratorError2 = false
        var _iteratorError2 = undefined

        try {
          for (
            var _iterator2 = wordList[Symbol.iterator](), _step2;
            !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done);
            _iteratorNormalCompletion2 = true
          ) {
            var word = _step2.value

            // 검색어는 인덱싱된 단어의 시작 부분부터 매칭되어야 한다
            if (word.match('^' + searchWord)) {
              resultRouteMap = addMatchingRoutes(
                resultRouteMap,
                wordMap[searchUtil.getKey(word)][searchUtil.ROUTES],
                search
              )
            }
          }

          // 검색어가 태그와 매칭되는지
        } catch (err) {
          _didIteratorError2 = true
          _iteratorError2 = err
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
              _iterator2.return()
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2
            }
          }
        }

        var _iteratorNormalCompletion3 = true
        var _didIteratorError3 = false
        var _iteratorError3 = undefined

        try {
          for (
            var _iterator3 = tagList[Symbol.iterator](), _step3;
            !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done);
            _iteratorNormalCompletion3 = true
          ) {
            var tag = _step3.value

            if (tag.toLowerCase().match('^' + searchWord)) {
              resultTagRouteList.push(addMatchingTagToRoute(tag))
            }
          }
        } catch (err) {
          _didIteratorError3 = true
          _iteratorError3 = err
        } finally {
          try {
            if (!_iteratorNormalCompletion3 && _iterator3.return) {
              _iterator3.return()
            }
          } finally {
            if (_didIteratorError3) {
              throw _iteratorError3
            }
          }
        }
      }
    }

    // 결과가 없으면 단어를 1글자씩 줄여서 한번 검색한다.
  } catch (err) {
    _didIteratorError = true
    _iteratorError = err
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return()
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError
      }
    }
  }

  if (R.and(R.isEmpty(resultRouteMap), R.isEmpty(resultTagRouteList))) {
    // 단어를 더 이상 줄일 수 없으면 결과 없음 전송
    if (
      R.all(function(s) {
        return s.length < minSearchLen
      }, searchWords)
    ) {
      sendNoResult()
    }

    // 단어를 1글자씩 줄여서 한번 더 검색
    this.search(
      searchWords
        .map(function(s) {
          return R.take(s.length - 1, s)
        })
        .join(' ')
    )
  } else {
    // onmessage 이벤트에서 전달받을 수 있도록 메시지 전달
    sendResult({
      resultPostRoutes: convertResultToList(resultRouteMap),
      resultTagRoutes: R.uniqBy(function(tagRoute) {
        return tagRoute.name
      }, resultTagRouteList),
    })
  }
}

function sendNoResult() {
  sendResult({
    resultPostRoutes: [],
    resultTagRoutes: [],
  })
}

var sendResult = function sendResult(_ref) {
  var resultPostRoutes = _ref.resultPostRoutes,
    resultTagRoutes = _ref.resultTagRoutes,
    searchTime = _ref.searchTime

  postMessage({
    action: searchUtil.actions.SEARCH_SUCCESS,
    payload: {
      resultPostRoutes: resultPostRoutes,
      resultTagRoutes: resultTagRoutes,
      searchTime: searchTime,
    },
  })
}

var increasePoint = function increasePoint(_ref2) {
  var resultRouteMap = _ref2.resultRouteMap,
    routeId = _ref2.routeId,
    amount = _ref2.amount

  return R.assocPath(
    [routeId, 'point'],
    R.path([routeId, 'point'], resultRouteMap) + amount,
    resultRouteMap
  )
}

var addMatchingRoutes = function addMatchingRoutes() {
  var resultRouteMap =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}
  var matchingRoutes =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : []
  var search =
    arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ''

  matchingRoutes.forEach(function() {
    var routeId =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0

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
        resultRouteMap: resultRouteMap,
        routeId: routeId,
        amount: 1,
      })
    }

    // 검색 제목에 포함되어 있다면 포인트 추가한다.
    if (
      matchingData.title.split(' ').filter(function(w) {
        return w.match('^' + search)
      }).length > 0
    ) {
      resultRouteMap = increasePoint({
        resultRouteMap: resultRouteMap,
        routeId: routeId,
        amount: 10,
      })
    }

    // 태그에 포함되어 있다면 포인트 추가한다.
    if (
      matchingData.tags.filter(function(t) {
        return t.toLowerCase().match('^' + search)
      }).length > 0
    ) {
      resultRouteMap = increasePoint({
        resultRouteMap: resultRouteMap,
        routeId: routeId,
        amount: 5,
      })
    }
  })

  return resultRouteMap
}

var addMatchingTagToRoute = function addMatchingTagToRoute() {
  var tag =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ''

  return { name: tag, route: searchUtil.getTagRoute(tag) }
}

/**
 * 결과 라우트 맵을 배열로 변환하고, point로 정렬한다.
 */
var convertResultToList = function convertResultToList() {
  var resultPostRoutes =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}

  var routeIds = Object.keys(resultPostRoutes)
  var sortedRoutes = R.pipe(
    R.map(function(routeId) {
      return resultPostRoutes[routeId]
    }),
    R.sort(function(a, b) {
      return b.point - a.point
    })
  )(routeIds)

  return sortedRoutes
}

function getRouteTitleMap() {
  var payload =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}

  var routeTitleMap = {}
  var routeMapKeys = Object.keys(routeMap)

  routeMapKeys.forEach(function(key) {
    routeTitleMap[routeMap[key].route] = routeMap[key].title
  })

  postMessage({
    action: searchUtil.actions.GET_ROUTE_TITLE_MAP_SUCCESS,
    payload: {
      routeTitleMap: routeTitleMap,
    },
  })
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NlYXJjaC9zZWFyY2gtd29ya2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7QUFJQSxJQUFJLFdBQVcsRUFBZjtBQUNBLElBQUksV0FBVyxFQUFmO0FBQ0EsSUFBSSxVQUFVLEVBQWQ7QUFDQSxJQUFJLFVBQVUsRUFBZCxDQUNDLENBQUMsU0FBUyxJQUFULEdBQWdCO0FBQ2hCLGdCQUFjLHVEQUFkO0FBQ0EsZ0JBQWMsaUJBQWQ7O0FBRUEsb0NBQ0csSUFESCxDQUNRO0FBQUEsV0FBTyxJQUFJLElBQUosRUFBUDtBQUFBLEdBRFIsRUFFRyxJQUZILENBRVEsdUJBQWU7QUFDbkIsZUFBVyxZQUFZLFFBQXZCO0FBQ0EsZUFBVyxZQUFZLFFBQXZCO0FBQ0EsY0FBVSxZQUFZLE9BQXRCO0FBQ0EsY0FBVSxZQUFZLE9BQXRCO0FBQ0QsR0FQSDtBQVFELENBWkE7O0FBY0Q7Ozs7Ozs7O0FBUUEsWUFBWSxtQkFBUyxDQUFULEVBQVk7QUFDdEIsTUFBSSxTQUFTLEVBQUUsSUFBRixDQUFPLE1BQXBCO0FBQ0EsTUFBSSxVQUFVLEVBQUUsSUFBRixDQUFPLE9BQXJCOztBQUVBLFVBQVEsTUFBUjtBQUNFLFNBQUssV0FBVyxPQUFYLENBQW1CLGNBQXhCO0FBQ0UsYUFBTyxRQUFRLFdBQWY7QUFDQTs7QUFFRixTQUFLLFdBQVcsT0FBWCxDQUFtQixtQkFBeEI7QUFDRSx1QkFBaUIsT0FBakI7QUFDQTs7QUFFRjtBQUNFO0FBVko7QUFZRCxDQWhCRDs7QUFrQkEsU0FBUyxLQUFULENBQWUsR0FBZixFQUFvQjtBQUNsQixTQUFPLGVBQWMsSUFBZCxDQUFtQixHQUFuQjtBQUFQO0FBQ0Q7O0FBRUQsU0FBUyxlQUFULENBQXlCLEdBQXpCLEVBQThCO0FBQzVCLFNBQU8sTUFBTSxHQUFOLElBQWEsQ0FBYixHQUFpQixDQUF4QjtBQUNEOztBQUVEOzs7QUFHQSxTQUFTLFVBQVQsR0FBOEI7QUFBQSxNQUFWLEdBQVUsdUVBQUosRUFBSTs7QUFDNUIsTUFBSSxTQUFTLGdCQUFnQixHQUFoQixDQUFiO0FBQ0EsU0FBTyxJQUFJLE1BQUosR0FBYSxNQUFwQjtBQUNEOztBQUVELFNBQVMsTUFBVCxHQUE2QjtBQUFBLE1BQWIsTUFBYSx1RUFBSixFQUFJOztBQUMzQixNQUFJLENBQUMsTUFBTCxFQUFhO0FBQ1g7QUFDQTtBQUNEOztBQUVELE1BQUksVUFBVSxXQUFXLE1BQVgsQ0FBZCxFQUFrQztBQUNoQztBQUNBO0FBQ0Q7O0FBRUQsTUFBSSxlQUFlLGdCQUFnQixNQUFoQixDQUFuQjtBQUNBLE1BQUksY0FBYyxXQUFXLFFBQVgsQ0FBb0IsTUFBcEIsRUFBNEIsS0FBNUIsQ0FBa0MsS0FBbEMsQ0FBbEI7QUFDQSxNQUFJLGlCQUFpQixFQUFyQjtBQUNBLE1BQUkscUJBQXFCLEVBQXpCOztBQWQyQjtBQUFBO0FBQUE7O0FBQUE7QUFnQjNCLHlCQUF1QixXQUF2Qiw4SEFBb0M7QUFBQSxVQUEzQixVQUEyQjs7QUFDbEMsVUFBSSxXQUFXLE1BQVgsSUFBcUIsWUFBekIsRUFBdUM7QUFDckM7QUFEcUM7QUFBQTtBQUFBOztBQUFBO0FBRXJDLGdDQUFpQixRQUFqQixtSUFBMkI7QUFBQSxnQkFBbEIsSUFBa0I7O0FBQ3pCO0FBQ0EsZ0JBQUksS0FBSyxLQUFMLE9BQWUsVUFBZixDQUFKLEVBQWtDO0FBQ2hDLCtCQUFpQixrQkFDZixjQURlLEVBRWYsUUFBUSxXQUFXLE1BQVgsQ0FBa0IsSUFBbEIsQ0FBUixFQUFpQyxXQUFXLE1BQTVDLENBRmUsRUFHZixNQUhlLENBQWpCO0FBS0Q7QUFDRjs7QUFFRDtBQWJxQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQWNyQyxnQ0FBZ0IsT0FBaEIsbUlBQXlCO0FBQUEsZ0JBQWhCLEdBQWdCOztBQUN2QixnQkFBSSxJQUFJLFdBQUosR0FBa0IsS0FBbEIsT0FBNEIsVUFBNUIsQ0FBSixFQUErQztBQUM3QyxpQ0FBbUIsSUFBbkIsQ0FBd0Isc0JBQXNCLEdBQXRCLENBQXhCO0FBQ0Q7QUFDRjtBQWxCb0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQW1CdEM7QUFDRjs7QUFFRDtBQXZDMkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUF3QzNCLE1BQUksRUFBRSxHQUFGLENBQU0sRUFBRSxPQUFGLENBQVUsY0FBVixDQUFOLEVBQWlDLEVBQUUsT0FBRixDQUFVLGtCQUFWLENBQWpDLENBQUosRUFBcUU7QUFDbkU7QUFDQSxRQUFJLEVBQUUsR0FBRixDQUFNO0FBQUEsYUFBSyxFQUFFLE1BQUYsR0FBVyxZQUFoQjtBQUFBLEtBQU4sRUFBb0MsV0FBcEMsQ0FBSixFQUFzRDtBQUNwRDtBQUNEOztBQUVEO0FBQ0EsU0FBSyxNQUFMLENBQVksWUFBWSxHQUFaLENBQWdCO0FBQUEsYUFBSyxFQUFFLElBQUYsQ0FBTyxFQUFFLE1BQUYsR0FBVyxDQUFsQixFQUFxQixDQUFyQixDQUFMO0FBQUEsS0FBaEIsRUFBOEMsSUFBOUMsQ0FBbUQsR0FBbkQsQ0FBWjtBQUNELEdBUkQsTUFRTztBQUNMO0FBQ0EsZUFBVztBQUNULHdCQUFrQixvQkFBb0IsY0FBcEIsQ0FEVDtBQUVULHVCQUFpQixFQUFFLE1BQUYsQ0FBUztBQUFBLGVBQVksU0FBUyxJQUFyQjtBQUFBLE9BQVQsRUFBb0Msa0JBQXBDO0FBRlIsS0FBWDtBQUlEO0FBQ0Y7O0FBRUQsU0FBUyxZQUFULEdBQXdCO0FBQ3RCLGFBQVc7QUFDVCxzQkFBa0IsRUFEVDtBQUVULHFCQUFpQjtBQUZSLEdBQVg7QUFJRDs7QUFFRCxJQUFJLGFBQWEsU0FBYixVQUFhLE9BQXVEO0FBQUEsTUFBcEQsZ0JBQW9ELFFBQXBELGdCQUFvRDtBQUFBLE1BQWxDLGVBQWtDLFFBQWxDLGVBQWtDO0FBQUEsTUFBakIsVUFBaUIsUUFBakIsVUFBaUI7O0FBQ3RFLGNBQVk7QUFDVixZQUFRLFdBQVcsT0FBWCxDQUFtQixjQURqQjtBQUVWLGFBQVM7QUFDUCx3Q0FETztBQUVQLHNDQUZPO0FBR1A7QUFITztBQUZDLEdBQVo7QUFRRCxDQVREOztBQVdBLElBQUksZ0JBQWdCLFNBQWhCLGFBQWdCLFFBQXlDO0FBQUEsTUFBdEMsY0FBc0MsU0FBdEMsY0FBc0M7QUFBQSxNQUF0QixPQUFzQixTQUF0QixPQUFzQjtBQUFBLE1BQWIsTUFBYSxTQUFiLE1BQWE7O0FBQzNELFNBQU8sRUFBRSxTQUFGLENBQ0wsQ0FBQyxPQUFELEVBQVUsT0FBVixDQURLLEVBRUwsRUFBRSxJQUFGLENBQU8sQ0FBQyxPQUFELEVBQVUsT0FBVixDQUFQLEVBQTJCLGNBQTNCLElBQTZDLE1BRnhDLEVBR0wsY0FISyxDQUFQO0FBS0QsQ0FORDs7QUFRQSxJQUFJLG9CQUFvQixTQUFwQixpQkFBb0IsR0FJbkI7QUFBQSxNQUhILGNBR0csdUVBSGMsRUFHZDtBQUFBLE1BRkgsY0FFRyx1RUFGYyxFQUVkO0FBQUEsTUFESCxNQUNHLHVFQURNLEVBQ047O0FBQ0gsaUJBQWUsT0FBZixDQUF1QixZQUFpQjtBQUFBLFFBQWhCLE9BQWdCLHVFQUFOLENBQU07O0FBQ3RDLFFBQUksZUFBZSxTQUFTLE9BQVQsQ0FBbkI7O0FBRUEsUUFBSSxDQUFDLGVBQWUsT0FBZixDQUFMLEVBQThCO0FBQzVCO0FBQ0EscUJBQWUsT0FBZixJQUEwQjtBQUN4QixjQUFNLFlBRGtCO0FBRXhCLGVBQU87QUFGaUIsT0FBMUI7QUFJRCxLQU5ELE1BTU87QUFDTDtBQUNBLHVCQUFpQixjQUFjO0FBQzdCLHNDQUQ2QjtBQUU3Qix3QkFGNkI7QUFHN0IsZ0JBQVE7QUFIcUIsT0FBZCxDQUFqQjtBQUtEOztBQUVEO0FBQ0EsUUFDRSxhQUFhLEtBQWIsQ0FBbUIsS0FBbkIsQ0FBeUIsR0FBekIsRUFBOEIsTUFBOUIsQ0FBcUM7QUFBQSxhQUFLLEVBQUUsS0FBRixPQUFZLE1BQVosQ0FBTDtBQUFBLEtBQXJDLEVBQWlFLE1BQWpFLEdBQ0EsQ0FGRixFQUdFO0FBQ0EsdUJBQWlCLGNBQWMsRUFBRSw4QkFBRixFQUFrQixnQkFBbEIsRUFBMkIsUUFBUSxFQUFuQyxFQUFkLENBQWpCO0FBQ0Q7O0FBRUQ7QUFDQSxRQUNFLGFBQWEsSUFBYixDQUFrQixNQUFsQixDQUF5QjtBQUFBLGFBQUssRUFBRSxXQUFGLEdBQWdCLEtBQWhCLE9BQTBCLE1BQTFCLENBQUw7QUFBQSxLQUF6QixFQUNHLE1BREgsR0FDWSxDQUZkLEVBR0U7QUFDQSx1QkFBaUIsY0FBYyxFQUFFLDhCQUFGLEVBQWtCLGdCQUFsQixFQUEyQixRQUFRLENBQW5DLEVBQWQsQ0FBakI7QUFDRDtBQUNGLEdBakNEOztBQW1DQSxTQUFPLGNBQVA7QUFDRCxDQXpDRDs7QUEyQ0EsSUFBSSx3QkFBd0IsU0FBeEIscUJBQXdCLEdBQWM7QUFBQSxNQUFiLEdBQWEsdUVBQVAsRUFBTzs7QUFDeEMsU0FBTyxFQUFFLE1BQU0sR0FBUixFQUFhLE9BQU8sV0FBVyxXQUFYLENBQXVCLEdBQXZCLENBQXBCLEVBQVA7QUFDRCxDQUZEOztBQUlBOzs7QUFHQSxJQUFJLHNCQUFzQixTQUF0QixtQkFBc0IsR0FBMkI7QUFBQSxNQUExQixnQkFBMEIsdUVBQVAsRUFBTzs7QUFDbkQsTUFBSSxXQUFXLE9BQU8sSUFBUCxDQUFZLGdCQUFaLENBQWY7QUFDQSxNQUFJLGVBQWUsRUFBRSxJQUFGLENBQ2pCLEVBQUUsR0FBRixDQUFNO0FBQUEsV0FBVyxpQkFBaUIsT0FBakIsQ0FBWDtBQUFBLEdBQU4sQ0FEaUIsRUFFakIsRUFBRSxJQUFGLENBQU8sVUFBQyxDQUFELEVBQUksQ0FBSjtBQUFBLFdBQVUsRUFBRSxLQUFGLEdBQVUsRUFBRSxLQUF0QjtBQUFBLEdBQVAsQ0FGaUIsRUFHakIsUUFIaUIsQ0FBbkI7O0FBS0EsU0FBTyxZQUFQO0FBQ0QsQ0FSRDs7QUFVQSxTQUFTLGdCQUFULEdBQXdDO0FBQUEsTUFBZCxPQUFjLHVFQUFKLEVBQUk7O0FBQ3RDLE1BQUksZ0JBQWdCLEVBQXBCO0FBQ0EsTUFBSSxlQUFlLE9BQU8sSUFBUCxDQUFZLFFBQVosQ0FBbkI7O0FBRUEsZUFBYSxPQUFiLENBQXFCLGVBQU87QUFDMUIsa0JBQWMsU0FBUyxHQUFULEVBQWMsS0FBNUIsSUFBcUMsU0FBUyxHQUFULEVBQWMsS0FBbkQ7QUFDRCxHQUZEOztBQUlBLGNBQVk7QUFDVixZQUFRLFdBQVcsT0FBWCxDQUFtQiwyQkFEakI7QUFFVixhQUFTO0FBQ1AscUJBQWU7QUFEUjtBQUZDLEdBQVo7QUFNRCIsImZpbGUiOiJzZWFyY2gtd29ya2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBucG0gcnVuIGRldjp3b3JrZXJcbiAqL1xuXG5sZXQgd29yZExpc3QgPSBbXVxubGV0IHJvdXRlTWFwID0ge31cbmxldCB3b3JkTWFwID0ge31cbmxldCB0YWdMaXN0ID0gW11cbjsoZnVuY3Rpb24gaW5pdCgpIHtcbiAgaW1wb3J0U2NyaXB0cygnLy9jZG4uanNkZWxpdnIubmV0L25wbS9yYW1kYUBsYXRlc3QvZGlzdC9yYW1kYS5taW4uanMnKVxuICBpbXBvcnRTY3JpcHRzKCcuL3NlYXJjaFV0aWwuanMnKVxuXG4gIGZldGNoKGAvc2VhcmNoL3NlYXJjaEluZGV4Lmpzb25gKVxuICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgIC50aGVuKHNlYXJjaEluZGV4ID0+IHtcbiAgICAgIHdvcmRMaXN0ID0gc2VhcmNoSW5kZXgud29yZExpc3RcbiAgICAgIHJvdXRlTWFwID0gc2VhcmNoSW5kZXgucm91dGVNYXBcbiAgICAgIHdvcmRNYXAgPSBzZWFyY2hJbmRleC53b3JkTWFwXG4gICAgICB0YWdMaXN0ID0gc2VhcmNoSW5kZXgudGFnTGlzdFxuICAgIH0pXG59KSgpXG5cbi8qKlxuICogZXZlbnQgbGlzdGVuZXIgZm9yIHBvc3RNZXNzYWdlXG4gKlxuICogcG9zdE1lc3NhZ2Uoe1xuICogIGFjdGlvbjogc3RyaW5nLFxuICogIHBheWxvYWQ6IGFueVxuICogfSlcbiAqL1xub25tZXNzYWdlID0gZnVuY3Rpb24oZSkge1xuICB2YXIgYWN0aW9uID0gZS5kYXRhLmFjdGlvblxuICB2YXIgcGF5bG9hZCA9IGUuZGF0YS5wYXlsb2FkXG5cbiAgc3dpdGNoIChhY3Rpb24pIHtcbiAgICBjYXNlIHNlYXJjaFV0aWwuYWN0aW9ucy5TRUFSQ0hfUkVRVUVTVDpcbiAgICAgIHNlYXJjaChwYXlsb2FkLnNlYXJjaElucHV0KVxuICAgICAgYnJlYWtcblxuICAgIGNhc2Ugc2VhcmNoVXRpbC5hY3Rpb25zLkdFVF9ST1VURV9USVRMRV9NQVA6XG4gICAgICBnZXRSb3V0ZVRpdGxlTWFwKHBheWxvYWQpXG4gICAgICBicmVha1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIGJyZWFrXG4gIH1cbn1cblxuZnVuY3Rpb24gaXNFbmcoc3RyKSB7XG4gIHJldHVybiAvXltBLVphLXpdKiQvLnRlc3Qoc3RyKVxufVxuXG5mdW5jdGlvbiBnZXRNaW5TZWFyY2hMZW4oc3RyKSB7XG4gIHJldHVybiBpc0VuZyhzdHIpID8gMiA6IDFcbn1cblxuLyoqXG4gKiDrrLjsnpDsl7TsnZgg6ri47J206rCAIOy2qeu2hO2VnOyngCDtmZXsnbguIOyYgeyWtOuKlCAy6riA7J6QIOydtOyDgS4g7ZWc6riA7J2AIDHquIDsnpBcbiAqL1xuZnVuY3Rpb24gaXNUb29TaG9ydChzdHIgPSAnJykge1xuICB2YXIgbWluTGVuID0gZ2V0TWluU2VhcmNoTGVuKHN0cilcbiAgcmV0dXJuIHN0ci5sZW5ndGggPCBtaW5MZW5cbn1cblxuZnVuY3Rpb24gc2VhcmNoKHNlYXJjaCA9ICcnKSB7XG4gIGlmICghc2VhcmNoKSB7XG4gICAgc2VuZE5vUmVzdWx0KClcbiAgICByZXR1cm5cbiAgfVxuXG4gIGlmIChzZWFyY2ggJiYgaXNUb29TaG9ydChzZWFyY2gpKSB7XG4gICAgc2VuZE5vUmVzdWx0KClcbiAgICByZXR1cm5cbiAgfVxuXG4gIHZhciBtaW5TZWFyY2hMZW4gPSBnZXRNaW5TZWFyY2hMZW4oc2VhcmNoKVxuICB2YXIgc2VhcmNoV29yZHMgPSBzZWFyY2hVdGlsLnRyaW1UZXh0KHNlYXJjaCkuc3BsaXQoL1xccysvKVxuICB2YXIgcmVzdWx0Um91dGVNYXAgPSB7fVxuICB2YXIgcmVzdWx0VGFnUm91dGVMaXN0ID0gW11cblxuICBmb3IgKHZhciBzZWFyY2hXb3JkIG9mIHNlYXJjaFdvcmRzKSB7XG4gICAgaWYgKHNlYXJjaFdvcmQubGVuZ3RoID49IG1pblNlYXJjaExlbikge1xuICAgICAgLy8g6rKA7IOJ7Ja06rCAIOuLqOyWtOyZgCDrp6Tsua3rkJjripTsp4Ag7ZmV7J24XG4gICAgICBmb3IgKHZhciB3b3JkIG9mIHdvcmRMaXN0KSB7XG4gICAgICAgIC8vIOqygOyDieyWtOuKlCDsnbjrjbHsi7HrkJwg64uo7Ja07J2YIOyLnOyekSDrtoDrtoTrtoDthLAg66ek7Lmt65CY7Ja07JW8IO2VnOuLpFxuICAgICAgICBpZiAod29yZC5tYXRjaChgXiR7c2VhcmNoV29yZH1gKSkge1xuICAgICAgICAgIHJlc3VsdFJvdXRlTWFwID0gYWRkTWF0Y2hpbmdSb3V0ZXMoXG4gICAgICAgICAgICByZXN1bHRSb3V0ZU1hcCxcbiAgICAgICAgICAgIHdvcmRNYXBbc2VhcmNoVXRpbC5nZXRLZXkod29yZCldW3NlYXJjaFV0aWwuUk9VVEVTXSxcbiAgICAgICAgICAgIHNlYXJjaFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyDqsoDsg4nslrTqsIAg7YOc6re47JmAIOunpOy5reuQmOuKlOyngFxuICAgICAgZm9yICh2YXIgdGFnIG9mIHRhZ0xpc3QpIHtcbiAgICAgICAgaWYgKHRhZy50b0xvd2VyQ2FzZSgpLm1hdGNoKGBeJHtzZWFyY2hXb3JkfWApKSB7XG4gICAgICAgICAgcmVzdWx0VGFnUm91dGVMaXN0LnB1c2goYWRkTWF0Y2hpbmdUYWdUb1JvdXRlKHRhZykpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyDqsrDqs7zqsIAg7JeG7Jy866m0IOuLqOyWtOulvCAx6riA7J6Q7JSpIOykhOyXrOyEnCDtlZzrsogg6rKA7IOJ7ZWc64ukLlxuICBpZiAoUi5hbmQoUi5pc0VtcHR5KHJlc3VsdFJvdXRlTWFwKSwgUi5pc0VtcHR5KHJlc3VsdFRhZ1JvdXRlTGlzdCkpKSB7XG4gICAgLy8g64uo7Ja066W8IOuNlCDsnbTsg4Eg7KSE7J28IOyImCDsl4bsnLzrqbQg6rKw6rO8IOyXhuydjCDsoITshqFcbiAgICBpZiAoUi5hbGwocyA9PiBzLmxlbmd0aCA8IG1pblNlYXJjaExlbiwgc2VhcmNoV29yZHMpKSB7XG4gICAgICBzZW5kTm9SZXN1bHQoKVxuICAgIH1cblxuICAgIC8vIOuLqOyWtOulvCAx6riA7J6Q7JSpIOykhOyXrOyEnCDtlZzrsogg642UIOqygOyDiVxuICAgIHRoaXMuc2VhcmNoKHNlYXJjaFdvcmRzLm1hcChzID0+IFIudGFrZShzLmxlbmd0aCAtIDEsIHMpKS5qb2luKCcgJykpXG4gIH0gZWxzZSB7XG4gICAgLy8gb25tZXNzYWdlIOydtOuypO2KuOyXkOyEnCDsoITri6zrsJvsnYQg7IiYIOyeiOuPhOuhnSDrqZTsi5zsp4Ag7KCE64usXG4gICAgc2VuZFJlc3VsdCh7XG4gICAgICByZXN1bHRQb3N0Um91dGVzOiBjb252ZXJ0UmVzdWx0VG9MaXN0KHJlc3VsdFJvdXRlTWFwKSxcbiAgICAgIHJlc3VsdFRhZ1JvdXRlczogUi51bmlxQnkodGFnUm91dGUgPT4gdGFnUm91dGUubmFtZSwgcmVzdWx0VGFnUm91dGVMaXN0KSxcbiAgICB9KVxuICB9XG59XG5cbmZ1bmN0aW9uIHNlbmROb1Jlc3VsdCgpIHtcbiAgc2VuZFJlc3VsdCh7XG4gICAgcmVzdWx0UG9zdFJvdXRlczogW10sXG4gICAgcmVzdWx0VGFnUm91dGVzOiBbXSxcbiAgfSlcbn1cblxudmFyIHNlbmRSZXN1bHQgPSAoeyByZXN1bHRQb3N0Um91dGVzLCByZXN1bHRUYWdSb3V0ZXMsIHNlYXJjaFRpbWUgfSkgPT4ge1xuICBwb3N0TWVzc2FnZSh7XG4gICAgYWN0aW9uOiBzZWFyY2hVdGlsLmFjdGlvbnMuU0VBUkNIX1NVQ0NFU1MsXG4gICAgcGF5bG9hZDoge1xuICAgICAgcmVzdWx0UG9zdFJvdXRlcyxcbiAgICAgIHJlc3VsdFRhZ1JvdXRlcyxcbiAgICAgIHNlYXJjaFRpbWUsXG4gICAgfSxcbiAgfSlcbn1cblxudmFyIGluY3JlYXNlUG9pbnQgPSAoeyByZXN1bHRSb3V0ZU1hcCwgcm91dGVJZCwgYW1vdW50IH0pID0+IHtcbiAgcmV0dXJuIFIuYXNzb2NQYXRoKFxuICAgIFtyb3V0ZUlkLCAncG9pbnQnXSxcbiAgICBSLnBhdGgoW3JvdXRlSWQsICdwb2ludCddLCByZXN1bHRSb3V0ZU1hcCkgKyBhbW91bnQsXG4gICAgcmVzdWx0Um91dGVNYXBcbiAgKVxufVxuXG52YXIgYWRkTWF0Y2hpbmdSb3V0ZXMgPSAoXG4gIHJlc3VsdFJvdXRlTWFwID0ge30sXG4gIG1hdGNoaW5nUm91dGVzID0gW10sXG4gIHNlYXJjaCA9ICcnXG4pID0+IHtcbiAgbWF0Y2hpbmdSb3V0ZXMuZm9yRWFjaCgocm91dGVJZCA9IDApID0+IHtcbiAgICB2YXIgbWF0Y2hpbmdEYXRhID0gcm91dGVNYXBbcm91dGVJZF1cblxuICAgIGlmICghcmVzdWx0Um91dGVNYXBbcm91dGVJZF0pIHtcbiAgICAgIC8vIOy2lOqwgOuQmOyWtCDsnojsp4Ag7JWK64uk66m0IOyDiOuhnCDstpTqsIDtlZzri6QuIOq4sOuzuCBwb2ludOuKlCAxXG4gICAgICByZXN1bHRSb3V0ZU1hcFtyb3V0ZUlkXSA9IHtcbiAgICAgICAgZGF0YTogbWF0Y2hpbmdEYXRhLFxuICAgICAgICBwb2ludDogMSxcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8g7J2066+4IOy2lOqwgOuQmOyWtCDsnojri6TrqbQgcG9pbnTrpbwg7Kad6rCA7Iuc7YKo64ukLlxuICAgICAgcmVzdWx0Um91dGVNYXAgPSBpbmNyZWFzZVBvaW50KHtcbiAgICAgICAgcmVzdWx0Um91dGVNYXAsXG4gICAgICAgIHJvdXRlSWQsXG4gICAgICAgIGFtb3VudDogMSxcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgLy8g6rKA7IOJIOygnOuqqeyXkCDtj6ztlajrkJjslrQg7J6I64uk66m0IO2PrOyduO2KuCDstpTqsIDtlZzri6QuXG4gICAgaWYgKFxuICAgICAgbWF0Y2hpbmdEYXRhLnRpdGxlLnNwbGl0KCcgJykuZmlsdGVyKHcgPT4gdy5tYXRjaChgXiR7c2VhcmNofWApKS5sZW5ndGggPlxuICAgICAgMFxuICAgICkge1xuICAgICAgcmVzdWx0Um91dGVNYXAgPSBpbmNyZWFzZVBvaW50KHsgcmVzdWx0Um91dGVNYXAsIHJvdXRlSWQsIGFtb3VudDogMTAgfSlcbiAgICB9XG5cbiAgICAvLyDtg5zqt7jsl5Ag7Y+s7ZWo65CY7Ja0IOyeiOuLpOuptCDtj6zsnbjtirgg7LaU6rCA7ZWc64ukLlxuICAgIGlmIChcbiAgICAgIG1hdGNoaW5nRGF0YS50YWdzLmZpbHRlcih0ID0+IHQudG9Mb3dlckNhc2UoKS5tYXRjaChgXiR7c2VhcmNofWApKVxuICAgICAgICAubGVuZ3RoID4gMFxuICAgICkge1xuICAgICAgcmVzdWx0Um91dGVNYXAgPSBpbmNyZWFzZVBvaW50KHsgcmVzdWx0Um91dGVNYXAsIHJvdXRlSWQsIGFtb3VudDogNSB9KVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gcmVzdWx0Um91dGVNYXBcbn1cblxudmFyIGFkZE1hdGNoaW5nVGFnVG9Sb3V0ZSA9ICh0YWcgPSAnJykgPT4ge1xuICByZXR1cm4geyBuYW1lOiB0YWcsIHJvdXRlOiBzZWFyY2hVdGlsLmdldFRhZ1JvdXRlKHRhZykgfVxufVxuXG4vKipcbiAqIOqysOqzvCDrnbzsmrDtirgg66e17J2EIOuwsOyXtOuhnCDrs4DtmZjtlZjqs6AsIHBvaW5066GcIOygleugrO2VnOuLpC5cbiAqL1xudmFyIGNvbnZlcnRSZXN1bHRUb0xpc3QgPSAocmVzdWx0UG9zdFJvdXRlcyA9IHt9KSA9PiB7XG4gIHZhciByb3V0ZUlkcyA9IE9iamVjdC5rZXlzKHJlc3VsdFBvc3RSb3V0ZXMpXG4gIHZhciBzb3J0ZWRSb3V0ZXMgPSBSLnBpcGUoXG4gICAgUi5tYXAocm91dGVJZCA9PiByZXN1bHRQb3N0Um91dGVzW3JvdXRlSWRdKSxcbiAgICBSLnNvcnQoKGEsIGIpID0+IGIucG9pbnQgLSBhLnBvaW50KVxuICApKHJvdXRlSWRzKVxuXG4gIHJldHVybiBzb3J0ZWRSb3V0ZXNcbn1cblxuZnVuY3Rpb24gZ2V0Um91dGVUaXRsZU1hcChwYXlsb2FkID0ge30pIHtcbiAgdmFyIHJvdXRlVGl0bGVNYXAgPSB7fVxuICB2YXIgcm91dGVNYXBLZXlzID0gT2JqZWN0LmtleXMocm91dGVNYXApXG5cbiAgcm91dGVNYXBLZXlzLmZvckVhY2goa2V5ID0+IHtcbiAgICByb3V0ZVRpdGxlTWFwW3JvdXRlTWFwW2tleV0ucm91dGVdID0gcm91dGVNYXBba2V5XS50aXRsZVxuICB9KVxuXG4gIHBvc3RNZXNzYWdlKHtcbiAgICBhY3Rpb246IHNlYXJjaFV0aWwuYWN0aW9ucy5HRVRfUk9VVEVfVElUTEVfTUFQX1NVQ0NFU1MsXG4gICAgcGF5bG9hZDoge1xuICAgICAgcm91dGVUaXRsZU1hcDogcm91dGVUaXRsZU1hcCxcbiAgICB9LFxuICB9KVxufVxuIl19
