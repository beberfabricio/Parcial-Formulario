window.onload = () => {
    document.getElementById("btnAceptar").addEventListener("click", function (e) {
        if (validarCampos() == false) {
            window.alert("Hay errores en al menos un campo.");
        } else {
           document.getElementById("sctModal").classList.add("modal-show");
           document.getElementById("btnModalC").addEventListener("click",function(e){
                //e.preventDefault();
                document.getElementById("sctModal").classList.remove("modal-show");
           });
        }
        e.preventDefault();
      });
    removerLabelTxt(document.querySelectorAll("input[type=text]"));
    removerLabelRadio(document.querySelectorAll("input[type=radio]"));
    removerLabelCheck(document.querySelectorAll("input[type=checkbox]"));
    removerLabelPais(document.getElementById("cmbPaises"));
}

function validarCampos() {
    var validate;
    validate = validarNombreApellido(document.getElementById("txtNombre"));
    validate = validarNombreApellido(document.getElementById("txtApellido"));
    validate = validarEmail(document.getElementById("txtEmail"));
    validate = validarEdad(document.getElementById("txtEdad"));
    validate = validarSexo(document.getElementsByName("rbSexo"));
    validate = validarTemas(document.getElementsByName("cbTemas"));
    validate = validarPais(document.getElementById("cmbPaises"));
    return validate;
}

function validarNombreApellido(txt) {
    if (txt.value.length < 3) {
        txt.labels[1].classList.toggle("hidden",false);
        return false;
    }
}

function validarEmail(txt) {
    if (!txt.value.match(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/)) {
        txt.labels[1].classList.toggle("hidden",false);
        return false;
    }
}

function validarEdad(txt) {
    if (isNaN(parseInt(txt.value)) || parseInt(txt.value) > 100 || parseInt(txt.value) < 0) {
        txt.labels[1].classList.toggle("hidden",false);
        return false;
    }
}

function validarSexo(rb) {
    if (rb[0].checked == false && rb[1].checked == false && rb[2].checked == false) {
        document.getElementById("lblErrorS").classList.toggle("hidden",false);
        return false;
    }
}

function validarTemas(chk) {
    if (chk[0].checked == false && chk[1].checked == false && chk[2].checked == false && chk[3].checked == false && chk[4].checked == false) {
        document.getElementById("lblErrorT").classList.toggle("hidden",false);
        return false;
    }
}

function validarPais(sel) {
    if (sel.selectedIndex == 0) {
        document.getElementById("lblErrorP").classList.toggle("hidden",false);
        return false;
    }
}

function removerLabelTxt(txt) {
    for (let i=0; i<txt.length; i++){
        txt[i].addEventListener("focus",function(){
            txt[i].labels[1].classList.toggle("hidden",true)
        });
    }
}

function removerLabelRadio(rb) {
    for (let i=0; i<rb.length; i++){
        rb[i].addEventListener("click",function(){
            document.getElementById("lblErrorS").classList.toggle("hidden",true);
        });
    }
}

function removerLabelCheck(chk) {
    for (let i=0; i<chk.length; i++){
        chk[i].addEventListener("click",function(){
            document.getElementById("lblErrorT").classList.toggle("hidden",true);
        });
    }
}

function removerLabelPais(sel) {
    sel.addEventListener("focus",function(){
        document.getElementById("lblErrorP").classList.toggle("hidden",true);
    })
}