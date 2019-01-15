import {Request, Response} from "express";

import { DataController } from "../controllers/dataController";

import { AuthController } from "../controllers/authController";



export class DataRoutes {


    public dataController: DataController = new DataController();
    public authController: AuthController = new AuthController();

    public routes(app): void {

        // Create a new data
        app.route('/data')
            .post((req, res) => {
                this.authController.checkAuthentification(req.headers['x-auth-token'], (err, decoded) => {
                    if (err) {
                        console.log(err)
                        return res.send(null);
                    }
                    return this.dataController.addNewData(req, res);
                })
            })
            // Get all datas
            .get((req, res) => {
                this.authController.checkAuthentification(req.headers['x-auth-token'], (err, decoded) => {
                    if (err) {
                        console.log(err)
                        return res.send(null);
                    }
                    console.log(decoded)
                    return this.dataController.getDatas(req, res);
                })

            });

        // get a specific data
        app.route('/data/last')
            .get((req, res) => {
                this.authController.checkAuthentification(req.headers['x-auth-token'], (err, decoded) => {
                    if (err) {
                        console.log(err);
                        return res.send(null);
                    }
                    return this.dataController.getLastAcquisition(req, res);
                })
            });


    }
}