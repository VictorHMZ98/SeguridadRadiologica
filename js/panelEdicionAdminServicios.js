//Validación del formulario
let form = document.getElementById('needs-validation');
//Editar las clases
//Traer el elemento al cual quiero hacer document.getEle
//1. Leyendo el listado actual de clases elemento.classList
//2. Agrego un estilo elemento.classList.add('nuevaClase')
//3. Elemento elemento.value
let valid = 0;
function validateForm(e){//validateForm
    //No ejecutes
    e.preventDefault();
    let inputNombre = document.getElementById('nombre');
    let inputParrafo = document.getElementById('parrafo');
    let inputParrafo2 = document.getElementById('parrafo2');
    let inputParrafo3 = document.getElementById('parrafo3');
    let inputParrafoRes = document.getElementById('parrafoRes');

    console.log(typeof(inputNombre.value))
    //let inputZipcode = document.getElementById('zipCode')
    
    //console.log(inputNombre.value)
    console.log(inputNombre.classList)

    function validateName(nombre){//validateName
      //let expReg= /^[A-Z]+$/;
      let expReg = new RegExp(/^[-a-zA-Z-á-ú-0-9. ]+$/)  
      let esValido = expReg.test(nombre);
      console.log(esValido);
      if(esValido == true){//if nombre
          inputNombre.classList.remove('is-invalid')
          inputNombre.classList.add('is-valid')
          console.log('Hey si es mayor a =0')
          return valid ++;
        }else{
          inputNombre.classList.add('is-invalid')
          console.log('Esta vacío intenta nuevamente');
      }//if nombre
    }//validateName
    
    validateName(inputNombre.value)
    
    function validateParrafo(parrafo){//validateParrafo
      //let expReg= /^[A-Z]+$/;
      let expReg = new RegExp(/^[-a-zA-Z-á-ú-0-9. ]+$/)
      let esValido2 = expReg.test(parrafo);
      console.log(esValido2);
      if(esValido2 == true){//if Marca
          inputParrafo.classList.remove('is-invalid')
          inputParrafo.classList.add('is-valid')
          console.log('Hey si es mayor a =0')
          return valid ++;
        }else{
          inputParrafo.classList.add('is-invalid')
          console.log('Esta vacío intenta nuevamente');
      }//if Marca
    }//validateParrafo
    
    validateParrafo(inputParrafo.value)

    if(inputParrafo2.value.length != 0 || inputParrafo2.value.length == 0){//if opcional Parrafo2
      inputParrafo2.classList.remove('is-invalid')
      inputParrafo2.classList.add('is-valid') 
      valid++;
    }else{
      inputParrafo2.classList.add('is-valid')
      valid++;
    }//if opcional Parrafo2

    if(inputParrafo3.value.length != 0 || inputParrafo3.value.length == 0){//if opcional Parrafo3
      inputParrafo3.classList.remove('is-invalid')
      inputParrafo3.classList.add('is-valid') 
      valid++;
    }else{
      inputParrafo3.classList.add('is-valid')
      valid++;
    }//if opcional Parrafo3

    if(inputParrafoRes.value.length != 0 || inputParrafoRes.value.length == 0){//if opcional ParrafoRes
      inputParrafoRes.classList.remove('is-invalid')
      inputParrafoRes.classList.add('is-valid') 
      valid++;
    }else{
      inputParrafoRes.classList.add('is-valid')
      valid++;
    }//if opcional ParrafoRes
    
    // if(inputPrice.value.length > 0){//if price
        
    //         inputPrice.classList.remove('is-invalid')
    //         inputPrice.classList.add('is-valid') 
    //         valid++;
    // }else{
    //   inputPrice.classList.add('is-invalid')
    // }//if price


    // function ValidarTamaño(obj){
    //   var uploadFile = obj.files[0];
     
    //   var img = new Image();
    //   img.onload = function (){
    //       if (this.width.toFixed(0) != 413 && this.height.toFixed(0) != 531){
    //             alert("La imagen debe ser de tamaño 413px por 531px.");
    //             $('#foto').val("");
    //       }
          
    //       };
    //   img.src = URL.createObjectURL(uploadFile);
    //   }

    // function validateImage(image){
    //   let uploadFile = image.files[0];
    //   let img = new Imagen();
    //   img.onload
    // }//ValidateImage


    if (valid==5){
      console.log('Done');
      //nuevoProducto();
    }
    return valid = 0;
}//validateForm

//Eventos

form.addEventListener('submit',validateForm)

// Función para agregar un producto nuevo...

function nuevoProducto(evento){
  
  console.log(valid);
  //evento.preventDefault()
  let inputProduct = document.getElementById('product').value;
  let inputMarca = document.getElementById('marca').value;
  let inputModel = document.getElementById('model').value;
  let inputDescription = document.getElementById('description').value;
  let inputImage = document.getElementById('image').value;

  // Aquí se "hace JSON" los valores que puso el admin en añadir producto
  const caracteristicasProducto = {
    "imagen": inputImage,
    "titulo" : inputProduct, 
    "marca": inputMarca,
    "modelo" : inputModel,
    "descripcion" : inputDescription,
    "id" : 99 // valor de prueba
  }

  let traerLocalStorage = JSON.parse(window.localStorage.getItem("productosLocalS")) // Me traigo la base de datos
  console.log(traerLocalStorage) // La veo en consola para tener una referencia
  traerLocalStorage.push(caracteristicasProducto) // Como la base es un array, le hago push
  console.log(traerLocalStorage) // La veo y comparo
  window.localStorage.setItem("productosLocalS",JSON.stringify(traerLocalStorage)) // Reenvío la información a la base de datos

}