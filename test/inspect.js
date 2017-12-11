var chai = require('chai');
var expect = chai.expect;
var fizzBuzz = require('../index');

describe('fizzBuzz', function(){
    it('returns fizz if 3', function(){

        var expectedResult = 'fizz';
        var actualResult = fizzBuzz();
        expect(actualResult).to.equal(expectedResult);
    })
});