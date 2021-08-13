
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
    let inputEmail = document.getElementById('emailIniciar');
    let inputContraseña = document.getElementById('passwordIniciar');


    function validateEmail(email){//validateEmail
      let expReg = new RegExp(/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/);
      let esValido = expReg.test(email);
      console.log(esValido);
      if(esValido == true ){//if email 
        inputEmail.classList.remove('is-invalid')
        inputEmail.classList.add('is-valid')
        console.log('Hey si es mayor a =0')
        return valid++;
      }else{
        inputEmail.classList.add('is-invalid')
        console.log('Esta vacío intenta nuevamente');
      }//if email
    }//validateEmail

    validateEmail(inputEmail.value)

    function validatePassword(password){//validatePassword
      let expReg = new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[/$@*#!%?&._-]).{6,12}$/);
      let esValido = expReg.test(password);
      console.log(esValido);
      if(esValido == true ){//if email 
        inputContraseña.classList.remove('is-invalid')
        inputContraseña.classList.add('is-valid')
        console.log('Hey si es mayor a =0')
        return valid++;
      }else{
        inputContraseña.classList.add('is-invalid')
        console.log('Esta vacío intenta nuevamente');
      }//if Password
    }//validatePassword

    validatePassword(inputContraseña.value)

    if (valid==2){
      //window.open('mailto:generation.c2.cdmxe3@gmail.com?subject=Contacto&body=body');
      console.log('Done')
      Toast();
    }
    return valid = 0;
}//validateForm

//Eventos

form.addEventListener('submit',validateForm)


function Toast(){
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    } 
  });

Toast.fire({
  icon: 'success',
  title: 'Inicio de sesión exitoso'
});

}//function Toast

/* Intento de funcion para la tarea.. 8
function iniciarSesion(){

  let inputEmail = document.getElementById('emailIniciar').value;
  let inputContraseña = document.getElementById('passwordIniciar').value;
  
  console.log(inputEmail)

  var comparacionBD = JSON.parse(window.localStorage.getItem("nuevoRegistro"))

  for( i = 0 ; i < comparacionBD.length ; i++){

    if( comparacionBD[i].email == inputEmail ){
        console.log("Entre al primer if")
        if( comparacionBD[i].contrasena == inputContraseña ){
          console.log("¡Contraseña correcta!")
          break
        } else {
          console.log("Contraseña o correo incorrecto")
        } // if para comparar las contraseñas

    } else {
      continue
    } // if para encontrar, o no, el correo
  }

} Att Carlos */

