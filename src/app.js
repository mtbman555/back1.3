const http = require("http")
const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const methodOverride = require("method-override")

const app = express();

app.use(cors({
    origin: "*",
    methods: "GET, HEAD, PUT, POST, DELETE,OPTIONS",
    optionSuccessStatus: 200
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride());

app.use("/api/product", require("./api/product"));
app.use("/api/stock", require("./api/stock"));
app.use("/api/main", require("./api/main"));
app.use("/api/food", require("./api/food"));
app.use("/api/check", require("./api/check"));
app.use("/api/member", require("./api/member"));
app.use("/api/user", require("./api/user"));
app.use("/api/month", require("./api/month"));
app.use("/api/acc", require("./api/acc"));


 
http.createServer(app).listen(8080, function () {
    console.log("Server Start HTTP !!!!! ")    
})

