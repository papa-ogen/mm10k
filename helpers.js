const fs = require('fs')

// inserting an SVG
exports.icon = name => fs.readFileSync(`./public/images/icons/${name}.svg`)
