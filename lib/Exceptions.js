"use strict";

//Excepcions Gallery

function BaseException(message = "Default Message", fileName, lineNumber) {
	let instance = new Error(message, fileName, lineNumber);
	instance.name = "MyError";
	Object.setPrototypeOf(instance, Object.getPrototypeOf(this));
	if (Error.captureStackTrace) {
		Error.captureStackTrace(instance, BaseException);
	}
	return instance;
}
BaseException.prototype = Object.create(Error.prototype, {
	constructor: {
		value: BaseException,
		enumerable: false,
		writable: true,
		configurable: true
	}
});

//Excepción acceso inválido a constructor
function InvalidAccessConstructorException() {
	let instance = BaseException.call(this, "Constructor can’t be called as a function.");
	instance.name = "InvalidAccessConstructorException";
	return instance;
}
InvalidAccessConstructorException.prototype = Object.create(BaseException.prototype);
InvalidAccessConstructorException.prototype.constructor = InvalidAccessConstructorException;

//Excepción personalizada para indicar que el titulo no puede estar vacio.
function EmptyTitle(param) {
	let instance = BaseException.call(this, "Error: Title cannot be empty. ");
	instance.name = "EmptyTitle";
	instance.param = param;
	return instance;
}
EmptyTitle.prototype = Object.create(BaseException.prototype);
EmptyTitle.prototype.constructor = EmptyTitle;

//Excepción personalizada para indicar que la categoria no puede ser Null.
function NullCategory() {
	let instance = BaseException.call(this, "Error: Category cannot be null. ");
	instance.name = "NullCategory";
	return instance;
}
NullCategory.prototype = Object.create(BaseException.prototype);
NullCategory.prototype.constructor = NullCategory;

//Excepción personalizada para indicar que la categoria ya existe.
function CategoryExists() {
	let instance = BaseException.call(this, "Error: The Category already exists. ");
	instance.name = "CategoryExists";
	return instance;
}
CategoryExists.prototype = Object.create(BaseException.prototype);
CategoryExists.prototype.constructor = CategoryExists;

//Excepción personalizada para indicar que la categoria no esta registrada.
function CategoryNotRegistered() {
	let instance = BaseException.call(this, "Error: The category is not registered. ");
	instance.name = "CategoryNotRegistered";
	return instance;
}
CategoryNotRegistered.prototype = Object.create(BaseException.prototype);
CategoryNotRegistered.prototype.constructor = CategoryNotRegistered;

//Excepción personalizada para indicar que la imagen no puede ser Null.
function NullImage() {
	let instance = BaseException.call(this, "Error: Image cannot be null. ");
	instance.name = "NullImage";
	return instance;
}
NullImage.prototype = Object.create(BaseException.prototype);
NullImage.prototype.constructor = NullImage;

//Excepción personalizada para indicar que la imagen no existe.
function ImageDoesNotExist() {
	let instance = BaseException.call(this, "Error: Image cannot be null. ");
	instance.name = "ImageDoesNotExist";
	return instance;
}
ImageDoesNotExist.prototype = Object.create(BaseException.prototype);
ImageDoesNotExist.prototype.constructor = ImageDoesNotExist;

//Excepción personalizada para indicar que el autor no puede ser Null.
function NullAuthor() {
	let instance = BaseException.call(this, "Error: Author cannot be null. ");
	instance.name = "NullAuthor";
	return instance;
}
NullAuthor.prototype = Object.create(BaseException.prototype);
NullAuthor.prototype.constructor = NullAuthor;

//Excepción personalizada para indicar que el autor no existe.
function AuthorDoesNotExist() {
	let instance = BaseException.call(this, "Error: Author does not exist. ");
	instance.name = "AuthorDoesNotExist";
	return instance;
}
AuthorDoesNotExist.prototype = Object.create(BaseException.prototype);
AuthorDoesNotExist.prototype.constructor = AuthorDoesNotExist;

//Excepción personalizada para indicar que el nickname no puede ser Null.
function NullNickName() {
	let instance = BaseException.call(this, "Error: Nickname cannot be null. ");
	instance.name = "NullNickName";
	return instance;
}
NullNickName.prototype = Object.create(BaseException.prototype);
NullNickName.prototype.constructor = NullNickName;

function NullEmail() {
	let instance = BaseException.call(this, "Error: Email cannot be null. ");
	instance.name = "NullEmail";
	return instance;
}
NullEmail.prototype = Object.create(BaseException.prototype);
NullEmail.prototype.constructor = NullEmail;

function EmptyUrl(param) {
	let instance = BaseException.call(this, "Error: Url cannot be empty. ");
	instance.name = "EmptyUrl";
	instance.param = param;
	return instance;
}
EmptyUrl.prototype = Object.create(BaseException.prototype);
EmptyUrl.prototype.constructor = EmptyUrl;

function NullLongitud() {
	let instance = BaseException.call(this, "Error: Longitud cannot be null. ");
	instance.name = "NullLongitud";
	return instance;
}
NullLongitud.prototype = Object.create(BaseException.prototype);
NullLongitud.prototype.constructor = NullLongitud;

function NullLatitud() {
	let instance = BaseException.call(this, "Error: Latitud cannot be null. ");
	instance.name = "NullLatitud";
	return instance;
}
NullLatitud.prototype = Object.create(BaseException.prototype);
NullLatitud.prototype.constructor = NullLatitud;