"use strict";

let category1 = new Category("Categoria 1","Primera Categoria");
let category2 = new Category("Categoria 2","Segunda Categoria");
let category3 = new Category("Categoria 3","Tercera Categoria");
let category4 = new Category("Categoria 4","Cuarta Categoria");
let category5 = new Category("Categoria 5","Quinta Categoria");

let author1 = new Author("Oscar", "Oscar1234@gmail.com", "image-1");
let author2 = new Author("Andres", "Andres_garcia@gmail.com", "image-2");
let author3 = new Author("Rafael", "Rafael_23@gmail.com", "image-3");
let author4 = new Author("Cristofer", "Cristofer_213@gmail.com", "image-4");
let author5 = new Author("LuisAndres", "LuisAndres_Olmo@gmail.com", "image-5");

let image1 = new Landscape("Primera Imagen", "Esta es la primera imagen", "C:/Users/Images/", "X = 10, y = 25");
let image2 = new Landscape("Segunda Imagen", "Esta es la segunda imagen", "C:/Users/Images/", "X = 23, y = 65");
let image3 = new Portrait("Tercera Imagen", "Esta es la tercera imagen", "C:/Users/Images/", "X = 43, y = 87");
let image4 = new Portrait("Cuarta Imagen", "Esta es la cuarta imagen", "C:/Users/Images/", "X = 122, y = 277");
let image5 = new Portrait("Quinta Imagen", "Esta es la quinta imagen", "C:/Users/Images/", "X = 65, y = 178");

function testGallery(){

    let gallery = Gallery.getInstance();
    console.log(gallery.title);
    gallery.categories;
    gallery.addCategory(category5);
    gallery.categories;
    console.log(gallery.authors);
    console.log(gallery.addAuthor(author5));
    gallery.images;
    console.log(gallery.getPortraits());
    console.log(gallery.getLandscapes());
}

window.onload = testGallery;