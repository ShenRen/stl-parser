var cp = require('child_process')
var parse = require('./parsestring.js')
var concat = require('concat-stream')

module.exports = function(admesh, file, callback){
	var stlfile = { minx: 1, maxx: '', miny: '', maxy:'', minz: '', maxz: '', facets: '', volume: '' };
	var child = cp.spawn(admesh, [file])

	var write = concat(function(code){
		callback(false, stlfile)
	})
	child.stdout.pipe(write)

}
