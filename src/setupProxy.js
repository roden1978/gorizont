const proxy = require("http-proxy-middleware");

module.exports = function(app) {
    app.use("/api",
        proxy({
            target: "http://gt59.ru:5005",
            changeOrigin: true
        })
    );
};

/*Для деплоя убрать из package.json строку "proxy": "http://localhost:8080",
* и переименовать файл _setupProxy.js -> setupProxy.js
*
* for Heroku
* app.use(
        proxy('/api', {
            target: "https://warm-eyrie-80483.herokuapp.com",
            changeOrigin: true })
    );
    *
    *
    * app.use(
        '/__',
        proxy({
            target: 'https://warm-eyrie-80483.herokuapp.com',
            secure: false,
            changeOrigin: true
        })
    )
    *
    * app.use("/forecast",
   proxy({
      target: "https://api.darksky.net/",
      changeOrigin: true
   })
);
* */

