var pool = require('../config/database');


exports.postMeasurement = function(req, res, next) {

    // Extract data from request body intro variables
    var { sensor_id, celcius, humidity } = req.body;

    // Check if variables are int, float and float
    var dataValid = (
        Number.isInteger(sensor_id) &&
        typeof celcius == 'number' &&
        typeof humidity == 'number'
    )

    if (dataValid) {
        // DO NOT insert user generated values into the string directly
        var insertSQL = `INSERT INTO measurements (sensor_id, celcius, humidity) VALUES ($1, $2, $3);`
        var values = [sensor_id, celcius, humidity]
        // Pass an array of values as the second 
        // argument for pool.query() method to 
        // build the query string safely.
        pool.query(insertSQL, values, (error, result) => {
            if (error) {
                res.status(400).send(error);
            } else {
                res.status(200).send('Saved to database.\n');
            }
        });

    } else {
        res.status(400).send('Please check that your data types are correct');
    }

}

exports.getLatestMeasurement = function(req, res, next) {
    // Get most recent measurement from db and return as JSON.
    pool.query('SELECT * FROM measurements ORDER BY created DESC LIMIT 10;', (error, results) => {
        if (error)
            throw error;
        res.status(200).json(results.rows);
    });
}