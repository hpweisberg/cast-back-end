import { Router } from 'express'
import * as talentCtrl from '../controllers/talent.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.post('/:id/experience', checkAuth, talentCtrl.createExperience)
router.post('/:id/education', checkAuth, talentCtrl.createEducation)
router.post('/:id/training', checkAuth, talentCtrl.createTraining)
router.patch('/:id', checkAuth, talentCtrl.update)
router.patch('/:id/experience/:experienceId', checkAuth, talentCtrl.updateExperience)
router.patch('/:id/education/:educationId', checkAuth, talentCtrl.updateEducation)
router.patch('/:id/training/:trainingId', checkAuth, talentCtrl.updateTraining)
router.delete('/:id/experience/:experienceId', checkAuth, talentCtrl.deleteExperience)
router.delete('/:id/education/:educationId', checkAuth, talentCtrl.deleteEducation)
router.delete('/:id/training/:trainingId', checkAuth, talentCtrl.deleteTraining)


export { router }
