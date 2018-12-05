var express = require('express');
var cors = require('cors');
var asyncRequests = require('./../middlewares/asyncrequests').makeRequests;
var assignHeaders = require('./../middlewares/assignheaders').assignHeader;

router = express.Router();

router

    .use(cors())

    // GET - USER

    .get('/users/', assignHeaders, (req, res) => {
        var hosts = [{
                url: 'http://charette5.ing.puc.cl/users/',
                req: req.charette5req
            },
            {
                url: 'https://charette9.ing.puc.cl/api/users/',
                req: req.charette9req
            }
        ];
        try {
            asyncRequests(req, res, hosts);
        } catch (err) {
            res.send(err);
        }
    })

    .get(`/users/:user_id/`, assignHeaders, (req, res) => {
        var hosts = [{
                url: `http://charette5.ing.puc.cl/users/${req.params.user_id}`,
                req: req.charette5req
            },
            {
                url: `https://charette9.ing.puc.cl/api/users/${req.params.user_id}`,
                req: req.charette9req
            }
        ];
        try {
            asyncRequests(req, res, hosts);
        } catch (err) {
            res.send(err);
        }
    })

    // GET - GROUP

    .get('/groups/', assignHeaders, (req, res) => {
        var hosts = [{
                url: 'http://charette5.ing.puc.cl/groups/',
                req: req.charette5req
            },
            {
                url: 'https://charette9.ing.puc.cl/api/topics/',
                req: req.charette9req
            }
        ];
        try {
            asyncRequests(req, res, hosts);
        } catch (err) {
            res.send(err);
        }
    })

    .get('/groups/:group_id/', assignHeaders, (req, res) => {
        var hosts = [{
                url: `http://charette5.ing.puc.cl/groups/${req.params.group_id}/`,
                req: req.charette5req
            },
            {
                url: `https://charette9.ing.puc.cl/api/topics/${req.params.group_id}/`,
                req: req.charette9req
            }
        ];
        try {
            asyncRequests(req, res, hosts);
        } catch (err) {
            res.send(err);
        }
    })

    // group members
    .get('/groups/:group_id/users/', assignHeaders, (req, res) => {
        var hosts = [{
                url: `http://charette5.ing.puc.cl/groups/${req.params.group_id}/users`,
                req: req.charette5req
            },
            {
                url: `https://charette9.ing.puc.cl/api/topics/${req.params.group_id}/subscribers/`,
                req: req.charette9req
            }
        ];
        try {
            asyncRequests(req, res, hosts);
        } catch (err) {
            res.send(err);
        }
    })

    // GET - MESSAGE

    // all messages
    .get('/messages/', assignHeaders, (req, res) => {
        var hosts = [{
                url: 'http://charette5.ing.puc.cl/comments/',
                req: req.charette5req
            },
            {
                url: 'https://charette9.ing.puc.cl/api/posts/',
                req: req.charette9req
            }
        ];
        try {
            asyncRequests(req, res, hosts);
        } catch (err) {
            res.send(err);
        }
    })

    // message by its id
    .get('/messages/:message_id/', assignHeaders, (req, res) => {
        var hosts = [{
                url: `http://charette5.ing.puc.cl/comments/${req.params.message_id}/`,
                req: req.charette5req
            },
            {
                url: `https://charette9.ing.puc.cl/api/posts/${req.params.message_id}/`,
                req: req.charette9req
            }
        ];
        try {
            asyncRequests(req, res, hosts);
        } catch (err) {
            res.send(err);
        }
    })

    // messages by group
    .get('groups/:group_id/messages/', assignHeaders, (req, res) => {
        var hosts = [{
                url: `http://charette5.ing.puc.cl/groups/${req.params.group_id}/messages/`,
                req: req.charette5req
            },
            {
                url: `https://charette9.ing.puc.cl/api/topics/${req.params.group_id}/posts/`,
                req: req.charette9req
            }
        ];
        try {
            asyncRequests(req, res, hosts);
        } catch (err) {
            res.send(err);
        }
    })

    // POST

    // login 
    .post('/login/', assignHeaders, (req, res) => {
        // let body_charette5 = {"username": req.body.email, "password":req.body.password}

        var hosts = [{
                url: 'http://charette5.ing.puc.cl/accounts/login/',
                req: req.charette5req
            },
            {
                url: 'https://charette9.ing.puc.cl/api/login/',
                req: req.charette9req
            }
        ];

        try {
            asyncRequests(req, res, hosts);
        } catch (err) {
            res.send(err);
        }
    })

    // new user 
    .post('/users/', assignHeaders, (req, res) => {
        var hosts = [{
                url: 'http://charette5.ing.puc.cl/users/',
                req: req.charette5req
            },
            {
                url: 'https://charette9.ing.puc.cl/api/users/',
                req: req.charette9req
            }
        ];
        try {
            asyncRequests(req, res, hosts);
        } catch (err) {
            res.send(err);
        }
    })

    // Create message
    .post('/groups/:group_id/message/', assignHeaders, (req, res) => {
        var hosts = [{
                url: `http://charette5.ing.puc.cl/groups/${req.params.group_id}/messages`,
                req: req.charette5req
            },
            {
                url: 'https://charette9.ing.puc.cl/api/posts/',
                req: req.charette9req
            }
        ];
        try {
            asyncRequests(req, res, hosts);
        } catch (err) {
            res.send(err);
        }
    })

    // Create group/topic
    .post('/groups/', assignHeaders, (req, res) => {
        req.charette9req.body["title"] = req.body.name;
        req.charette9req.body["description"] = "New topic created from Charette 4 - IIC2173 Group 2";
        var hosts = [{
                url: `http://charette5.ing.puc.cl/groups/`,
                req: req.charette5req
            },
            {
                url: 'https://charette9.ing.puc.cl/api/topics/',
                req: req.charette9req
            }
        ];
        try {
            asyncRequests(req, res, hosts);
        } catch (err) {
            res.send(err);
        }
    })

    // Assign message to topic - Unicamente a Charette 9
    .post('/topics/:topic_id/message/', (req, res) => {
        res.header("Access-Control-Allow-Origin", "*");

        req.headers.authorization = JSON.parse(req.headers.authorization);
        // request charette 9
        let req_api_2 = req;
        req_api_2.headers.authorization = req.headers.authorization[1];
        var hosts = [{
            url: `https://charette9.ing.puc.cl/api/topics/${req.params.topic_id}/posts/`,
            req: req_api_2
        }];
        try {
            asyncRequests(req, res, hosts);
        } catch (err) {
            res.send(err);
        }
    })

    .post('/loginc9/', assignHeaders, (req, res) => {
        var hosts = [{
                url: 'https://charette9.ing.puc.cl/api/login/',
                req: req.charette9req
            }];
        try {
            asyncRequests(req, res, hosts);
        } catch (err) {
            res.send(err);
        }
    })

module.exports = router;