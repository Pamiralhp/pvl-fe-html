let errorNombre = errorEmail = errorTel = true;

function validarNombre() {
    var nombre = document.formulario.nombre.value;
    console.log(nombre);
    if (nombre === ""){
        document.getElementById("errorNombre").innerHTML="Error: Campo vacio";
    }
    else{
        document.getElementById("errorNombre").innerHTML="";
        var regex= /^[A-Za-z\s]+$/;
        if (regex.test(nombre) === false) {
            document.getElementById("errorNombre").innerHTML="Error: Formato invalido";
        }
        else{
            document.getElementById("errorNombre").innerHTML="";
            errorNombre = false;
        }
    }
}
function validarEmail() {
    var email = document.formulario.email.value;
    console.log(email);
    if (email === ""){
        document.getElementById("errorEmail").innerHTML="Error: Campo vacio";
    }
    else{
        document.getElementById("errorEmail").innerHTML="";
        var regex= /^[\w\-\.]+@([\w-]+\.)+[\w]{2,4}$/;
        if (regex.test(email) === false) {
            document.getElementById("errorEmail").innerHTML="Error: Formato invalido";
        }
        else{
            document.getElementById("errorEmail").innerHTML="";
            errorEmail = false;
        }
    }
}
function validarTel() {
    var tel = document.formulario.tel.value;
    console.log(tel);
    if (tel === ""){
        document.getElementById("errorTel").innerHTML="Error: Campo vacio";
    }
    else{
        document.getElementById("errorTel").innerHTML="";
        var regex= /^[6789]\d{8}$/;
        if (regex.test(tel) === false) {
            document.getElementById("errorTel").innerHTML="Error: Formato invalido";
        }
        else{
            document.getElementById("errorTel").innerHTML="";
            errorTel = false;
        }
    }
}
function validation() {
    if (!errorNombre && !errorEmail && !errorTel) 
        return true;
        else return false;
    
    
}