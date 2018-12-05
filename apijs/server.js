const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 4000;

const inboxMessagesRoutes = require("./routers/inboxMessagesRoutes");
const groupMessagesRoutes = require("./routers/groupMessagesRoutes");
const usersRoutes = require("./routers/usersRoutes");
const groupsRoutes = require("./routers/groupsRoutes");
const api9Routes = require("./routers/api9Routes")

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.get("/", (req, res) => res.send("Hello World!"));
app.use("/inbox", inboxMessagesRoutes);
app.use("/users", usersRoutes);
app.use("/groups", groupsRoutes);
app.use("/groups", groupMessagesRoutes);
app.use("/api", api9Routes);

app.listen(port, () => console.log(`Server gate listening on port ${port}!`));