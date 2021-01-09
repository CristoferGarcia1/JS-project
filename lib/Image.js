"use strict";

function Imagen(title, description, url, coords){
    //La función se invoca con el operador new
    if (!(this instanceof  Imagen)) throw new InvalidAccessConstructorException();

    //Validación de parámetros obligatorios
    if (!title) throw new EmptyTitle("title");
    if (!url) throw new EmptyUrl("url");

    //Definición de atributos privados del objeto
    let _title = title;
    let _description = description;
    let _url = url;
    let _coords = coords;

    //Propiedades de acceso a los atributos privados
    Object.defineProperty(this, 'title', {
        get:function(){
            return _title;
        },
        set:function(value){
            if (!value) throw new EmptyTitle("title");
            _title = value;
        }
    });

    Object.defineProperty(this, 'description', {
        get:function(){
            return _description;
        },
        set:function(value){
            _description = value;
        }
    });

    Object.defineProperty(this, 'url', {
        get:function(){
            return _url;
        },
        set:function(value){
            _url = value;
        }
    });

    Object.defineProperty(this, 'coords', {
        get:function(){
            return _coords;
        },
        set:function(value){
            _coords = value;
        }
    });

    Object.defineProperty(this, 'author', {
        get:function(){
            return _author;
        }
    });

}
 Imagen.prototype = {};
 Imagen.prototype.constructor =  Imagen;