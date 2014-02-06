var test = require('tap').test
var index = require('../index.js')
var admesh = '/Users/mac/Downloads/admesh-0.96/admesh'
var file = '/Users/mac/code/stl-parser/gear.stl'

var input = "======= Results produced by ADMesh version 0.96 ======\n"
	+ "Input file         : /Users/mac/code/stl-parser/gear.stl\n"
	+ "File type          : Binary STL file\n"
	+ "Header             : STLB ASM 217.00.00.5800\n"
	+ "============== Size ==============\n"
	+ "Min X = -60.595921, Max X =  47.661232\n"
	+ "Min Y = -47.652676, Max Y =  47.662365\n"
	+ "Min Z = -4.000000, Max Z =  10.000000\n"
	+ "========= Facet Status ========== Original ============ Final ==\n"
	+ "Number of facets                 : 80146          80146\n"
	+ "Facets with 1 disconnected edge  :     0              0\n"
	+ "Facets with 2 disconnected edges :     0              0\n"
	+ "Facets with 3 disconnected edges :     0              0\n"
	+ "Total disconnected facets        :     0              0\n"
	+ "=== Processing Statistics ===     ===== Other Statistics =====\n"
	+ "Number of parts       :     1        Volume   :  31109.189453\n"
	+ "Degenerate facets     :     0\n"
	+ "Edges fixed           :     0\n"
	+ "Facets removed        :     0\n"
	+ "Facets added          :     0\n"
	+ "Facets reversed       :     0\n"
	+ "Backwards edges       :     0\n"
	+ "Normals fixed         :    48\n"


test('values are correct', function corectValues(t){
	index(admesh, file, function(error, output){
	t.equal(output.facets, 80146)
	t.equal(output.minx, -60.595921)
	t.equal(output.maxx, 47.661232)
	t.equal(output.miny, -47.652676)
	t.equal(output.maxy, 47.662365)
	t.equal(output.maxz, 10.000000)
	t.equal(output.minz, -4.000000)
	t.equal(output.volume, 31109.189453)
	t.end()	
	})
})

test('theyre all numbers', function allNumbers(t){
	index(admesh, file, function(error, output){
		Object.getOwnPropertyNames(output).forEach(function(element, index, array){
		t.equal(typeof output[element], 'number')
		})
		t.end()
	})
})


test('only called once', function once(t){
	t.plan(1)
	index(admesh, file, function(){
		t.ok(true, 'function was called')
	})
})

test('no errors!', function noError(t){
	t.plan(1)
	index(admesh, '/Users/mac/code/stl-parser/gear.stl', function(error, output){
		t.notOk(error, "no error!")

	})

})

test('its an object', function isIt(t){
	t.plan(1)
	index(admesh, file, function(error, output){
		t.equal(typeof output, 'object')
	})
})

test('testing a different file', function(t){
	index(admesh, '/Users/mac/code/stl-parser/bridge.stl', function(error, output){
		console.log(output)
	})
	t.end()
})
