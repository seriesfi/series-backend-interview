import { Router } from 'express'

import rootHandler from './routes/index'

const router = Router()
router.get('/', rootHandler)

export default router