#Minix

[![Greenkeeper badge](https://badges.greenkeeper.io/retrohacker/Minix.svg)](https://greenkeeper.io/)
The extremely lightweight RESTful routing library

---

```
var minix = require('./index.js')

minix.newEndpoint("/hello/[0-9]",function() {
  console.log("Hello World!")
})

minix.setFallback(function() {
  console.log("No Good")
})

minix("/hello/")()  // No Good
minix("/hello/5")() // Hello World!
```

#Documentation To Come

##Make a dirty martini

```
- 1 shotglass of Dry Vermouth
- 2 shotglasses of Gin
- 1 olive
- 1 tablespoon of olive juice
- 1 shaker
- As much ice as can fit in the shaker
```

Mix olive juice, gin, and vermouth in the shaker. Strain into martini glass. Kick back and enjoy because you are now routing incomming requests like a pro.
