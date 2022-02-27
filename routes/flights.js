import { Router } from 'express'
const router = Router()
import * as flightsCtrl from '../controllers/flights.js'

router.get('/', flightsCtrl.index)
//GET /flights/new
router.get('/new', flightsCtrl.new)
// POST /movies
router.post('/', flightsCtrl.create)


export {
  router
}
