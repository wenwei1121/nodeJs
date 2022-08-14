// CommonJs every file is module (by default)
// Modules - Encapsulated(封裝的) Code (only share minimum)

const names = require('./4-names')
const { john } = require('./4-names')
const sayhi = require('./5-utils')
const data = require('./6-alternative-flavor')

require("./7-mind-grenade") // 在該檔有直接執行函式 所以直接輸出log

console.log(data)
sayhi(names.john)
sayhi(john)
sayhi("sarah")