const { Keys } = require("casper-js-sdk")

totalNums = 5

while (true) {
    const cur = Keys.Ed25519.new()
    //console.log(cur.accountHex().substring(0, 2 + totalNums))
    if (cur.accountHex().substring(0, 2 + totalNums) == "01" + totalToNums(totalNums)) {
        console.log(cur.accountHex())
        console.log(cur.exportPrivateKeyInPem())
        console.log(cur.exportPublicKeyInPem())
        break
    }
}

function totalToNums(tNums) {
    str = ""
    for (var i = 0; i < tNums; i++) {
        str += "0"
    }
    return str
}