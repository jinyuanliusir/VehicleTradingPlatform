//本程序给carimages文件夹中的所有中文文件夹名字改名，比如将1外观变为view
//你不用运行这个文件，老师已经改好了


var fs = require("fs");


changeOneDirectory(1000001);

function changeOneDirectory(id){
    fs.readdir("../www/carimages/" + id, function (err, ds) {
        for (var i = 0; i < ds.length; i++) {
            if (ds[i] == "1外观") {
                fs.renameSync("../www/carimages/" + id + "/" + ds[i], "../www/carimages/" + id + "/view");
            } if (ds[i] == "2内饰") {
                fs.renameSync("../www/carimages/" + id + "/" + ds[i], "../www/carimages/" + id + "/inner");
            } if (ds[i] == "3结构及发动机") {
                fs.renameSync("../www/carimages/" + id + "/" + ds[i], "../www/carimages/" + id + "/engin");
            } if (ds[i] == "4更多细节") {
                fs.renameSync("../www/carimages/" + id + "/" + ds[i], "../www/carimages/" + id + "/more");
            }
        }
        if(id < 1000100){
            changeOneDirectory(id + 1);
        }
    });
}