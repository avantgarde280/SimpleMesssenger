var $ = require('jquery');
var _ = require('lodash');
var validator = require('validator');

var Const = require('../../../lib/consts.js');

var Utils = require('../../../lib/utils.js');
var template = require('./EditProfile.hbs');
var UpdateProfileClient = require('../../../lib/APIClients/UpdateProfileClient');
var loginUserManager = require('../../../lib/loginUserManager');

var EditProfile = {
    show: function(title, text, onRetry) {
    
        var self = this;
        
        $('body').append(template({
            title: title,
            text: text
        }));
        $('#modal-profile').on('hidden.bs.modal', function(e) {
            $('#modal-profile').remove();
            
        })

        $('#modal-profile').on('show.bs.modal', function (e) {
            self.load();

            var user = loginUserManager.getUser();
            $('form [name="display-name"]').val(user.get('displayName'));

        })
        
        $('#modal-profile').modal('show');
        $('#modal-btn-close').unbind().on('click', function() {
            self.hide();
        });
    },
    hide: function(onFinish) {
        $('#modal-profile').on('hidden.bs.modal', function(e) {
            $('#modal-profile').remove();
            if (!_.isUndefined(onFinish)) {
                onFinish();
            }
        })
        
        $('#modal-profile').modal('hide');
    },
    load : function(){
        
        var self = this;
        
        $('#modal-btn-save').unbind().on('click', function() {
            
            self.save();
            
        });
        
    },
    save : function(){
        
        $('#modal-profile .alert-danger').hide();
        
        var errorMessage = this.validate();
        
        if(!_.isEmpty(errorMessage)){
            
            $('#modal-profile .alert-danger').text(errorMessage);
            $('#modal-profile .alert-danger').show();
         
            return;   
        
        }
        
        this.doSave();
        
    },
    validate : function(){
        
        var displayName = $('form [name="display-name"]').val();
        
        if(_.isEmpty(displayName)){
            
            return Utils.l10n("Please input display name.");
            
        }
        
    },
    doSave : function(){
        
        $('#modal-btn-save').attr('disabled','disabled');
        $('#modal-profile .progress').show();
        
        var displayName = $('form [name="display-name"]').val();
        var file = $('form [name="file"]')[0].files[0];
                
        UpdateProfileClient.send(displayName,file,function(response){
            
            $('#modal-btn-save').removeAttr('disabled');
            $('#modal-profile .progress').hide();

            $('#modal-profile .alert-success').show();
            _.debounce(function(){
                
                loginUserManager.getUser().set('displayName',displayName);
                $('#modal-profile').modal('hide');
                
            },500)();

        },function(progress){
            
            $('#modal-profile .progress-bar').css('width',progress * 100 + "%");
    
        },function(errCode){

            var message = "";
            
            if(Const.ErrorCodes[errCode])
                message = Utils.l10n(Const.ErrorCodes[errCode]);
            else
                message = Utils.l10n("Critical Error");
                
            $('#form-signup #btn-signup').removeAttr('disabled');	

            $('#modal-profile .alert-danger').text(message);
            $('#modal-profile .alert-danger').show();

            $('#modal-profile .progress').hide();           
            $('#modal-btn-save').removeAttr('disabled'); 
            
        });
        
    }
    
}
module.exports = EditProfile;