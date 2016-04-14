var EDDYSTONE_SERVICE_UUID= "FEAA"
var UID= "00"
var URL= "10"
var TLM= "20"
var RESERVED1= "30"
var RESERVED2= "40"

var EDDYSTONE_UID = "0x" + EDDYSTONE_SERVICE_UUID + UID
var EDDYSTONE_URL = "0x" + EDDYSTONE_SERVICE_UUID + URL
var EDDYSTONE_TLM = "0x" + EDDYSTONE_SERVICE_UUID + TLM

var options= {
	filters: [{services: [
		EDDYSTONE_UID,
		EDDYSTONE_URL,
		EDDYSTONE_TLM
	]}]
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

module.exports= eddystoneFactory
