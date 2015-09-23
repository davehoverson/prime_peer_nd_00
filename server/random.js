/**
 * Created by davidhoverson on 9/22/15.
 */
var rand = function () {
    return (Math.floor(Math.random() * (1 + 1000000 - 100) + 100));
}

module.exports = rand;