var express = require('express');
var router = express.Router();
var app = express();

module.exports=(db)=>{
    router.get('/', function(req, res, next) {
            res.setHeader('Access-Control-Allow-Origin',req.headers.origin);//当前服务允许跨域        
            let Sql="SELECT * FROM data";
            db.query(Sql,(err,data)=>{
            return  res.send(data);
                    next();
                })
        });
  return router;
}






