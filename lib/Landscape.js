"use strict";

function Landscape(title, description, url, coords){

    //La función se invoca con el operador new
    if (!(this instanceof Landscape))
        throw new InvalidAccessConstructorException();

    Imagen.call(this,title, description, url, coords);

    //Validación de parámetros obligatorios
    if (!title) throw new EmptyTitle("title");
    if (!url) throw new EmptyUrl("url");
    
}
Landscape.prototype = Object.create(Imagen.prototype); //Heredamos de Image
Landscape.prototype.constructor = Landscape;