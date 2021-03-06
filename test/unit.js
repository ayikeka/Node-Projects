/*
 *
 * Unit Test
 * 
 */



// Dependencies
var helpers = require('./../lib/helpers');
var assert = require('assert');
var logs = require('./../lib/logs');
var exampleDebuggingProblem = require('./../lib/exampleDebuggingProblem');


// Holder for the tests
var unit = {};


// Assert that the getANumber function is returning a number
unit['helplers.getANUmber Should return number'] = function(done){
    var val = helpers.getANumber();
    assert.equal(typeof(val), 'number');
    done();
};

// Assert that the getANumber function is returning a number
unit['helplers.getANUmber Should return 1'] = function(done){
    var val = helpers.getANumber();
    assert.equal(val, 1);
    done();
};

// Assert that the getANumber function is returning a number
unit['helplers.getANUmber Should return 2'] = function(done){
    var val = helpers.getANumber();
    assert.equal(val, 2);
    done();
};

// Logs.list should callback an array and a false-error
unit['logs.list should callback a false error and an array of log names'] = function(done){
    logs.list(true,function(err, logFileNames){
        assert.equal(err, false);
        assert.ok(logFileNames instanceof Array);
        assert.ok(logFileNames.length > 1);
        done();
    });
};

// Logs. truncate should not throw if the logId does not exist 
unit['logs.truncate should not throw if the logid does not exist. It should callback an error instead'] = function(done){
    assert.doesNotThrow(function(){
        logs.truncate('I do not exist', function(err){
            assert.ok(err);
            done();
        });
    }, TypeError)
};

// exampleDebuggingProblem should not throw an error
unit['exampleDebuggingProblem.init should not throw when called'] = function(done){
    assert.doesNotThrow(function(){
        exampleDebuggingProblem.init();
        done();
    }, TypeError);
};


// Export the tests in the runner
module.exports = unit;