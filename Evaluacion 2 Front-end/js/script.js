function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}


function Validar() {
  var ret_mail = validar_mail();
  var ret_pass = validarPassword();
  var ret_web = validar_web();
  var ret_num = validar_numero();
  var ret_dir = validar_direccion();
  var ret_aficiones = validar_aficiones();
  var ret_comunas= validar_comuna();
  var ret_check = validar_check();

  return ret_mail && ret_pass && ret_web && ret_num && ret_dir && ret_aficiones && ret_comunas && ret_check;
}

function validar_mail() {
  var mail = document.getElementById("usuario").value;
  var arr = mail.indexOf("@");
  var punt = mail.lastIndexOf(".");
  var div = document.getElementById("err_corr");

  if (mail.trim() === "") {
    div.innerText = "El correo electrónico es obligatorio.";
    div.className = "text-danger";
    return false;
  } else if (arr < 1) {
    div.innerText = "El correo debe contener '@'.";
    div.className = "text-danger";
    return false;
  } else if (arr < 2) {
    div.innerText = "El correo es inválido.";
    div.className = "text-danger";
    return false;
  } else if (arr + 3 > punt || punt + 1 >= mail.length - 1) {
    div.innerText = "El nombre del dominio es inválido.";
    div.className = "text-danger";
    return false;
  } else {
    div.innerText = "";
    return true;
  }
}

function validarPassword() {
  var pass = document.getElementById("pass").value;
  var pass2 = document.getElementById("pass2").value;
  var div1 = document.getElementById("err_cont1");
  var div2 = document.getElementById("err_cont2");

  if (pass.trim() === "") {
    div1.innerText = "La contraseña es obligatoria.";
    div1.className = "text-danger";
    return false;
  } else if (pass.length < 3 || pass.length > 6) {
    div1.innerText = "La contraseña debe tener entre 3 y 6 caracteres.";
    div1.className = "text-danger";
    return false;
  } else if (!/[a-zA-Z]/.test(pass) || !/\d/.test(pass)) {
    div1.innerText = "La contraseña debe contener al menos una letra y un dígito.";
    div1.className = "text-danger";
    return false;
  } else {
    div1.innerText = "";
  }

  if (pass2.trim() === "") {
    div2.innerText = "La confirmación de contraseña es obligatoria.";
    div2.className = "text-danger";
    return false;
  } else if (pass !== pass2) {
    div2.innerText = "La confirmación de contraseña no coincide.";
    div2.className = "text-danger";
    return false;
  } else {
    div2.innerText = "";
  }

  return true;
}

function validar_web() {
  var web = document.getElementById("web").value;
  var div = document.getElementById("err_web");

  if (web.trim() === "") {
    div.innerText = "La URL de la página web es obligatoria.";
    div.className = "text-danger";
    return false;
  } else if (!web.startsWith("http://") && !web.startsWith("https://")) {
    div.innerText = "La URL debe comenzar con 'http://' o 'https://'.";
    div.className = "text-danger";
    return false;
  } else {
    div.innerText = "";
    return true;
  }
}

function validar_numero() {
  var numero = document.getElementById("contacto").value;
  var div = document.getElementById("err_num");

  if (numero.trim() === "") {
    div.innerText = "El número de teléfono es obligatorio.";
    div.className = "text-danger";
    return false;
  } else if (numero.length !== 9) {
    div.innerText = "El número de teléfono debe tener 9 dígitos.";
    div.className = "text-danger";
    return false;
  } else {
    div.innerText = "";
    return true;
  }
}

function validar_direccion() {
  var direccion = document.getElementById("direccion").value;
  var div = document.getElementById("err_dir");

  if (direccion.trim() === "") {
    div.innerText = "La dirección de casa es obligatoria.";
    div.className = "text-danger";
    return false;
  } else {
    div.innerText = "";
    return true;
  }
}

function validar_comuna(){
  var comuna = document.getElementById("comuna").value;
  var div = document.getElementById("err_comuna");

  if (comuna == "Selecciona una comuna"){
    div.innerText = "Selecciona una comuna válida. ";
    div.className = "text-danger";
    return false;
  }else{
    div.innerText="";
    return true;
  }
}

function validar_aficiones() {
  var aficiones = document.getElementById("pasatiempo").value;
  var div = document.getElementById("err_pasatiempo");

  if (aficiones.trim() === "") {
    div.innerText = "Ingrese al menos 2 aficiones.";
    div.className = "text-danger";
    return false;
  } else {
    var listaAficiones = aficiones.split(",").map(function (aficion) {
      return aficion.trim();
    });

    if (listaAficiones.length < 2) {
      div.innerText = "Ingrese al menos 2 aficiones.";
      div.className = "text-danger";
      return false;
    } else {
      div.innerText = "";
      return true;
    }
  }
}

function validar_check(){
  var check = document.getElementById("gridCheck");
  var div = document.getElementById("err_ace");
  if (!check.checked){
    div.innerText = "Debe aceptar las condiciones.";
    div.className = "text-danger";
    return false;
  } else {
    div.innerText = "";
    return true;
  }
}

// gracias youtube

function generarHTML() {
  var ret_val = Validar(); 

  if (ret_val) {
    var mail = document.getElementById("usuario").value;
    var pass = document.getElementById("pass").value;
    var pass2 = document.getElementById("pass2").value;
    var web = document.getElementById("web").value;
    var direccion = document.getElementById("direccion").value;
    var numero = document.getElementById("contacto").value;
    var aficiones = document.getElementById("pasatiempo").value;

    var html = `
      <html>
      <head>
        <title>Datos del formulario</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            padding: 20px;
          }
          h2 {
            color: #333;
            margin-bottom: 10px;
          }
          p {
            margin: 5px 0;
          }
        </style>
      </head>
      <body>
        <h2>Datos del formulario:</h2>
        <p><strong>Correo electrónico:</strong> ${mail}</p>
        <p><strong>Contraseña:</strong> ${pass}</p>
        <p><strong>Confirmación de contraseña:</strong> ${pass2}</p>
        <p><strong>Página web:</strong> ${web}</p>
        <p><strong>Dirección:</strong> ${direccion}</p>
        <p><strong>Número de teléfono:</strong> ${numero}</p>
        <p><strong>Aficiones:</strong> ${aficiones}</p>
      </body>
      </html>
    `;

    var ventana = window.open();
    ventana.document.open();
    ventana.document.write(html);
    ventana.document.close();
  }
}


