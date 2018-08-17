/**
 * UMD module deinitions for node.js and browser
 */
;(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(null /* ['d'] */, factory)
  } else if (typeof module === 'object' && module.exports) {
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory(/* d */)
  } else {
    // Browser globals (root is window)
    root.getTagRoute = factory(/* d */)
  }
})(this, function(/* d */) {
  function getTagRoute(tag = '') {
    return `/tag/${tag.replace(/\s+/g, '_').toLowerCase()}`
  }
  return getTagRoute
})
