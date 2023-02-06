import { Router } from 'express'
import * as talentCtrl from '../controllers/talent.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.patch('/:id', checkAuth, talentCtrl.update)

export { router }
