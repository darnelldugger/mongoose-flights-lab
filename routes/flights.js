import { Router } from 'express'
import * as flightsCtrl from '../controllers/flights.js'

const router = Router()

router.get('/', flightsCtrl.index)
//GET /flights/new
router.get('/new', flightsCtrl.new)
router.post('/', flightsCtrl.create)
// router.get("/:id", flightsCtrl.show)
// POST /movies


export {
  router
}
