exports.assignHeader = function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    req.headers["Content-Type"] = "application/json";
    if (!(req.headers.authorization)) {
        req.headers.authorization = "[\"token1\", \"token2\"]";
    }
    req.headers.authorization = JSON.parse(req.headers.authorization);
    let header_1 = req.headers.authorization[0];
    let header_2 = req.headers.authorization[1];
    // request charette 5
    let req_api_1 = req;
    req_api_1.headers.authorization = header_1;
    // request charette 9
    let req_api_2 = req;
    req_api_2.headers.authorization = "Bearer " + header_2;
    // Con esto podemos hacer que los reqs a cada url se puedan acceder directamente.
    req.charette5req = req_api_1;
    req.charette9req = req_api_2;
    next();
}