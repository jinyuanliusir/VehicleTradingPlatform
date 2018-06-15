var fs = require("fs");
var gm = require("gm");

var path = require("path");
 


fs.readdir(path.resolve(__dirname, "../www/carimages/"),function(err,arr){
	for (let i = 0; i < arr.length ; i++){
		let aaaa = ["view","engin","inner","more"];

		for (let j = 0; j < 4 ; j++){
			fs.readdir(path.resolve(__dirname, "../www/carimages/",arr[i],aaaa[j]),function(err,data){
				for(let k = 0 ; k < data.length ; k++){

					fs.mkdir(path.resolve(__dirname, "../www/carimages_small/", arr[i], aaaa[j]),function(err){
						gm(path.resolve(__dirname, "../www/carimages/", arr[i], aaaa[j], data[k]))
							.resize(150, 100 , "!")
							.write(path.resolve(__dirname, "../www/carimages_small/", arr[i], aaaa[j], data[k]), function (err) {
								if (err) console.log("err");
								if (!err) console.log('改好了');
							});
					})
				}
			});
		}
		
	}
})

