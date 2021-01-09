"use strict";

function Author(nickname, email, avatar){
    //La función se invoca con el operador new
    if (!(this instanceof  Author)) throw new InvalidAccessConstructorException();

    //Validación de parámetros obligatorios
    if (!nickname) throw new NullNickName("nickname");
    if (!email) throw new NullEmail("email");
    
    //Definición de atributos privados del objeto
    let _nickname = nickname;
    let _email = email;
    let _avatar = avatar;


    //Propiedades de acceso a los atributos privados
    Object.defineProperty(this, 'nickname', {
        get:function(){
            return _nickname;
        },
        set:function(value){
            if (!value) throw new NullNickName("nickname");
            _nickname = value;
        }
    });

    Object.defineProperty(this, 'email', {
        get:function(){
            return _email;
        },
        set:function(value){
            if (!value) throw new NullEmail("email");
            _email = value;
        }
    });

    Object.defineProperty(this, 'avatar', {
        get:function(){
            return _avatar;
        },
        set:function(value){
            _avatar = value;
        }
    });

}
 Author.prototype = {};
 Author.prototype.constructor =  Author;