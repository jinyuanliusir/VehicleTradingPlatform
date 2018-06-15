import * as R from "ramda";

export default {
	namespace : "carlist" , 
	state : {
		filter : {

		},
		cars : []
	},
	reducers : {
		addorchangefilter_sync(state , {name , value}){
			return R.set(R.lensProp("filter"),R.set(R.lensProp(name),value,state.filter),state);
		},
		//删除过滤器
		delfilter_sync(state , {names}){
			return R.set(R.lensProp("filter"),R.omit(names,state.filter),state);
		},
		//更改车辆
		changecars_sync(state , {results}){
			return R.set(R.lensProp("cars"),results,state);
		}
	},
	effects : {
		//增加或者改变过滤器
		*addorchangefilter({name , value} , {put , select}){
			yield put({"type":"addorchangefilter_sync",name , value});

			const filter = yield select(({carlist})=>carlist.filter);

			const {results} = yield fetch("/cars" , {
				"method" : "POST" ,
				"headers" : {
					"Content-Type" : "application/json"
				},
				"body" : JSON.stringify(filter)
			}).then(data=>data.json());

			yield put({"type" : "changecars_sync" , results})
		},
		//删除过滤器
		*delfilter({names} , {put , select}){
			yield put({"type":"delfilter_sync",names});

			const filter = yield select(({carlist})=>carlist.filter);

			const {results} = yield fetch("/cars" , {
				"method" : "POST" ,
				"headers" : {
					"Content-Type" : "application/json"
				},
				"body" : JSON.stringify(filter)
			}).then(data=>data.json());

			yield put({"type" : "changecars_sync" , results})
		}
	} 
}