
//  ListPicker.js
//
// Created by Robert Hovhannisyan on 2014-06-12
//
// Copyright 2014 Robert Hovhannisyan. All rights reserved.
// MIT Licensed
var exec = require('cordova/exec');
var platform = require('cordova/platform');

var ListPicker = function() {}

ListPicker.prototype.showPicker = function(options, callback, error_callback) {
    options || (options = {});
    var scope = options.scope || null;
    
    var config = {
        title: options.title || ' ',
        selectedValue: options.selectedValue || '',
        items: options.items || {},
        style: options.style || 'default',
        doneButtonLabel: options.doneButtonLabel || 'Done',
        cancelButtonLabel: options.cancelButtonLabel || 'Cancel'
    };
    
    var _callback = function() {
        if(typeof callback == 'function') { 
          callback.apply(scope, arguments);
        }
    };
    
    var _error_callback = function() {
        if(typeof error_callback == 'function') { 
          error_callback.apply(scope, arguments);
        }
    };
    cordova.exec(_callback, _error_callback, 'ListPicker', 'showPicker', [config]);
}


ListPicker.prototype.alert = function(message, completeCallback, title, buttonLabel) {
    
    var _title = (title || "Alert");
    var _buttonLabel = (buttonLabel || "OK");
    var _callback = function() {
        if(typeof callback == 'function') { 
            callback.apply(null, arguments);
        }
    };        
    
    cordova.exec(_callback, null, 'Notification', 'alert', [message, _title, _buttonLabel]);
}

module.exports = new ListPicker();
