var getCharette5 = function (key, path_input) {
    let charette5 = {
        //GET
        // SESSION
        "login": "accounts/login",
        "logout": "users/logout",
        // USERS
        "get_all_users": "users",
        "get_user": `users/${path_input}`,
        "get_user_groups": `/users/${path_input}/groups`,
        // GROUPS
        "get_all_groups": "groups",
        "get_group": `groups/${path_input}`,


        "all_messages": "",
        "user_by_id": "",
        "comments": "",
    };
    let host_api = 'http://charette5.ing.puc.cl/';
    let path_api = host_api.concat(charette5[key]);

    return path_api;
}


var getCharette9 = function (key, path_input) {
    let charette9 = {

        //GET
        // SESSION
        "login": "login",
        "logout": "",
        // USERS
        "get_all_users": "users",
        "get_user": ``,
        "get_user_groups": ``,
        // GROUPS
        "get_all_groups": "topics",
        "get_group": ``,
    };

    let host_api = 'https://charette9.ing.puc.cl/';
    let path_api = host_api.concat(charette9[key]);

    return path_api;
}