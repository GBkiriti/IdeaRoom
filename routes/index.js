var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'alumni' });
});
router.get('/l', function (req, res) {
  res.render('response', {
    title: 'dashboard',
    emergencies: [
      {
        location: {
          lat: 17.35,
          lng: 78.35
        },
        vehicleNumber: "AP29BX1929"
      },
      {
        location: {
          lat: 19.25,
          lng: 87.35
        },
        vehicleNumber: "AP29BX2522"
      },
      {
          location:{
            lat:11.34,
            lng:34.43,
          },
          vehicleNumber:"AP23ajs33"
      },
    ]
  });
});
module.exports = router;
