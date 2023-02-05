import { Router } from 'express'
import * as profilesCtrl from '../controllers/profiles.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.get('/', checkAuth, profilesCtrl.index)
router.get('/:id', checkAuth, profilesCtrl.getProfile)
router.post('/:id/talentAccount', checkAuth, profilesCtrl.createTalentAccount)
router.post('/:id/cdAccount', checkAuth, profilesCtrl.createCdAccount)
router.put('/:id/add-photo', checkAuth, profilesCtrl.addPhoto)
router.patch('/:id', checkAuth, profilesCtrl.update)

export { router }
