#Minix
The extremely lightweight RESTful routing library

---

##Registering Endpoints

```
var minix = require('minix');
minix.register("/user","POST",registerUser);

function registerUser(request,response) {
//...
}
```

register accepts 3 parameters:

* `url_regex`: A regular expression that will be tested against the url of requests to the server.
* `method`: The method that this endpoint responds to. I.E. "POST", "GET","DELETE", etc.
* `callback`: The function that will be called if the regex evaluates to true for the appropriate method.

---

##Starting a server

```
var http = require('http');
http.createServer(minix.Handler).listen(8080,"127.0.0.1");
```

`minix.Handler` will handle routing all incomming requests to your registered endpoints!

---

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
