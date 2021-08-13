
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

    if (valid==6){
      window.open('mailto:generation.c2.cdmxe3@gmail.com?subject=Contacto&body=body');
      window.localStorage("sesionesRegistradas",JSON.stringify())
    }
    return vaid = 0;
}//validateForm

//Eventos

form.addEventListener('submit',validateForm)
