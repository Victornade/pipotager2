"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const dataModel_1 = require("../models/dataModel");
const Data = mongoose.model('Data', dataModel_1.DataSchema);


export class DataController {
    addNewData(req, res) {
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
    getDatas(req, res) {
        console.log('get all');
        Data.find({}, (err, data) => {
            if (err) {
                res.send(err);
                return;
            }

            var toSend = [
                { name: "temperature", fillColor: 'rgb(	255, 0, 0,0.5)', color: 'rgb(255, 0, 0,1)',   data: [] , yAxis:1, type: 'line', turboThreshold:0 },
                { name: "humidite_air", fillColor:'	rgb(65, 105, 225,0.5)', color: 'rgb(65, 105, 225,1)',   data: [] , yAxis:0, type: 'line', turboThreshold:0 },
                { name: "humidite_1",   data: [] , type: 'line', turboThreshold:0 },
                { name: "humidite_2",   data: [] , type: 'line', turboThreshold:0 },
                { name: "humidite_3",   data: [] , type: 'line', turboThreshold:0 },
                { name: "humidite_4",   data: [] , type: 'line', turboThreshold:0 },
                { name: "humidite_5",   data: [] , type: 'line', turboThreshold:0 },
                { name: "humidite_6",   data: [] , type: 'line', turboThreshold:0 },
                { name: "air",   data: [] , type: 'line', turboThreshold:0 },
                { name: "pression",   data: [] , yAxis:2, type: 'line', turboThreshold:0 },
                { name: "lux", fillColor:'rgb(238, 238, 0,0.5)',color: 'rgb(238, 238, 0,1)', yAxis:0,   data: [] , type: 'area', turboThreshold:0 },
                { name: "pm25",   data: [] , type: 'area', turboThreshold:0 },
                { name: "pm10",   data: [] , type: 'area', turboThreshold:0 },
                { name: "pm100",   data: [] , type: 'area', turboThreshold:0 },
                { name: "apm25",   data: [] , type: 'line', turboThreshold:0 },
                { name: "apm10",   data: [] , type: 'line', turboThreshold:0 },
                { name: "apm100",   data: [] , type: 'line', turboThreshold:0 },
                { name: "gt03um",   data: [] , type: 'line', turboThreshold:0 },
                { name: "gt05um",   data: [] , type: 'line', turboThreshold:0 },
                { name: "gt10um",   data: [] , type: 'line', turboThreshold:0 },
                { name: "gt25um",   data: [] , type: 'line', turboThreshold:0 },
                { name: "gt50um",   data: [] , type: 'line', turboThreshold:0 }
            ];
            var temp = new Data();

            for (var i = 0; i < data.length; i++) {
                temp = new Data(data[i]);
                for (var j=0; j<toSend.length; j++) {
                    if (temp[toSend[j].name] >= 0) {
                        toSend[j].data.push({ x: new Date(temp['date']).getTime(), y: temp[toSend[j].name] });
                    }
                }
            }
            //console.log(toSend)
            res.json(toSend);
        }).sort({"date": -1}).limit(1000);
    }
    getLastAcquisition(req, res) {
        Data.find().sort({ "date": -1 }).limit(1).exec({}, (err, data) => {
            if (err) {
                res.send(err);
            }
            res.json(data[0]);
        });
    }
}
exports.DataController = DataController;
//# sourceMappingURL=dataController.js.map