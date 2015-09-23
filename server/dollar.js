/**
 * Created by davidhoverson on 9/22/15.
 */
var USD = function(num){
    var newnum = "$" + (num.toFixed(2));
    return newnum;
}

module.exports = USD;
