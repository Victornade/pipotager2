import * as mongoose from 'mongoose';
import { AuthSchema } from '../models/authModel';
import { Request, Response } from 'express';
import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";

const Auth = mongoose.model('Auth', AuthSchema);
//Clé de cryptage du password
const SALT_KEY = '$2a$10$gqvuJcqDMjpURRuBG1kX8OW65GTgGw0FNDPNTOjwafv0ZrdHbkXKy';

//clé de cryptage du token
const SECRET_KEY="1w5Hf$/5&r645gjYms!gHb?/5&r645g45gjYms!gH28ja5Hf$/5&r645gjYms!0oo!";

export class AuthController {


    public addNewAuth(req: Request, res: Response) {

        let newAuth = new Auth(req.headers);
        if(!newAuth.login || ! newAuth.password ){
            return res.status(401).json({
                failed: 'Missing arguments'
            });
        }

        bcrypt.hash(newAuth.password, SALT_KEY, function(err, hash){
            if(err){
                console.log(err);
                return res.status(401).json({
                    failed: 'Error while Crypting password'
                });
            }
            else {
                newAuth.password = hash;
                newAuth.save((err, auth) => {
                    if (err) {
                        return res.status(401).json({
                            failed: 'Error while saving user'
                        });
                    }
                    else {
                        res.json(auth);
                    }
                });
            }
        });

    }

    public authentificate(req: Request, res: Response) {
        let usr = new Auth(req.body);
        Auth.find({login: usr.login}, (err, auth) => {

            if (err) {
                return res.status(401).json({
                    failed: 'Error while logging'
                });
            }

            if(auth.length == 0){
                return res.status(401).json({
                    failed: 'Unauthorized Access : Login doesn\'t exist'
                });
            }

            //Comparing password crypted and caller
            bcrypt.compare(usr.password, auth[0].password, function(err, result){

                if(err){
                    return res.status(401).json({
                        failed: 'Error while logging'
                    });
                }
                if(!result){
                    return res.status(401).json({
                        failed: 'Unauthorized Access: Wrong password'
                    });
                }

                //adding tokenKey
                const JWTToken = jwt.sign({
                        login: auth[0].login,
                        password: auth[0].password,
                        _id: auth._id
                    },
                    SECRET_KEY,
                    {
                        expiresIn: '2h'
                    });

                auth[0].password=" ";
                auth[0].token=JWTToken;

                return res.status(200).json({
                    success: 'Connection success',
                    user: auth[0]
                });


            })

        });
    }

    public checkAuthentification(token, callback){

        if(!token)
        {
            callback("No Token",null);
            return;
        }

        jwt.verify(token, SECRET_KEY, function(err, decoded){
            if(err){
                callback("Invalid Token",null)
                console.log(err);
                return;
            }

            callback(null, decoded)
        } )
    }

    public getAuths (req: Request, res: Response) {
        Auth.find({}, (err, auth) => {
            if(err){
                res.send(err);
            }
            res.json(auth);
        });
    }

    public getAuthWithID (req: Request, res: Response) {
        Auth.findById(req.params.authId, (err, auth) => {
            if(err){
                res.send(err);
            }
            res.json(auth);
        });
    }

    public updateAuth (req: Request, res: Response) {
        Auth.findOneAndUpdate({ _id: req.params.authId }, req.body, { new: true }, (err, auth) => {
            if(err){
                res.send(err);
            }
            res.json(auth);
        });
    }

    public deleteAuth (req: Request, res: Response) {
        Auth.remove({ _id: req.params.authId }, (err, auth) => {
            if(err){
                res.send(err);
            }
            res.json({ message: 'Successfully deleted auth!'});
        });
    }


}