var express = require('express');
var router = express.Router();
var bodyParser = require("body-parser");
var path = require('path');
var _ = require('lodash');

var RequestHandlerBase = require("./RequestHandlerBase");
var UsersManager = require("../lib/UsersManager");
var DatabaseManager = require("../lib/DatabaseManager");
var Utils = require("../lib/Utils");
var Const = require("../const");
var async = require('async');
var formidable = require('formidable');
var fs = require('fs-extra');
var path = require('path');
var mime = require('mime');
var SocketAPIHandler = require('../SocketAPI/SocketAPIHandler');
var UserModel = require("../Models/UserModel");
var MessageModel = require("../Models/MessageModel");

var LatestMessageListHandler = function(){
    
}

_.extend(LatestMessageListHandler.prototype,RequestHandlerBase.prototype);

LatestMessageListHandler.prototype.attach = function(router){
        
    var self = this;

    /**
     * @api {get} /message/list/latest/:roomID/:lastMessageID Get all latest messages
     * @apiName Get all latest messages
     * @apiGroup WebAPI
     * @apiDescription Get all latest message from the room

     * @apiParam {String} RoomID ID of room
     * @apiParam {String} lastMessageID MessageID of last message
     *     
     * @apiSuccessExample Success-Response:
{

{
    "success": 1,
    "result": [
        {
            "__v": 0,
            "_id": "55d2d194caf997b543836fc8",
            "created": 1439879572232,
            "message": "",
            "roomID": "test",
            "type": 1001,
            "user": {
                "userID": "test",
                "name": "test",
                "avatarURL": "http://45.55.81.215:80/img/noavatar.png",
                "token": "UI6yHxeyZnXOZ1EgT6g5ftwD",
                "created": 1439878817506,
                "_id": "55d2cea1caf997b543836fb2",
                "__v": 0
            },
            "userID": "test",
            "seenBy": [
                {
                    "user": {
                        "userID": "test2",
                        "name": "test2",
                        "avatarURL": "http://45.55.81.215:80/img/noavatar.png",
                        "token": "YMsHeg3KEQIhtvt46W5fgnaf",
                        "created": 1439878824411,
                        "_id": "55d2cea8caf997b543836fb6",
                        "__v": 0
                    },
                    "at": 1439879572353
                },
                {
                    "user": {
                        "userID": "test3",
                        "name": "tset3",
                        "avatarURL": "http://45.55.81.215:80/img/noavatar.png",
                        "token": "TahnOaC6JzldCh6gAmJs3jMC",
                        "created": 1439878820142,
                        "_id": "55d2cea4caf997b543836fb4",
                        "__v": 0
                    },
                    "at": 1439879572361
                }
            ]
        },
        ...
    ]
}

    */
    
    router.get('/:roomID/:lastMessageID',function(request,response){
        
        var roomID = request.params.roomID;
        var lastMessageID = request.params.lastMessageID;

        if(Utils.isEmpty(lastMessageID)){
            
            self.errorResponse(
                response,
                Const.httpCodeSucceed,
                Const.responsecodeParamError,
                Utils.localizeString("Please specify lastMessageID."),
                false
            );
        
            return;
            
        }

        if(Utils.isEmpty(roomID)){
            
            self.errorResponse(
                response,
                Const.httpCodeSucceed,
                Const.responsecodeParamError,
                Utils.localizeString("Please specify roomID."),
                false
            );
        
            return;
            
        }
        
        async.waterfall([
        
            function (done) {

                MessageModel.findAllMessages(roomID,lastMessageID,function (err,data) {
                    
                    done(err,data);

                });
                
            },
            function (messages,done) {

                MessageModel.populateMessages(messages,function (err,data) {
                    
                    done(err,data);

                });
                
            }
        ],
            function (err, result) {
                
                if(err){
                    self.errorResponse(
                        response,
                        Const.httpCodeSucceed,
                        Const.responsecodeParamError,
                        Utils.localizeString(err),
                        true
                    );
                }else{
                    self.successResponse(response,result);
                }
                     
            }
        );
        
    });
    

}

new LatestMessageListHandler().attach(router);
module["exports"] = router;
