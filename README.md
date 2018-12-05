# Middleware - Arquichat

IIC2173 - Proyecto semestral. Middleware para integrar APIs de distintos grupos (2 y 3).

## Instalar y ejecutar middleware de Express JS

#### Instalar Express JS

```
$ cd apijs
$ npm install express --save
$ npm install express
```

#### Instalar dependencias

```
$ npm install
```

Caso falte instalar algún modulo, ejecute `npm install <module_name>`.

#### Ejecutar Middleware

```
$ npm start
```

Caso la app no corra, ejecuten `npm uninstall express` y eliminen el directorio `node_modules`. Una vez hecho eso, vuelvan a ejecutar todos los comandos desde `npm install express --save`

## API

URL en localhost: _http://localhost:4000/api_

Estamos usando nuestra api y la api del [grupo 3](https://arquitransocialnetwork.docs.apiary.io/#).

## USERS - GET

### ALL USERS: _http://localhost:4000/api/users/_

```
headers: {
    "Content-Type":"application/json",
    "authorization":[<nuestro_token>, <token_otro_grupo_1>, <token_otro_grupo_2>, ...]
}
```

### USER: _http://localhost:4000/api/user/:user_id/_

```
headers: {
    "Content-Type":"application/json",
    "authorization":[<nuestro_token>, <token_otro_grupo_1>, <token_otro_grupo_2>, ...]
}
```

## USERS - POST

### LOGIN: _http://localhost:4000/api/login/_

```
headers: {
    "Content-Type":"application/json",
}

body: {
    "email": email,
    "password": str
}
```

### NEW USER: _http://localhost:4000/api/users/_

```
headers: {
    "Content-Type":"application/json",
}

body: {
    "username": str,
    "email": email,
    "password": str
}
```

## GROUPS - GET

### ALL GROUPS: _http://localhost:4000/api/groups_

```
headers: {
    "Content-Type":"application/json",
    "authorization":[<nuestro_token>, <token_otro_grupo_1>, <token_otro_grupo_2>, ...]
}
```

### GROUP: _http://localhost:4000/api/groups/:group_id/_

```
headers: {
    "Content-Type":"application/json",
    "authorization":[<nuestro_token>, <token_otro_grupo_1>, <token_otro_grupo_2>, ...]
}
```

### GROUP MESSAGE: _http://localhost:4000/api/groups/:group_id/messages/_

```
headers: {
    "Content-Type":"application/json",
    "authorization":[<nuestro_token>, <token_otro_grupo_1>, <token_otro_grupo_2>, ...]
}
```

### GROUP MEMBERS: _http://localhost:4000/api/group/:group_id/user/_

## GROUPS - POST

### GROUP MESSAGE: _http://localhost:4000/api/groups/:group_id/message/_

```
headers: {
    "Content-Type":"application/json",
    "authorization":[<nuestro_token>, <token_otro_grupo_1>, <token_otro_grupo_2>, ...]
}

body: {
    "user_id": int,
    "msg_title": str,
    "msg_content": str
}
```

### NEW GROUP: _http://localhost:4000/api/groups/_

```
headers: {
    "Content-Type":"application/json",
    "authorization":[<nuestro_token>, <token_otro_grupo_1>, <token_otro_grupo_2>, ...]
}

body: {
    "name": str,
}
```

### ADD TOPIC TO MESSAGE: _http://localhost:4000/api/topics/:topic_id/message/_

(**POST de API del grupo 3**)

```
headers: {
    "Content-Type":"application/json",
    "authorization":[<nuestro_token>, <token_otro_grupo_1>, <token_otro_grupo_2>, ...]
}

body: {
    "post_id": int,
    "topic_identifier": int
}
```

## MESSAGES - GET

### ALL MESSAGES: _http://localhost:4000/api/messages/_

```
headers: {
    "Content-Type":"application/json",
    "authorization":[<nuestro_token>, <token_otro_grupo_1>, <token_otro_grupo_2>, ...]
}
```

### MESSAGE: _http://localhost:4000/api/messages/:message_id/_

```
headers: {
    "Content-Type":"application/json",
    "authorization":[<nuestro_token>, <token_otro_grupo_1>, <token_otro_grupo_2>, ...]
}
```
