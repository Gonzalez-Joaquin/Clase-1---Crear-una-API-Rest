import { Router } from 'express'

const pingRoute = Router()

pingRoute.route('/').get(() => console.log('Somone ping here'))

export default pingRoute
