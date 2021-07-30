let pruebaJson = [
    {
      "imagen": "../img/products/img-product_1.jpg",
      "titulo": "Mandil emplomado económico",
      "marca": "Marca Slim Royal",
      "modelo": "E6995",
      "precio": "121 USD",
      "li1": "0.5mm de plomo",
      "li2": "66x95cm",
      "li3": "con bolsillo",
      "li4": "acabado textil",
      "id": "1"
    },
    {
      "imagen": "../img/products/img-product_2.jpg",
      "titulo": "Mandil emplomado estándar",
      "marca": "Marca Slim Royal",
      "modelo": "S6995",
      "precio": "186 USD",
      "li1": "0.5mm de plomo",
      "li2": "66x95cm",
      "li3": "con bolsillo",
      "li4": "acabado plástico",
      "id": "2"
    },
    {
      "imagen": "../img/products/img-product_3.jpg",
      "titulo": "Faldón emplomado",
      "marca": "Marca Slim Royale",
      "modelo": "SQUARE",
      "precio": "70 USD",
      "li1": "0.5mm de plomo",
      "li2": "40x40cm",
      "li3": "tipo falda",
      "li4": "",
      "id": "3"
    },
    {
      "imagen": "../img/products/img-product_4.jpg",
      "titulo": "Lentes emplomados",
      "marca": "Marca Slim Royale",
      "modelo": "SS-53",
      "precio": "137 USD",
      "li1": "0.55mm de plomo",
      "li2": "con estuche",
      "li3": "",
      "li4": "",
      "id": "4"
    },
    {
      "imagen": "../img/products/img-product_5.jpg",
      "titulo": "Lentes emplomados",
      "marca": "Marca Slim Royale",
      "modelo": "S-53",
      "precio": "118 USD",
      "li1": "0.5mm de plomo",
      "li2": "con estuche",
      "li3": "",
      "li4": "",
      "id": "5"
    },
    {
      "imagen": "../img/products/img-product_6.jpg",
      "titulo": "Googles emplomados",
      "marca": "Marca Slim Royale",
      "modelo": "GOOGLE-HO",
      "precio": "161 USD",
      "li1": "0.5mm de plomo",
      "li2": "con bolsa de tela",
      "li3": "",
      "li4": "",
      "id": "6"
    },
    {
      "imagen": "../img/products/img-product_7.jpg",
      "titulo": "Guantes emplomados",
      "marca": "Marca Slim Royale",
      "modelo": "100 M/L",
      "precio": "133 USD",
      "li1": "0.5mm de plomo",
      "li2": "350mm de largo",
      "li3": "tamaño mediano o grande",
      "li4": "",
      "id": "7"
    },
    {
      "imagen": "../img/products/img-product_8.jpg",
      "titulo": "Guantes emplomados",
      "marca": "Marca Shielding",
      "modelo": "XR47",
      "precio": "43 USD",
      "li1": "RADIAXON",
      "li2": "equivalente a 0.5mm de plomo",
      "li3": "tamaño mediano o grande",
      "li4": "",
      "id": "8"
    },
    {
      "imagen": "../img/products/img-product_9.jpg",
      "titulo": "Collarín emplomado",
      "marca": "Marca Slim Royale",
      "modelo": "STANDAR-O5",
      "precio": "41 USD",
      "li1": "0.5mm de plomo",
      "li2": "",
      "li3": "",
      "li4": "",
      "id": "9"
    },
    {
      "imagen": "../img/products/img-product_10.jpg",
      "titulo": "Collarín emplomado de lujo",
      "marca": "Marca Slim Royale",
      "modelo": "DELUX-O5",
      "precio": "54 USD",
      "li1": "0.5mm de plomo",
      "li2": "",
      "li3": "",
      "li4": "",
      "id": "10"
    },
    {
      "imagen": "../img/products/img-product_11.jpg",
      "titulo": "Protectores de gónadas",
      "marca": "Marca Slim Royale",
      "modelo": "S806A",
      "precio": "135 USD",
      "li1": "0.5mm de plomo",
      "li2": "Juego de 3 protectores: grande mediano y chico",
      "li3": "",
      "li4": "",
      "id": "11"
    },
    {
      "imagen": "../img/products/img-product_12.jpg",
      "titulo": "Protectores de gónadas",
      "marca": "Marca Slim Royale",
      "modelo": "S806 M/L",
      "precio": "37 USD",
      "li1": "0.5mm de plomo",
      "li2": "0.5mm de plomo",
      "li3": "una pieza",
      "li4": "tamaño mediano o grande",
      "id": "12"
    }
  ]


function anadirProducto(productos){

    const ancla = document.getElementById("productos");
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

/*
        <!-- Empieza container producto --> 
        <div class="container col-md-3 col-lg-3 col-xl-3 mx-auto mb-6"> 
            <div class="card" style="width: 18rem;"> 
                <img src="${producto.imagen}" class="card-img-top" alt="..."> 
                    <div class="card-body"> 
                        <h4 class="card-title text-center">${producto.titulo}</h4> 
                        <h5 class="card-subtitle mb-2 text-center">${producto.precio}</h5> 
                        <h6 class="card-subtitle mb-2 text-muted text-center">${producto.marca}</h6> 
                        <h6 class="card-subtitle mb-2 text-muted text-center">${producto.modelo}</h6> 
                        <p class="card-text"> 
                            <ul style="list-style-position: inside;"> 
                                <li>0.5 mm de plomo</li> 
                                <li>66x95cm</li> 
                                <li>Con bolsillo</li> 
                                <li>Acabado textil</li> 
                            </ul> 
                        </p>   
                        <div class="button text-center">      
                            <a href="#" class="btn btn-info text-center">Comprar</a>   
                        </div>   
                 
                </div> <!--card-body--> 
            </div><!--card--> 
        </div><!--container producto--> 
*/