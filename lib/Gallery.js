"use strict";
//Objet Gallery

//Declaración objeto Gallery mediante patrón Singleton
let Gallery = (function () { //La función anónima devuelve un método getInstance que permite obtener el objeto único
	let instantiated; //Objeto con la instancia única Gallery

	function init() { //Inicialización del Singleton
		function Gallery(){
            //La función se invoca con el operador new
            if (!(this instanceof Gallery)) throw new InvalidAccessConstructorException();

            //Definición de atributos privados del objeto
            let _title = "Galeria de Fotos";
            let _categories = [];
            let _images = [];
            let _authors = [];

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

            Object.defineProperty(this, 'categories', {
                get:function(){
                    return _categories.forEach(elem => console.log(elem.category.title));
                }
            });

            Object.defineProperty(this, 'authors', {
                get:function(){
                    return _authors;
                }
            });

            this.addCategory = function(category){
                let i = _categories.find( e => e.category === category );
                if (!category) throw new NullCategory();
                if (i !== undefined) throw new CategoryExists();
                _categories.push({category: category, images: []});
                return _categories.length;
            }

            this.removeCategory = function(category){
                //Este metodo lo implemento de esta manera porque entiendo que aunque se elimine la categoria las imagenes siguen existiendo
                let i = _categories.find( e => e.category === category );
                if (!i) throw new CategoryNotRegistered();
                let a = _categories.indexOf(i);
                delete _categories[a].category; //Aqui elimino la propiedad category del objeto, se queda como undefined, sigue habiendo los mismos objetos en el array. Esto puede causar problemas
                return _categories.length;
            }

            this.addImage = function(image,category,author){
                if (!image) throw new NullImage();
                _categories.push({category: category, images: []});
                let i = _categories.find( e => e.category === category );
                let a = _categories.indexOf(i);
                _categories[a].images.push(image);
                _images.push({image: image, author: author});
                _authors.push(author);
                return _images.length;
            }

            this.removeImage = function(image){
                //Este metodo lo implememento de esta manera porque entiendo que si se elimina una imagen tambien se elimina el author de la galeria
                let i = _images.find( e => e.image === image );
                if (!i) throw new ImageDoesNotExist();
                let a = _images.indexOf(i);
                _images.splice(a,1);
                return _images.length;
            }

            this.getCategoryImages = function(category){
                if (!category) throw new NullCategory();
                let i = _categories.find( e => e.category === category );
                return i.images;
            }

            this.addAuthor = function(author){
                if (!author) throw new NullAuthor();
                _authors.push(author);
                return _authors.length;
            }

            this.removeAuthor = function(author){
                let i = _authors.indexOf(author);
                if (i === -1) throw new AuthorDoesNotExist();
                if ( i !== -1 ) _authors.splice( i, 1 );
                return _authors.length;
            }

            this.getAuthorImages = function(author){
                if (!author) throw new NullAuthor();
                for (let i = 0; i < _images.length; i++) {
                    if (_images[i].author === author) {
                        console.log(_images[i].image.title);
                    }
                }
            }

            this.getPortraits = function(){
                let portraits = _images.filter(e => e.image instanceof Portrait);
                return portraits;
            }

            this.getLandscapes = function(){
                let landscapes = _images.filter(e => e.image instanceof Landscape);
                return landscapes;
            }
		}
		Gallery.prototype = {};
		Gallery.prototype.constructor = Gallery;
        
		let sc = new Gallery();//Devolvemos el objeto Gallery para que sea una instancia única.
		Object.freeze(sc);
        return sc;
        
    } //Fin inicialización del Singleton
    
	return {
		// Devuelve un objeto con el método getInstance
		getInstance: function () {
			if (!instantiated) { //Si la variable instantiated es undefined, priemera ejecución, ejecuta init.
				instantiated = init(); //instantiated contiene el objeto único
			}
			return instantiated; //Si ya está asignado devuelve la asignación.
		}
	};
})();