let formulario = document.querySelector('#formContacto')
let insubmit = document.querySelector('#iSubmit')

formulario.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(e.target.iUsuario)
    console.log(formulario.elements['iUsuario'])
    let inUsuario = formulario.elements['iUsuario'];
    if (inUsuario.value.trim() === '') {
        Swal.fire({
            icon: 'error',
            title: 'A veces es necesario el usuario...',
        })
        inUsuario.focus();
        return
    }


    let inCorreo = formulario.elements['iCorreo'];
    if (inCorreo.value.trim() == '') {
        Swal.fire({
            icon: 'error',
            title: 'Danos un correo, prometemos no enviarte anuncios de Yanbal',
        })
        inCorreo.focus();
        return;
    }

    let inTelefono = formulario.elements['iTelefono'];
    if (inTelefono.value.trim() <= 0) {
        Swal.fire({
            icon: 'error',
            title: 'Proporciona un número fijo, no pagamos el plan 🙁😖',
        })
        inTelefono.focus();
        return;
    }

    let areaTxt = formulario.elements['msnCont'];
    console.log(areaTxt)
    if (areaTxt.value === '') {
        Swal.fire({
            icon: 'error',
            title: 'No somos adivinos, cuéntanos... pero sé breve',
        })
        areaTxt.focus();
        return;
    }

    Swal.fire({
        title: '¡Gracias!',
        text: 'Nos pondremos en contacto tan pronto como veamos tu mensaje',
        imageUrl: '../assets/img/gorgory.gif',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
    })

    formulario.reset();
})

