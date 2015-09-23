/**
 * Created by davidhoverson on 9/22/15.
 */
var randomNumber = require("./random");
var dollarConversion = require("./dollar");

var accountBalance = function () {
    return dollarConversion(randomNumber());
};



var accountText = function () {
    return "Account balance:\n" + accountBalance();
};
exports.accountBalance = accountBalance;
exports.accountText = accountText;
