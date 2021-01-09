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
            let _categories = [{category: category1, images: [] }];
            let _images = [{image: image1, authors: [] }];
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
                /* let i = _categories.category.indexOf(category);
                if (!category) throw new NullCategory("categories");
                if (i !== -1) throw new CategoryExists("categories");
                _categories.category = category;
                */
                _categories.push({category: category});
            }

            this.removeCategory = function(category){
                if (category.title === _categories.category.title) {
                    delete _categories.category;
                }
                return _categories.length;
            }

            this.addImage = function(image,category,author){
                if (!image) throw new NullImage("image");
                if(_categories.category = category){
                    this.category.images.push(image)
                    _images.authors.push(author);
                }
            }

            this.removeImage = function(image){
                let i = _images.image.indexOf(image);
                if (i === -1) throw new ImageDoesNotExist("image");
                if ( i !== -1 ) _images.splice( i, 1 );
                return _images.length;
            }

            this.getCategoryImages = function(category){
                if (!category) throw new NullCategory("categories");
            }

            this.addAuthor = function(author){
                let i = _authors.indexOf(author);
                if (!author) throw new NullAuthor("author");
                _authors.push(author);
                return _authors.length;
            }

            this.removeAuthor = function(author){
                let i = _authors.indexOf(author);
                if (i === -1) throw new AuthorDoesNotExist("author");
                if ( i !== -1 ) _authors.splice( i, 1 );
                return _authors.length;
            }

            this.getAuthorImages = function(author){
                if (!author) throw new NullAuthor("author");
            }

            this.getPortraits = function(){
                let portraits = _images.filter(e => e instanceof Portrait);
                return portraits;
            }

            this.getLandscapes = function(){
                let landscapes = _images.filter(e => e instanceof Landscape);
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