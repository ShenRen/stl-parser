module.exports = function(admeshOutput){
	var parsedResult = {facets:"", minx:0}


		parsedResult.minx = parseFloat(/Min X = (.*),/.exec(admeshOutput)[1])
		parsedResult.maxx = parseFloat(/Max X =\s*(.*)/.exec(admeshOutput)[1])
		parsedResult.miny = parseFloat(/Min Y = (.*),/.exec(admeshOutput)[1])
		parsedResult.maxy = parseFloat(/Max Y =\s*(.*)/.exec(admeshOutput)[1])
		parsedResult.minz = parseFloat(/Min Z = (.*),/.exec(admeshOutput)[1])
		parsedResult.maxz = parseFloat(/Max Z =\s*(.*)/.exec(admeshOutput)[1])
		parsedResult.facets = parseFloat(/Number of facets\s*:\s(\d*)/.exec(admeshOutput)[1])
		parsedResult.volume = parseFloat(/Volume\s*:\s*(.*)/.exec(admeshOutput)[1])



	return parsedResult
}
