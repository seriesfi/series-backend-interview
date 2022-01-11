import { Request, Response } from 'express'

export default (request: Request, response: Response) => { 
    response.status(200).json({
        message: 'Welcome to the Pokemon API!'
    })
}