//const proxy = require("http-proxy-middleware");
import proxy from 'http-proxy-middleware'
export const app = () =>{
    app.use(
        proxy(["/api", , "/otherApi"], { target: "https://warm-eyrie-80483.herokuapp.com" })
    )
}
/*
module.exports = function(app) {
    app.use(
        proxy(["/api", , "/otherApi"], { target: "http://localhost:5000" })
    );
};
"proxy": "https://warm-eyrie-80483.herokuapp.com",
*/
