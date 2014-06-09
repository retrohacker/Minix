/**
 * MINIX
 * The extremely lightweight routing library.
 * It simply maps regular expressions to functions.
 * You pass it a string, if it finds an expression that matches,
 * it returns the mapped function!
 */

//The map of strings to functions
var endpoints = {}

//The default function to return when no regex's match
var fallback = function() {}

/**
 * Route checks the endpoints for a regex that evaluates to true against
 * the url. In the event a match is found, route returns its function,
 * if not route returns the fallback function. The fallback function
 * can be set using module.exports.setFallback(cb)
 */
module.exports = function route(url) {
  var callback
  Object.keys(endpoints).forEach(function(val) {
    if(callback) return
    if(url.match(val)) {
      callback = endpoints[val]
    }
  })
  callback = callback || fallback
  return callback
}

/**
 * setFallback sets the default function to return in the event
 * route() does not find a matching regex.
 */
module.exports.setFallback = function setFallback(cb) {
  fallback = cb
}

/**
 * Register a new regular expression and callback for minix to track
 */
module.exports.newEndpoint = function(regex,cb) {
  endpoints[regex] = cb
}
