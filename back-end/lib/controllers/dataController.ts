import * as mongoose from 'mongoose';
import { DataSchema } from '../models/dataModel';
import { Request, Response } from 'express';

const Data = mongoose.model('Data', DataSchema);


export class DataController {


    public addNewData(req: Request, res: Response) {

        let newData = new Data(req.body);

        newData.save((err, data) => {
            if (err) {
                return res.status(401).json({
                    failed: 'Error while storing data'
                });
            }
            else {
                res.json(data);
            }
        });

    }

    public getDatas (req: Request, res: Response) {
        Data.find({}, (err, data) => {
            if(err){
                res.send(err);
            }
            res.json(data);
        });
    }

    public getLastAcquisition (req: Request, res: Response) {
        Data.find().sort({"datetime": -1}).limit(1).exec({}, (err, data) => {
            if(err){
                res.send(err);
            }
            res.json({temperature: 90});//data);
        });
    }


}