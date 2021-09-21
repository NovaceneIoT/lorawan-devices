function toHexString(byteArray) {
  return Array.from(byteArray, function(byte) {
    return ('0' + (byte & 0xFF).toString(16)).slice(-2);
  }).join('')
}

function decodeUplink(input) {
    return {
        "data": { "payload": toHexString(input.bytes).toUpperCase() }
    }
}

