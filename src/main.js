/*!
* PidieUi v0.0.1-alpha-1
* (c) 2019 Tedir Ghazali
* Released under the Apache License 2.0
*/


    function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }

    function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        return Constructor;
    }

    function _defineProperty(obj, key, value) {
        if (key in obj) {
            Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true
            });
        } else {
            obj[key] = value;
        }
        return obj;
    }

    function _objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {};
            var ownKeys = Object.keys(source);
            if (typeof Object.getOwnPropertySymbols === 'function') {
                ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
                    return Object.getOwnPropertyDescriptor(source, sym).enumerable;
                }));
            }
            ownKeys.forEach(function (key) {
                _defineProperty(target, key, source[key]);
            });
        }
        return target;
    }

    function _inheritsLoose(subClass, superClass) {
        subClass.prototype = Object.create(superClass.prototype);
        subClass.prototype.constructor = subClass;
        subClass.__proto__ = superClass;
    }
    
    var Editor = function () {
        var NAME = 'editor';
        var VERSION = '0.0.1';
        var DATA_KEY = 'ct.editor';
        var EVENT_KEY = "." + DATA_KEY;
        var DATA_API_KEY = '.data-api';
        
        var Editor = function () {
            function Editor(element) {
                this._element = element;
            }
            var _proto = Editor.prototype;
            
            _proto.init = function (){
                alert('saya');
            } 
            
            _createClass(Editor, null, [{
                key: "VERSION",
                get: function get() {
                  return VERSION;
                }
            }]);
            return Editor;
        }();
        
        return Editor;
    }();
    
