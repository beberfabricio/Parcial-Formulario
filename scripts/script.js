function llenarVariables() {
    submit = document.getElementById("btnEnviar");
    modal = document.getElementById("sctModal");
    modalClose = document.getElementById("btnModalC");
    modalpName = document.getElementById("pName");
    nombre = document.getElementById("txtNombre");
    apellido = document.getElementById("txtApellido");
    email = document.getElementById("txtEmail");
    edad = document.getElementById("txtEdad");
    sexo = document.getElementsByName("rbSexo");
    temas = document.getElementsByName("cbTemas");
    pais = document.getElementById("cmbPaises");
    errorS = document.getElementById("lblErrorS");
    errorT = document.getElementById("lblErrorT");
    errorP = document.getElementById("lblErrorP");
    textList = document.querySelectorAll("input[type=text]");
    radioList = document.querySelectorAll("input[type=radio]");
    checkList = document.querySelectorAll("input[type=checkbox]");
}

window.onload = () => {
    llenarVariables(); //cuando inicia la web, carga los elementos del HTML en las variables
    submit.onclick = function (e) { //cuando se presiona el boton enviar, realiza lo siguiente:
        e.preventDefault();
        if (validarCampos() == true) { //ejecuta la funcion validarCampos, en caso de estar correctos, ejecuta el if
            modalpName.innerText = nombre.value.concat(" ", apellido.value); //envia nombre y apellido registrados al modal
            modal.classList.add("modal-show"); //muestra el modal
            modalClose.onclick = function(){ //cuando se presiona el boton cerrar del modal
                modal.classList.remove("modal-show"); //lo cierra
            }
            window.onclick = function(e) { //cuando se presiona cualquier parte fuera del modal
                if (e.target == modal) {
                    modal.classList.remove("modal-show"); //lo cierra
                }
            }
        } else {
            window.alert("Hay errores en al menos un campo."); //si hay algun campo mal, muestra el alert
        }
    }
    ocultarLabels();//ejecuta la funcion que se encarga de ocultar los labels de error
}

function validarCampos() {
    validate = true;
    if (nombre.value.length < 3) { //se valida que el nombre tenga al menos 3 caracteres
        nombre.labels[1].classList.toggle("hidden",false);
        validate = false;
    }
    if (apellido.value.length < 3) { //se valida que el apellido tenga al menos 3 caracteres
        apellido.labels[1].classList.toggle("hidden",false);
        validate = false;
    }
    if (!email.value.match(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/)) { //se valida que el email tenga formato valido
        email.labels[1].classList.toggle("hidden",false);
        validate = false;
    }
    if (isNaN(parseInt(edad.value)) || parseInt(edad.value) > 99 || parseInt(edad.value) < 1) { //se valida que la edad sea >0 <100 !=NaN
        edad.labels[1].classList.toggle("hidden",false);
        validate = false;
    }
    if (sexo[0].checked == false && sexo[1].checked == false && sexo[2].checked == false) { //se valida que haya sexo seleccionado
        errorS.classList.toggle("hidden",false);
        validate = false;
    }
    if (temas[0].checked == false && temas[1].checked == false && temas[2].checked == false && 
        temas[3].checked == false && temas[4].checked == false) { //se valida que haya al menos un tema seleccionado
        errorT.classList.toggle("hidden",false);
        validate = false;
    }
    if (pais.selectedIndex == 0) { //se valida que el pais esté seleccionado
        errorP.classList.toggle("hidden",false);
        validate = false;
    }
    return validate;
}

function ocultarLabels(){
    for (let i=0; i<textList.length; i++){ //oculta label de cada uno de los input text cuando entra en foco
        textList[i].onfocus = function(){
            textList[i].labels[1].classList.toggle("hidden",true)
        }
    }

    for (let i=0; i<sexo.length; i++){ //oculta label de los input radio cuando se clickea alguno
        sexo[i].onclick = function(){
            errorS.classList.toggle("hidden",true);
        }
    }

    for (let i=0; i<temas.length; i++){ //oculta label de los input checkbox cuando se clickea alguno
        temas[i].onclick = function(){
            errorT.classList.toggle("hidden",true);
        }
    }

    pais.onchange = function(){ //oculta label del pais cuando cambia
        errorP.classList.toggle("hidden",true);
    }
}