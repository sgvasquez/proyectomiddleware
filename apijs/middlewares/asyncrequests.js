var request = require('request');

var parser = function (body) {
    try {
        return JSON.parse(body)
    } catch (err) {
        return err;
    }
}

var requestAsync = function (host, req) {
    let token = req.headers.authorization;
    return new Promise((resolve, reject) => {
        var ans = request({
            url: host,
            method: req.method,
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            },
            form: req.body
        }, (err, response, body) => {
            if (err) return reject(err, response, body);
            resolve({
                "url": host,
                "content": parser(body)
            });
        });
    });
};

exports.makeRequests = async function (req, res, hosts) {
    try {
        var data = await Promise.all(hosts.map(function (host) {
            return requestAsync(host.url, host.req)
        }));
    } catch (err) {
        res.send(err);
        // console.log("Error " + err);
    }
    res.send(data);
}