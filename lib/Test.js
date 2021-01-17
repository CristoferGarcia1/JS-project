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

let image1 = new Landscape("Imagen 1", "Esta es la primera imagen", "C:/Users/Images/", "X = 10, y = 25");
let image2 = new Landscape("Imagen 2", "Esta es la segunda imagen", "C:/Users/Images/", "X = 23, y = 65");
let image3 = new Portrait("Imagen 3", "Esta es la tercera imagen", "C:/Users/Images/", "X = 43, y = 87");
let image4 = new Portrait("Imagen 4", "Esta es la cuarta imagen", "C:/Users/Images/", "X = 122, y = 277");
let image5 = new Portrait("Imagen 5", "Esta es la quinta imagen", "C:/Users/Images/", "X = 65, y = 178");

function testGallery(){

    let gallery = Gallery.getInstance();
    console.log(gallery.title); // Galeria de Fotos
    console.log(gallery.addCategory(category1)); // 1
    console.log(gallery.addCategory(category2)); // 2
   /*  console.log(gallery.addCategory()); // Category can't be null 
    console.log(gallery.addCategory(category1)); // The Category already exists */
    gallery.categories; // Categoria 1, Categoria 2
    console.log(gallery.removeCategory(category2)); // 2
    console.log(gallery.addImage(image1,category3,author1)); // 1
    console.log(gallery.addImage(image2,category3,author2)); // 2
    console.log(gallery.addImage(image3,category3,author3)); // 3
    console.log(gallery.addImage(image4,category3,author3)); // 4
    console.log(gallery.authors); // 4
    console.log(gallery.removeImage(image2)); // 3
    try {
        console.log(gallery.getCategoryImages(category3));
    } catch (error) {
        console.log("This category contains no images");
    }
    console.log(gallery.addAuthor(author5)); //5
    console.log(gallery.removeAuthor(author5)); //4

    gallery.getAuthorImages(author3); //Imagen 3, Imagen 4
    console.log(gallery.getPortraits()); // 2
    console.log(gallery.getLandscapes()); // 1 
}

window.onload = testGallery;