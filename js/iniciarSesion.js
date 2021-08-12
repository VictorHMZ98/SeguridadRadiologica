
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
    let inputNombre = document.getElementById('name');
    let inputApellidos = document.getElementById('lastName');
    let inputEmail = document.getElementById('email');
    let inputPhone = document.getElementById('phone');
    let inputContraseña = document.getElementById('password');
    let inputConfirmarContraseña = document.getElementById('confirmPassword');

    console.log(typeof(inputNombre.value))
    //let inputZipcode = document.getElementById('zipCode')
    
    //console.log(inputNombre.value)
    console.log(inputNombre.classList)

    function validateName(nombre){
      //let expReg= /^[A-Z]+$/;
      let expReg = new RegExp(/^[a-zA-Z-á-ú ]+$/)  
      let esValido2 = expReg.test(nombre);
      console.log(esValido2);
      if(esValido2 == true){//if nombre
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

    function validateLastName(apellidos){
        //let expReg= /^[A-Z]+$/;
        let expReg = new RegExp(/^[a-zA-Z-á-ú ]+$/)  
        let esValido2 = expReg.test(apellidos);
        console.log(esValido2);
        if(esValido2 == true){//if apellido
            inputApellidos.classList.remove('is-invalid')
            inputApellidos.classList.add('is-valid')
            console.log('Hey si es mayor a =0')
            return valid ++;
          }else{
            inputApellidos.classList.add('is-invalid')
            console.log('Esta vacío intenta nuevamente');
        }//if apellidos
      }//validateLastName
      
      validateLastName(inputApellidos.value)

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
      let expReg = new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[$@!%?&]).{6,12}$/);
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

    if(inputConfirmarContraseña.value == inputContraseña.value){//ifConfirmarContraseña
      inputConfirmarContraseña.classList.remove('is-invalid');
      inputConfirmarContraseña.classList.add('is-valid');
      valid++;
    }else{
      inputConfirmarContraseña.classList.add('is-invalid')
    }//if ConfirmarContraseña

    
    if(inputPhone.value.length === 10 || inputPhone.value.length === 12){//if teléfono
        
            inputPhone.classList.remove('is-invalid')
            inputPhone.classList.add('is-valid') 
            valid++;
    }else{
      inputPhone.classList.add('is-invalid')
    }//if teléfono


    if (valid==6){
      window.open('mailto:generation.c2.cdmxe3@gmail.com?subject=Contacto&body=body');
    }
    return valid = 0;
}//validateForm

//Eventos

form.addEventListener('submit',validateForm)



//Intento de responsividad y switch entre iniciar sesión y registro
$(function() {

    $('#login-form-link').click(function(e) {
		$("#login-form").delay(100).fadeIn(100);
 		$("#register-form").fadeOut(100);
		$('#register-form-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});
	$('#register-form-link').click(function(e) {
		$("#register-form").delay(100).fadeIn(100);
 		$("#login-form").fadeOut(100);
		$('#login-form-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});

});
