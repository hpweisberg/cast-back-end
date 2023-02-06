import { Router } from 'express'
import * as cdCtrl from '../controllers/cd.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.get('/:id/lists/:listId', checkAuth, cdCtrl.showList)
router.post('/:id/lists', checkAuth, cdCtrl.createList)
router.post('/:id/blacklist/:talentId', checkAuth, cdCtrl.addToBlacklist)
router.patch('/:id', checkAuth, cdCtrl.update)
router.delete('/:id/lists/:listId', checkAuth, cdCtrl.deleteList)

export { router }
