window.onload = () => {
    removerLabelTxt(document.querySelectorAll("input[type=text]"));
    removerLabelRadio(document.querySelectorAll("input[type=radio]"));
    removerLabelCheck(document.querySelectorAll("input[type=checkbox]"));
    document.getElementById("btnAceptar").addEventListener("click", function (e) {
        e.preventDefault();
        validarCampos();
      });
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

function validarCampos() {
    validarNombre(document.getElementById("txtNombre"));
    validarApellido(document.getElementById("txtApellido"));
    validarEmail(document.getElementById("txtEmail"));
    validarEdad(document.getElementById("txtEdad"));
    validarSexo(document.getElementsByName("rbSexo"));
}

function validarNombre(txt) {
    if (txt.value.length < 3) {
        txt.labels[1].classList.toggle("hidden",false);
    }
}

function validarApellido(txt) {
    if (txt.value.length < 3) {
        txt.labels[1].classList.toggle("hidden",false);
    }
}

function validarEmail(txt) {
    if (!txt.value.match(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/)) {
        txt.labels[1].classList.toggle("hidden",false);
    }
}

function validarEdad(txt) {
    if (isNaN(parseInt(txt.value)) || parseInt(txt.value) > 100 || parseInt(txt.value) < 0) {
        txt.labels[1].classList.toggle("hidden",false);
    }
}

function validarSexo(rb){
    if (rb[0].checked == false && rb[1].checked == false && rb[2].checked == false) {
        document.getElementById("lblErrorS").classList.toggle("hidden",false);
    }
}

function validarTemas(chk){

}