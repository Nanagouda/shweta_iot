/* controllers/measureControllers.js */

exports.postMeasurement = function(req, res, next) {
    var temp = req.body.temperature;
    res.send(`The temperature is: ${temp}`);
}

exports.getLatestMeasurement = function(req, res, next) {
    res.send('The latest measurement was');
}

