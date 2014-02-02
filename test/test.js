var test = require('tap').test
var index = require('../index.js')

var admesh = '/Users/mac/Downloads/admesh-0.96/admesh'
var file = '/Users/mac/code/stl-parser/gear.stl'

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

test('the object has numbers', function numbers(t){
	index(admesh, file, function(error, output){
		t.equal(typeof output.minx, 'number')
		t.end()
	})
})
