let pruebaJson = [
    {"imagen":"../img/products/img-product_1.jpg","titulo": "Guayabas","descripcion":"Las ricas y deliciosas guayabas rositas, al mejor precio","id":"1"},
    {"imagen":"../img/products/img-product_1.jpg","titulo": "Guayabas","descripcion":"Las ricas y deliciosas guayabas rositas, al mejor precio","id":"1"},
    {"imagen":"../img/products/img-product_1.jpg","titulo": "Guayabas","descripcion":"Las ricas y deliciosas guayabas rositas, al mejor precio","id":"1"}
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
                <h5 class="card-title">${producto.titulo}</h5>
                <p class="card-text">${producto.descripcion}</p>
                <a href="detail.html?id=${producto.id}" class="btn btn-primary"> Details </a> 
            </div>
            </div>
        </div>`

        plantilla += card;

    }) // Fin del forEach

    ancla.innerHTML = plantilla;

} //Fin del anadirProducto
anadirProducto(pruebaJson);