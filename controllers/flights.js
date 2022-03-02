import { Flight } from '../models/flight.js'
import { Meal } from '../models/meal.js'


function newFlight(req, res){
  res.render('flights/new')
}

function create(req, res) {
  const flight = new Flight(req.body)
  flight.save(function(err) {
    if (err) {
      return res.redirect('/flights/new')
    }
    res.redirect(`/flights/${flight._id}`)
  })
}

function index(req, res) {
  Flight.find({}, function (error, flights) {
    res.render('flights/index', {
      flights: flights,
    })
  })
}

function show(req, res) {
  Flight.findById(req.params.id)
  .populate('carte')
  .exec(function(err, flight) {
    Meal.find({_id: {$nin: flight.carte}}, function (err, meals) {
      res.render('flights/show', {
        flight: flight,
        title: 'Flight Detail', 
        meals: meals,
      })
    })
  })
}

function deleteFlight(req, res) {
  Flight.findByIdAndDelete(req.params.id, function(err, flight){
    res.redirect('/flights')
  })
}

function createTicket(req, res) {
  Flight.findById(req.params.id, function(err, flight) {
    flight.tickets.push(req.body)
    flight.save(function(err) {
      res.redirect(`/flights/${flight._id}`)
    })
  })
}

function addToMeals(req, res) {
  Flight.findById(req.params.id, function(err, flight) {
    flight.carte.push(req.body.mealId)
    flight.save(function(err) {
      res.redirect(`/flights/${flight._id}`)
    })
  })
}

export {
  newFlight as new,
  create,
  index,
  show,
  deleteFlight as delete,
  createTicket,
  addToMeals,
}