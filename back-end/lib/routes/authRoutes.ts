import {Request, Response} from "express";

import { AuthController } from "../controllers/authController";


export class AuthRoutes {


    public authController: AuthController = new AuthController();

    public routes(app): void {
        app.route('/')
            .get((req: Request, res: Response) => {
                res.status(200).send({
                    message: 'GET request successfulll!!!!'
                })
            })


        // Create a new auth
        app.route('/auth')
            .post(this.authController.addNewAuth)
        // Authentification
            .put(this.authController.authentificate)
        // Get all auths
            .get((req, res) => {
            this.authController.checkAuthentification(req.headers['x-auth-token'], (err, decoded) =>{
                if(err){
                    console.log(err)
                    return res.send(null);
                }
                return this.authController.getAuths(req, res);
            })

            })

        // get a specific auth
        app.route('/auth/:authId')
            .get(this.authController.getAuthWithID)
            // update a specific auth
            .put(this.authController.updateAuth)
            // delete a specific auth
            .delete(this.authController.deleteAuth)
    }

}