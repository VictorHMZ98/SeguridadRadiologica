var etc = document.getElementById("etc");
var moreText = document.getElementById("more");
var btnText = document.getElementById("myBtn");
var img = document.getElementById("imagenServicios");

function myFunction() {
	if (etc.style.display === "none") {
	  etc.style.display = "inline";
	  btnText.innerHTML = "Ver más"; 
	  moreText.style.display = "none";
	  img.style.width = "10px;"
	  
	} else {
	  etc.style.display = "none";
	  btnText.innerHTML = "Ver menos"; 
	  moreText.style.display = "inline";
	} //else
  }// myFunction


  let datosJson = [
    {
      "imagen": "./img/services/img-service1.jpg",
      "titulo": "Curso Básico de Protección Radiológica Nivel Personal Ocupacionalmente Expuesto (POE)",
      "parrafo1":"Curso dirigido a técnicos radiólogos, médicos radiólogos, enfermeras, cirujanos dentistas, médicos de diferentes especialidades y cualquier personal ocupacionalmente expuesto (POE) que haga uso de algún equipo de rayos X para diagnóstico médico.",
      "parrafo2": "Este curso está diseñado para que el alumno comprenda fácilmente y de forma didáctica qué son las radiaciones ionizantes y cuáles son los principios de protección radiológica que puede aplicar en su lugar de trabajo.",
      "parrafo3": "El contenido del curso se basa en lo estipulado en las Normas Oficiales Mexicanas NOM-229-SSA1-2002 y NOM-031-NUCL-2011.",
      "parrafoBlack": "Duración del curso: 40 horas.",
      "id": "1"
    },
  ]

  
function anadirProducto(productos){

    const ancla = document.getElementById("servicios");
    let plantilla = "";
    
    productos.forEach(function(producto){

        let card = `
        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
        <div class="card" style="width: 18rem;"> 
        <img src="${producto.imagen}" class="card-img-top" alt="..."> 
            <div class="card-body"> 
                <h4 class="card-title text-center">${producto.titulo}</h4> 
                <h5 class="card-subtitle mb-2 text-center">${producto.precio}</h5> 
                <h6 class="card-subtitle mb-2 text-muted text-center">${producto.marca}</h6> 
                <h6 class="card-subtitle mb-2 text-muted text-center">${producto.modelo}</h6> 
                <p class="card-text"> 
                    <ul style="list-style-position: inside;"> 
                        <li>${producto.li1} </li>
                        <li>${producto.li2} </li>
                        <li>${producto.li3} </li>
                        <li>${producto.li4} </li>
                    </ul> 
                </p>   
                <div class="button text-center">      
                    <a href="#" class="btn btn-info text-center">Comprar</a>   
                </div>   
         
            </div> <!--card-body--> 
        </div><!--card--> 
        </div>`

        plantilla += card;

    }) // Fin del forEach

    ancla.innerHTML = plantilla;

} //Fin del anadirProducto
anadirProducto(pruebaJson);

