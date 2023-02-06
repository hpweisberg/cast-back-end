import { Router } from 'express'
import * as cdCtrl from '../controllers/cd.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.patch('/:id', checkAuth, cdCtrl.update)

export { router }
