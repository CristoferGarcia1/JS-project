"use strict";

function Category(title, description){
    //La función se invoca con el operador new
    if (!(this instanceof  Category)) throw new InvalidAccessConstructorException();

    //Validación de parámetros obligatorios
    if (!title) throw new EmptyTitle("title");

    //Definición de atributos privados del objeto
    let _title = title;
    let _description = description;

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

}
 Category.prototype = {};
 Category.prototype.constructor =  Category;