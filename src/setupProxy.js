const proxy = require("http-proxy-middleware");

module.exports = function(app) {
    app.use(
        proxy(["/api", , "/otherApi"], { target: "https://warm-eyrie-80483.herokuapp.com" })
    );
};

/*"proxy": "https://warm-eyrie-80483.herokuapp.com",*/
