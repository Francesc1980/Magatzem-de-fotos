// 1.definir express
const express = require('express');


//5 guardamos las imagenes en una variable nuestra base de objetos array de objetos
// que aspecto tendra cada objeto? que propiedades tiene?
//titulo
//url
//fecha
//(versiones futuras) color predominante

const pictures = [{
    titulo: "Me gustaría estar en Dinamarca",
    url: "https://i.picsum.photos/id/41/200/200.jpg?hmac=aqB5SyMLH-ssCBN-7HaUvcDxXFFQB42WoqAHsLRIn74",
    fecha: "2022-06-06"
}, {
    titulo: "Coche",
    url: "https://i.picsum.photos/id/1071/200/200.jpg?hmac=mb6el6MCnRCyFnuMcCPJppn1WISnV5OKFUqDFg82Joo",
    fecha: "2021-03-06"
}];










//2. creamos el servidor

const app = express();
//informamos de que nuestro servidor va a utilizar el sistema de plantillas ejs


// queremos que todos los ficheros de la carpeta public sean accesibles para el cliente
app.use(express.static('public'));

//Me gustaria poder gestionar peticiones tipo post
app.use(express.urlencoded({extended:false}));

app.set('view engine', 'ejs');





//3 definir rutas
app.get("/",(req, res)=>{

  // le pasamos a la vista index.ejs una variable que se llama 'numPics' y cuyo es el numero de elementos del array pictures
    res.render("index",{
        
            Info : "Imagenes",
            pics : pictures
        });

    });//Buscame la vista 'index.ejs' dentro de la carpeta views y renderiza el contenido html para enviarlo cliente


app.get("/form",(req,res)=>{
    res.render("Form");
    
   

});

app.post("/form",(req,res)=>{
const {Titulo, UrlImage,date} = req.body


    console.log(Titulo);
    console.log(UrlImage);
    console.log(date);
    
    
    pictures.push({titulo:Titulo,url:UrlImage,fecha:date});
    res.redirect("/");

    console.log(pictures);
  
    
   
   
    
   







});












// renderizar boton del menu vaya al formulario

app.get("/form",(req,res)=>{
    res.render("/form") = req.body
});







 






//levantar el servidor en el puerto 3000 le vamos a pasar parametro adicional funcion callback
app.listen(3000,()=>{
    console.log("Servidor funcionando correctamente.");

});
