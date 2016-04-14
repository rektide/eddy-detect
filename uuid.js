var
  hex= "0xfeaa",
  uuid= parseInt(hex, 16)

module.exports= new Number(uuid)
module.exports.uuid= uuid
module.exports.EDDYSTONE_SERVICE_UUID= uuid
module.exports.hex= hex
module.exports.EDDYSTONE_SERVICE_UUID_HEX= hex

module.exports.EDDYSTONE_FILTER= {services: [uuid]}

module.exports.EDDYSTONE_UID= parseInt("0x00", 16)
module.exports.EDDYSTONE_URL= parseInt("0x10", 16)
module.exports.EDDYSTONE_TLM= parseInt("0x20", 16)
