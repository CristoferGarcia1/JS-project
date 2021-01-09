"use strict";

function Coords(latitud, longitud){
    //La función se invoca con el operador new
    if (!(this instanceof  Coords)) throw new InvalidAccessConstructorException();

    //Validación de parámetros obligatorios
    if (!latitud) throw new NullLatitud("latitud");
    if (!longitud) throw new NullLongitud("latitud");
    
    //Definición de atributos privados del objeto
    let _latitud = latitud;
    let _longitud = longitud;

    //Propiedades de acceso a los atributos privados
    Object.defineProperty(this, 'latitud', {
        get:function(){
            return _latitud;
        },
        set:function(value){
            if (!value) throw new NullLatitud("latitud");
            _latitud = value;
        }
    });

    Object.defineProperty(this, 'longitud', {
        get:function(){
            return _longitud;
        },
        set:function(value){
            if (!value) throw new NullLongitud("longitud");
            _longitud = value;
        }
    });

}
 Coords.prototype = {};
 Coords.prototype.constructor =  Coords;