import{ Flight } from '../models/flight.js'


function newFlight(req, res){
  res.render('flights/new')
}

function create(req, res) {
  console.log('this works', req.body)
  const flight = new Flight(req.body)
  flight.save(function(err) {
    if (err) {
      // return res.redirect('/flights/new')
      console.log(err)
    }
    res.redirect('/flights/new')
  })
}

function index(req, res) {
  Flight.find({}, function (error, flights) {
    res.render('flights/index', {
      flights: flights,
    })
  })
}

// function show(req, res) {
//   Flight.findById(req.params.id, function(err, flight) {
//     res.render('flights/show', {

//     })
//   })
// }

export {
  newFlight as new,
  create,
  index,
}