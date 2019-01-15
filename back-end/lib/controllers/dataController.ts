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
                return;
            }
            var toSend={
                temperature: [],
                humidite_air: [],
                humidite_1: [],
                humidite_2: [],
                humidite_3: [],
                humidite_4: [],
                humidite_5: [],
                humidite_6: [],
                air: [],
                pressure: [],
                lumiere: [],
            };


            var temp = new Data();
            for (var i=0; i<data.length; i++){
                temp=new Data(data[i])
                for (var j in toSend ){
                    toSend[j].push({x: new Date(temp['date']).getTime(),y:temp[j] }) ;
                }
            }
            //console.log(toSend)
            res.json(toSend);
        });
    }

    public getLastAcquisition (req: Request, res: Response) {

        Data.find().sort({"date": -1}).limit(1).exec({}, (err, data) => {
            if(err){
                res.send(err);
            }
            res.json(data[0]);
        });
    }


}