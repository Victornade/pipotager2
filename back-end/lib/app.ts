//TUTO https://itnext.io/building-restful-web-apis-with-node-js-express-mongodb-and-typescript-part-1-2-195bdaf129cf

import * as express from "express";
import * as bodyParser from "body-parser";
import * as mongoose from "mongoose";


//Routes perso
import { AuthRoutes } from "./routes/authRoutes";
import { DataRoutes } from "./routes/dataRoutes";

class App {

    public app: express.Application;
    public routeAuth: AuthRoutes = new AuthRoutes();
    public routeData: DataRoutes = new DataRoutes();
    public mongoUrl: string = "mongodb://superadmin:mongo4ed%3B@192.168.1.12:27017/admin";


    constructor() {

        this.mongoSetup();
        this.app = express();

        this.config();
        this.routeAuth.routes(this.app);
        this.routeData.routes(this.app);

    }

    private config(): void{

        this.app.use((req, res, next) => {
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Headers', '*')
            res.setHeader('Access-Control-Allow-Methods', 'DELETE, PUT, POST, GET');
            next();
        });



        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

    private mongoSetup(): void{
        mongoose.Promise = global.Promise;
        mongoose.connect(this.mongoUrl,{  useNewUrlParser: true}, function(err, db) {
            if (err) {
                console.log('Unable to connect to the server. Please start the server. Error:', err);
            } else {
                console.log('Connected to Server successfully!');
            }
        });
    }

}

export default new App().app;