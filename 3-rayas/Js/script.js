let noShow  = document.getElementById("container");
noShow.style.display = "none";


function myFunction() {
    noShow = document.getElementById("container");
    if (noShow.style.display === "none") {
      noShow.style.display = "grid";
    }
}
function btnPulsado() {

}
btn = document.getElementsByTagName("button");
btn.each(function(indice, elemento){
    elemento.addEventListener("click",(e) => btnPulsado(e, indice));
});