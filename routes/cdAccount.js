import { Router } from 'express'
import * as cdCtrl from '../controllers/cd.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.post('/:id/lists', checkAuth, cdCtrl.createList)
router.post('/:id/blacklist/:talentId', checkAuth, cdCtrl.addToBlacklist)
router.patch('/:id', checkAuth, cdCtrl.update)

export { router }
