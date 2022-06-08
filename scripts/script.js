window.onload = () => {
    document.getElementById("btnAceptar").onclick = function (e) {
        e.preventDefault();
        if (validarCampos() == true) {
            document.getElementById("sctModal").classList.add("modal-show");
            document.getElementById("btnModalC").onclick = function(){
                document.getElementById("sctModal").classList.remove("modal-show");
            };
        } else {
            window.alert("Hay errores en al menos un campo.");
        }
    }
    removerLabelTxt(document.querySelectorAll("input[type=text]"));
    removerLabelRadio(document.querySelectorAll("input[type=radio]"));
    removerLabelCheck(document.querySelectorAll("input[type=checkbox]"));
    removerLabelPais(document.getElementById("cmbPaises"));
}

function validarCampos() {
    var validate = true;
    validate = validarNombreApellido(document.getElementById("txtNombre"),validate);
    validate = validarNombreApellido(document.getElementById("txtApellido"),validate);
    validate = validarEmail(document.getElementById("txtEmail"),validate);
    validate = validarEdad(document.getElementById("txtEdad"),validate);
    validate = validarSexo(document.getElementsByName("rbSexo"),validate);
    validate = validarTemas(document.getElementsByName("cbTemas"),validate);
    validate = validarPais(document.getElementById("cmbPaises"),validate);
    return validate;
}

function validarNombreApellido(txt,validate) {
    if (txt.value.length < 3) {
        txt.labels[1].classList.toggle("hidden",false);
        return false;
    }else{return validate}
}

function validarEmail(txt,validate) {
    if (!txt.value.match(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/)) {
        txt.labels[1].classList.toggle("hidden",false);
        return false;
    }else{return validate}
}

function validarEdad(txt,validate) {
    if (isNaN(parseInt(txt.value)) || parseInt(txt.value) > 99 || parseInt(txt.value) < 1) {
        txt.labels[1].classList.toggle("hidden",false);
        return false;
    }else{return validate}
}

function validarSexo(rb,validate) {
    if (rb[0].checked == false && rb[1].checked == false && rb[2].checked == false) {
        document.getElementById("lblErrorS").classList.toggle("hidden",false);
        return false;
    }else{return validate}
}

function validarTemas(chk,validate) {
    if (chk[0].checked == false && chk[1].checked == false && chk[2].checked == false && chk[3].checked == false && chk[4].checked == false) {
        document.getElementById("lblErrorT").classList.toggle("hidden",false);
        return false;
    }else{return validate}
}

function validarPais(sel,validate) {
    if (sel.selectedIndex == 0) {
        document.getElementById("lblErrorP").classList.toggle("hidden",false);
        return false;
    }else{return validate}
}

function removerLabelTxt(txt) {
    for (let i=0; i<txt.length; i++){
        txt[i].onfocus = function(){
            txt[i].labels[1].classList.toggle("hidden",true)
        }
    }
}

function removerLabelRadio(rb) {
    for (let i=0; i<rb.length; i++){
        rb[i].onclick = function(){
            document.getElementById("lblErrorS").classList.toggle("hidden",true);
        }
    }
}

function removerLabelCheck(chk) {
    for (let i=0; i<chk.length; i++){
        chk[i].onclick = function(){
            document.getElementById("lblErrorT").classList.toggle("hidden",true);
        }
    }
}

function removerLabelPais(sel) {
    sel.onfocus = function(){
        document.getElementById("lblErrorP").classList.toggle("hidden",true);
    }
}