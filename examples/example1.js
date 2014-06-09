var minix = require('./index.js')

minix.newEndpoint("/hello/[0-9]",function() {
  console.log("Hello World!")
})

minix.setFallback(function() {
  console.log("No Good")
})

minix("/hello/")()  // No Good
minix("/hello/5")() // Hello World!
