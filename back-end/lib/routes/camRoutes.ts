import {Request, Response} from "express";

import { CamController } from "../controllers/camController";

import { AuthController } from "../controllers/authController";



export class CamRoutes {


    public camController: CamController = new CamController();
    public authController: AuthController = new AuthController();

    public routes(app): void {

        // Get socket
        app.route('/live')
            .get((req, res) => {
                this.authController.checkAuthentification(req.headers['x-auth-token'], (err, decoded) => {
                    if (err) {
                        console.log(err)
                        return res.send(null);
                    }
                    console.log(decoded)
                    return this.camController.getCam(req, res);
                })

            });




    }
}