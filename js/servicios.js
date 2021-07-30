



window.onload = function () {
    
    const btnAdd = document.getElementById('btn-add-car');

    btnAdd.addEventListener('click', function(){
        new Swal({
            icon: 'success',
            title: 'Agregado al carrito',
            showConfirmButton: false,
            timer: 1500,
            position: 'center',
          })
    
    })//addEventListener 
}// window.onload