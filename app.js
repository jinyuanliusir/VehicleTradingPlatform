var express = require("express");
var app = express();
var fs = require("fs");
var mongoose = require("mongoose");
var formidable = require("formidable");
var Car = require("./models/Car.js");

//静态化www文件夹
app.use(express.static("www"));

//链接数据库
mongoose.connect("localhost/yayuncun");


//路由和接口
//图片展示的接口
app.get("/pics/:id" , function(req,res){
    //车辆id
    var id = req.params.id;
    var result = {};
    fs.readdir(`./www/carimages/${id}` , function(err , ds){
        result.view = fs.readdirSync(`./www/carimages/${id}/view`);
        result.inner = fs.readdirSync(`./www/carimages/${id}/inner`);
        result.engin = fs.readdirSync(`./www/carimages/${id}/engin`);
        result.more = fs.readdirSync(`./www/carimages/${id}/more`);

        res.json(result);
    });
});

//汽车的相似查询
app.get("/carlike/:brand/:series" , function(req,res){
    var brand = req.params.brand;
    var series = req.params.series;
    console.log(brand , series)
    Car.find({ brand: brand, series: series}).exec(function (err, docs) {
        res.json({"result" : docs});
    });

});

//查询接口
app.post("/cars" , function(req,res){
    var form = new formidable.IncomingForm();
    form.parse(req , function(err , chaxuntiaojianObj){

        //价格
        if(chaxuntiaojianObj.hasOwnProperty("price")){
            chaxuntiaojianObj.price = {"$gte" : chaxuntiaojianObj.price[0] , "$lte" : chaxuntiaojianObj.price[1]};
        }
        //公里数
        if(chaxuntiaojianObj.hasOwnProperty("km")){
            chaxuntiaojianObj.km = {"$gte" : chaxuntiaojianObj.km[0] , "$lte" : chaxuntiaojianObj.km[1]};
        }
        //日历
        if(chaxuntiaojianObj.hasOwnProperty("buydate")){
            chaxuntiaojianObj.buydate = {"$gte" : new Date(chaxuntiaojianObj.buydate[0]) , "$lte" : new Date(chaxuntiaojianObj.buydate[1])};
        }

        Car.find(chaxuntiaojianObj).exec(function(err,docs){
            res.json({"results" : docs});
        })
    });
});

//监听
app.listen(3000);
console.log("程序已经运行在3000端口");