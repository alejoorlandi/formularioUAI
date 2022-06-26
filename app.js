window.onload = function () {
  let form = document.getElementById("form");

  // /*Validaciones*/
  form.addEventListener("submit", function (Event) {
    Event.preventDefault();
    //Bandera
    let errorFormulario = false;

    //Campo Nombre
    let nombre = document.getElementById("name");
    let textErrorNombre = document.getElementById("text-error-nombre");
    // let mensaje_nombre = document.querySelector(".input_contenedor .text-error");

    //Validacion nombre
    if (nombre.value.length < 3) {
      errorFormulario = true;
      textErrorNombre.innerHTML = "El nombre debe contener 3 o más caracteres";
      nombre.classList.add("error");
    } else {
      nombre.classList.remove("error");
    }

    //Campo Email
    let email = document.getElementById("email");
    let textErrorEmail = document.getElementById("text-error-email");
    // let mensaje_email = document.getElementById(".input_contenedor .text-error");

    //Validacion Email
    var regex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    if (!regex.test(email.value)) {
      errorFormulario = true;
      textErrorEmail.innerHTML = "El formato del email es incorrecto";
      email.classList.add("error");
    } else {
      // mensaje_email.innerHTML = "";
      email.classList.remove("error");
    }

    var p1 = document.getElementById("password").value;

    var espacios = false;
    var cont = 0;

    while (!espacios && cont < p1.length) {
      if (p1.charAt(cont) == " ") espacios = true;
      cont++;
    }

    if (espacios) {
      alert("La contraseña no puede contener espacios en blanco");
      return false;
    }
    if (p1.length == 0) {
      alert("Los campos de la password no pueden quedar vacios");
      return false;
    }

    //Campo Edad

    let edad = document.querySelector("#Edad");
    let textErrorEdad = document.getElementById("text-error-edad");
    let mensaje_edad = document.querySelector(".input_contenedor .text-error");

    //validacion edad
    if (edad.value == "") {
      errorFormulario = true;
      textErrorEdad.innerHTML = "Debe completar la edad";
      edad.classList.add("error");
    } else if (!Number.isInteger(Number(edad.value))) {
      errorFormulario = true;
      textErrorEdad.innerHTML = "Debe ingresar un número";
      edad.classList.add("error");
    } else if (Number(edad.value) < 0 || Number(edad.value) > 100) {
      errorFormulario = true;
      textErrorEdad.innerHTML = "La edad debe contener digitos";
      edad.classList.add("error");
    } else {
      textErrorEdad.innerHTML = "";
      edad.classList.remove("error");
    }

    // Campo Sexo
    let array_sexo = form.getElementsById("input-sexo");
    let textErrorSexo = document.getElementById("text-error-sexo");
    let mensaje_sexo = document.querySelector(".input_contenedor .text-error");

    // Validacion sexo
    let sexo_seleccionado = false;
    array_sexo.forEach((element) => {
      if (element.checked == true) {
        sexo_seleccionado = true;
      }
    });

    if (sexo_seleccionado == false) {
      errorFormulario = true;
      textErrorSexo.innerHTML = "Debe elegir una opcion";
    } else {
      textErrorSexo.innerHTML = "";
    }

    //Campo Temas
    let array_temas = document.getElementById("input[type='checkbox']");
    let textErrorTema = document.getElementById("text-error-tema");
    // let mensaje_temas = document.getElementById(".input_contenedor_tema .text-error-tema");

    //Validacion tema de interés
    let tema_seleccionado = false;
    textErrorTema.forEach((element) => {
      if (element.checked == true) {
        tema_seleccionado = true;
      }
    });

    if (tema_seleccionado == false) {
      errorFormulario = true;
      textErrorTema.innerHTML = "Al menos debe elegir un tema de interes";
    } else {
      textErrorTema.innerHTML = "";
    }

    //Campo Paises
    let mensaje_paises = document.getElementById(
      ".input_contenedor .text-error-pais"
    );
    let selector_paises = document.getElementById("pais");

    //Validacion País
    let array_paises_permitido = ["arg", "esp", "mex", "gua"];
    let pais_selected =
      selector_paises.options[selector_paises.selectedIndex].value;

    if (!array_paises_permitido.includes(pais_selected)) {
      errorFormulario = true;
      mensaje_paises.innerHTML = "Debe elegir un pais";
    } else {
      mensaje_paises.innerHTML = "";
    }

    if (errorFormulario == false) {
      modal.style.display = "block";
    }

    //Modal
    let modal = document.getElementById("modalForm");
    let span_cierre = document.querySelector(".close");

    //Cerrarlo tocando en la X
    span_cierre.onclick = function () {
      modal.style.display = "none";
    };

    //Cerrarlo tocando fuera del modal
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
  });
};
