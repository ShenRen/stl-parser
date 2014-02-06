var cp = require('child_process')
var concat = require('concat-stream')

module.exports = function(admesh, file, callback){
	
	var child = cp.spawn(admesh, [file])

	var write = concat(function(code){
		parsedResult = {}
		parsedResult.minx = parseFloat(/Min X = (.*),/.exec(code)[1])
		parsedResult.minx = parseFloat(/Min X = (.*),/.exec(code)[1])
		parsedResult.maxx = parseFloat(/Max X =\s*(.*)/.exec(code)[1])
		parsedResult.miny = parseFloat(/Min Y = (.*),/.exec(code)[1])
		parsedResult.maxy = parseFloat(/Max Y =\s*(.*)/.exec(code)[1])
		parsedResult.minz = parseFloat(/Min Z = (.*),/.exec(code)[1])
		parsedResult.maxz = parseFloat(/Max Z =\s*(.*)/.exec(code)[1])
		parsedResult.facets = parseFloat(/Number of facets\s*:\s(\d*)/.exec(code)[1])
		parsedResult.volume = parseFloat(/Volume\s*:\s*(.*)/.exec(code)[1])
		callback(false, parsedResult)
	})
	child.stdout.pipe(write)
	

}
