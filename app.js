window.onload = function(){

let form = document.getElementById("form");

// /*Validaciones*/
form.addEventListener("submit", function(Event){
    Event.preventDefault();
    //Bandera
    let errorFormulario = false;

    //Campo Nombre
    let nombre = document.getElementById("name");
    let textErrorNombre = document.getElementById('text-error-nombre')
    // let mensaje_nombre = document.querySelector(".input_contenedor .text-error");

    //Validacion nombre
    if(nombre.value.length < 3){
        errorFormulario = true;
        textErrorNombre.innerHTML = "El nombre debe contener 3 o más caracteres";
        nombre.classList.add("error");
    }
    else{
        nombre.classList.remove("error");
    }


    //Campo Email
    let email = document.querySelector("#email");
    let mensaje_email = document.querySelector(".input_contenedor .text-error");

    //Validacion Email
    var regex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    if(!regex.test(email.value)){
        errorFormulario = true;
        mensaje_email.innerHTML = "El formato del email es incorrecto";
        email.classList.add("error");
    }else{
        mensaje_email.innerHTML = "";
        email.classList.remove("error");
    }

    //Campo Edad
    let edad = document.querySelector("#edad");
    let mensaje_edad = document.querySelector(".input_contenedor .text-error");

    //validacion edad
    if(edad.value == ""){
    errorFormulario = true;
    mensaje_edad.innerHTML = "Debe completar la edad";
    edad.classList.add("error");
    }

    else if(!Number.isInteger(Number(edad.value))){
    errorFormulario = true;
    mensaje_edad.innerHTML = "Debe ingresar un número";
    edad.classList.add("error");
    }
    else if(Number(edad.value) < 0 || Number(edad.value) > 100){
    errorFormulario = true;
    mensaje_edad.innerHTML = "La edad debe contener digitos";
    edad.classList.add("error");
    }
    else{
    mensaje_edad.innerHTML = "";
    edad.classList.remove("error");
    }

    //Campo Sexo
    let array_sexo = form.querySelectorAll("input[name='sexo']");
    let mensaje_sexo = document.querySelector(".input_contenedor .text-error");

    //Validacion sexo
    let sexo_seleccionado = false;
    array_sexo.forEach(element => {
        if(element.checked == true){
            sexo_seleccionado = true;
        }
    })

    if(sexo_seleccionado == false){
        errorFormulario = true;
        mensaje_sexo.innerHTML = "Debe elegir una opcion";
    }else{
        mensaje_sexo.innerHTML = "";
    }

    //Campo Temas
    let array_temas = document.querySelectorAll("input[type='checkbox']");
    let mensaje_temas = document.querySelector(".input_contenedor .text-error");

    //Validacion tema de interés
    let tema_seleccionado = false;
    array_temas.forEach(element => {
        if(element.checked == true){
            tema_seleccionado = true;
        }
    })

    if(tema_seleccionado == false){
        errorFormulario = true;
        mensaje_temas.innerHTML = "Al menos debe elegir un tema de interes";
    }else{
        mensaje_temas.innerHTML = "";
    }

    //Campo Paises
    let mensaje_paises = document.querySelector(".input_contenedor .text-error");
    let selector_paises = document.querySelector("#pais");

    //Validacion País
    let array_paises_permitido = ["arg","esp","mex","gua"];
    let pais_selected = selector_paises.options[selector_paises.selectedIndex].value;

    if(!array_paises_permitido.includes(pais_selected)){
        errorFormulario = true;
        mensaje_paises.innerHTML = "Debe elegir un pais";
    }
    else{
        mensaje_paises.innerHTML = "";
    }

    if(errorFormulario == false){
        modal.style.display = "block";
    }




    //Modal
    let modal = document.getElementById("modalForm");
    let span_cierre = document.querySelector(".close");





















// // //Cerrarlo tocando en la X
// // span_cierre.onclick = function(){
// //     modal.style.display = "none";
// // }

// // //Cerrarlo tocando fuera del modal
// // window.onclick = function(event){
// //     if (event.target == modal) {
// //       modal.style.display = "none";
// //     }
// // }
});


}







