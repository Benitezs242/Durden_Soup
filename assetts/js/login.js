let formulario = document.querySelector('#formulariologin')
let inSubmit = document.querySelector('iSubmit')

formulario.addEventListener('submit', function (e){
    e.preventDefault();
   
    let inUsuario = formulario.elements ['iUsuario'];
    if (inUsuario.value.trim() ===''){
        Swal.fire({
            icon: 'error',
            title: 'Se ve que no eres parte del club. Revisa tu información.',
        })
        inUsuario.focus();
        return;
    }

    let inPassword = formulario.elements ['ipass'];
    if (inPassword.value.trim() == '') {
        Swal.fire({
            icon: 'error',
            title: 'Se ve que no eres parte del club. Revisa tu información.',
        })
        inPassword.focus();
        return;
    }

    Swal.fire({
        icon: 'success',
        title: 'Bienvenido.',

    })

window.location.href = 'index.html';
    
})
