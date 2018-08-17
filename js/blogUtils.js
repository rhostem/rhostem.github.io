/**
 * UMD module deinitions for node.js and browser
 */
;(function(global, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['exports'], factory)
  } else if (typeof exports !== 'undefined') {
    factory(exports)
  } else {
    var mod = {
      exports: {},
    }
    factory(mod.exports)
    global.blogUtils = mod.exports
  }
})(this, function(exports) {
  function getTagRoute(tag = '') {
    return `/tag/${tag.replace(/\s+/g, '_').toLowerCase()}`
  }

  exports.getTagRoute = getTagRoute
})
