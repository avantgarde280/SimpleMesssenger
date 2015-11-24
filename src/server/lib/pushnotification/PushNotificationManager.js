var mongoose = require('mongoose');
var _ = require('lodash');

var Const = require('../consts.js');
var Conf = require('../init.js');

var ConversationModel = require('../../Models/Conversation');
var UserModel = require('../../Models/User');

var AmazonSNS = require('./AmazonSNS');


var PushNotificationManager = {
    
    // receives user id to send push
    
    onNewMessage : function(message){
        
        var conversationModel = ConversationModel.get();
        var self = this;
        
        if(message.roomID){
    
            conversationModel.findOne({
                _id: message.roomID
            },function(err,result){
                
                if(!result)
                    return;
                    
                if(err)
                    console.log(err);
                else{
                    
                    console.log("message",message);
                    
                    // create payload
                    var payload = {
                    
                        message : {
                            userID:message.userID,
                            roomID:message.roomID,
                            message:message.message,
                            type:message.type,
                            created:message.created
                            
                        }
                    }
                    
                    UserModel.getUsersById(result.users,function(usersResult){
                        self.send(usersResult,message.message,payload);
                    })
                    
                }
                
            });
                        
        }
        
    },
    sendOne: function(user,message,payload){
        
        return this.send([user],message,payload);
        
    },
    send: function(users,message,payload){
        
        AmazonSNS.send(users,message,payload);
                        
    }
    
}

module["exports"] = PushNotificationManager;
