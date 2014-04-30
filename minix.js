var Minix = {};
endpoints = [];

Minix.register = function (url_regex, method, callback) {
    if(typeof endpoints[url_regex] === "undefined") {
        endpoints[url_regex] = {};
    }
    endpoints[url_regex][method.toUpperCase()] = callback;
}

Minix.Handler = function (req,res) {
    if(Object.keys(endpoints).every(function (regex,index,array) {
        if(req.url.match(regex)) {
            method = req.method.toUpperCase();
            methods = endpoints[regex];
            if(methods.hasOwnProperty(method)) {
                methods[method](req,res);
                return false;
            }
        }
        return true;
    }))
    res.writeHead(404,{'Content-Type':'application/json'});
    res.write('{"Status Code":404,"Status":"404 Not Found","Message":"The requested endpoint \''+req.method+" "+req.url+'\' has not been defined on this server"}');
    res.end();
}

module.exports = Minix;
