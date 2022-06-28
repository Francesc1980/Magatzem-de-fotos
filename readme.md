// crear una APP express vacia
//Configurar el package.jason
//Instalar las dependencias nodemon y express
//Definir 2 rutas
// /--> mostrar las fotots ( de momento, no)
/ añadir-imagen (mostrar un formulario con la imagen a añadir

// pasos a seguir

1.Crear la carpeta magaztem de fotos
2.crear el appa.js
3inicializar projecte con npm desde el terminal npm init -Y
4 me genera el Package.json
isntalar dependencias de nodemon y express con comando install nodemon express se crearn dependences en el package jason.

5.Crear un git.ignore para cuando lo suba a github.para que cuando 
lo suba me ignore carpeta node modules.. hacer un archivo se llame git.igore y copiar dentro para que me ignore carpeta node_modules el siguiente comando: node_modules/

6-Definir 2 rutas // esto ya lo hago en el archivo app.js
 una a la home page y otra para imagenes

 7/ definir el puerto con app.listen(3000) app.listen(3000,()=>{
    console.log("Servidor funcionando correctamente.");
    
}); le paso una funcion de callback.

8/ voy a configurar el package.json

le pongo un scrio nodemon.app en app.js

podremos levantar el servidor con npm start te sale en el terminal mensaje de funcionando correctarmente el servidor

// tenemos que crear un formulario para añadir nueva imagen mirar la dema

.envio un string con comillas catalana
.envio un html
.elemento que se llaman plantillas dinamicas

las imagenes las guaradremos en una variable

guardar un conjunto de fotos en una array de objetos con titulo fecha

aspecto tiene el array de objetos usuario nos envie informacion que propiedades va a tener tantas propiedades como campos

// enviarle un formulario al usuario cuando haga una peticion GET lo hacemos por medio de plantillas dinamicas.....

instalamos el ejs en el servidor con install ejs y para instalar estoy con control c hay que parar el servidor 

Decirle a nuestro servidor que apartir de ahora utilazara el sistema de plantillas ejs con la sentencia app.set('view engine','ejs'); y lo ponemos debajo de cuando hemos creado el servidor


// creamos una carpeta donde van a ir todos los htmls que crearemos y enviamos al cliente

esos html se llaman vistas e iran dentro de una carpeta que le llamaremos views dentro de views creamos un fichero que se llamara index.ejs

creamos en este index.ejs un html basico con un h1
luego volvemos al app.js
vamos al enpont que dice Bienvenido a the monner gallery y lo cambiamos utilizando el metodo render 

res.render("index"); transformamos el html y lo escupimos

Ahora en el mismo index.ejs quiero enviar cuantos fotos hay pondre un parrafo con <p>Actualmente hay 0 fotos</p>

//poner numero de imagenes en la array de objetos, informar a la vista hay la varibale voy a la funcion render poco una como y pongo
en la funcion rest poner el array de objetos

irme al index. ejs cambiar el 0 por <%= % recuperame el valor de la

pones en la array de pictures un titulo url y fecha


//DESDE EL FORMULARIO

// QUEREMOS OFRECER AL USUARIO LA POSIBILIDAD DE AÑADIR UNA NUEVA IMAGEN

1-crear un nuevo endpoint que se llamnar amadir imagen
2-renderizar un formulario y congfigurarlo con metodo post
3. al eviar datos añadirse nueva foto a la arry correspondiente 

