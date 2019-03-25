const express = require('express');

function routes(CustomerPreference) {
    const router = express.Router();

    //todo: Though this implementation is good for now, create a handler later for the inner functionality for scalability
    // so that it sits in a different module than router and can leverage common functionalities.
    router.route('/customerpreference')
        //get all customer preference records
        .get((req, res) => {
            CustomerPreference.find((err, preferences) => {
                if (err) {
                    return res.send(err);
                }
                return res.json(preferences);
            });
        })
        // create a new customer preference record
        .post((req, res) => {
            const preference = new CustomerPreference(req.body);
            if (!req.body.name) {
                res.status(400);
                return res.send('Bad data.');
            }
            preference.save();
            res.status(201);
            return res.json(preference);
        });

    //get customer preferences for a customerId
    router.route('/customerpreference/customer/:CustomerId')
        .get((req, res) => {
            CustomerPreference.find({ customerId: req.params.CustomerId }, (err, preferences) => {
                if (err) {
                    return res.send(err);
                }
                return res.json(preferences);
            });
        });
        
    router.use('/customerpreference/:Id', (req, res, next) => {
        CustomerPreference.findById(req.params.Id, (err, preference) => {
            if (err) {
                return res.send(err);
            }
            if (preference) {
                req.preferenceFromDB = preference;
                return next();
            }
            return res.sendStatus(404);
        });
    });
    
    router.route('/customerpreference/:Id')
        //get customer preference by id
        .get((req, res) => {
            res.json(req.preferenceFromDB);
        })
        //delete a record by id
        .delete((req, res) => {
            CustomerPreference.deleteOne({"_id": req.params.Id}, (err) => {
                if (err) {
                    return res.send(err);
                }
                return res.sendStatus(204);
            });
        });



    return router;
}

module.exports = routes;
