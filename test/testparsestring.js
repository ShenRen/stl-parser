var test = require('tap').test
var parse = require('../parsestring.js')

var input = "======= Results produced by ADMesh version 0.96 ======\n"
	+ "Input file         : /Users/mac/code/stl-parser/gear.stl\n"
	+ "File type          : Binary STL file\n"
	+ "Header             : STLB ASM 217.00.00.5800\n"
	+ "============== Size ==============\n"
	+ "Min X = -60.595921, Max X =  47.661232\n"
	+ "Min Y = -47.652676, Max Y =  47.662365\n"
	+ "Min Z = -4.000000, Max Z =  10.000000\n"
	+ "========= Facet Status ========== Original ============ Final ==\n"
	+ "Number of facets                 : 80146               80146\n"
	+ "Facets with 1 disconnected edge  :     0                   0\n"
	+ "Facets with 2 disconnected edges :     0                   0\n"
	+ "Facets with 3 disconnected edges :     0                   0\n"
	+ "Total disconnected facets        :     0                   0\n"
	+ "=== Processing Statistics ===     ===== Other Statistics =====\n"
	+ "Number of parts       :     1        Volume   :  31109.189453\n"
	+ "Degenerate facets     :     0\n"
	+ "Edges fixed           :     0\n"
	+ "Facets removed        :     0\n"
	+ "Facets added          :     0\n"
	+ "Facets reversed       :     0\n"
	+ "Backwards edges       :     0\n"
	+ "Normals fixed         :    48\n"

test('its an object', function object(t){
	t.plan(1)
	t.equal(typeof parse(input), 'object')
})


test('values are correct', function parsingText(t){
	t.equal(parse(input).facets, 80146)
	t.equal(parse(input).minx, -60.595921)
	t.equal(parse(input).maxx, 47.661232)
	t.equal(parse(input).miny, -47.652676)
	t.equal(parse(input).maxy, 47.662365)
	t.equal(parse(input).maxz, 10.000000)
	t.equal(parse(input).minz, -4.000000)
	t.equal(parse(input).volume, 31109.189453)
	t.end()
})

test('all results are numbers', function numbers(t){
	t.equal(typeof parse(input).facets, 'number')
	t.equal(typeof parse(input).minx, 'number')
	t.equal(typeof parse(input).maxx, 'number')
	
	t.end()
})

