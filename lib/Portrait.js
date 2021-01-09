"use strict";

function Portrait(title, description, url, coords){

    //La función se invoca con el operador new
    if (!(this instanceof Portrait))
        throw new InvalidAccessConstructorException();

        Imagen.call(this,title, description, url, coords);

    //Validación de parámetros obligatorios
    if (!title) throw new EmptyTitle("title");
    if (!url) throw new EmptyUrl("url");
    
}
Portrait.prototype = Object.create(Imagen.prototype); //Heredamos de Image
Portrait.prototype.constructor = Portrait;