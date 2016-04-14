var options= {
	filters: []
}
if(typeof require !== "undefined"){
	options.filters.push(require("./uuid"))
}else{
	options.filters.push(module.exports.EDDYSTONE_FILTER)
}

var eddystoneFactory= function(o){
	return Promise.resolve(o).then(function(o){
		o= o|| {}
		if(!o.filters){
			o.filters= options.filters
		}else{
			for(var filter of options.filters){
				var add= options.filters.filter(function(f){
					return o.filters.indexOf(f) === -1
				})
				o.filters.push.apply(o.filters, add)
			}
		}
		return navigator.bluetooth.requestDevice(o)
	})
}

if(typeof module !== "undefined"){
	module.exports= eddystoneFactory
}
