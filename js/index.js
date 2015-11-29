var button = document.getElementsByClassName("btn-bwh");
var temp=button[0].style.backgroundColor;
function atas(x){
    button[x].parentNode.parentNode.style.transition="all 1s";
    document.getElementById("isi").style.transition="all 1s";
    document.getElementById("isi").style.backgroundColor="lightgrey";
    button[x].parentNode.parentNode.style.backgroundColor="green";
    button[x].parentNode.parentNode.style.opacity=1;
}
function keluar(x){
    document.getElementById("isi").style.transition="all 1s";
    document.getElementById("isi").style.backgroundColor=temp;
    button[x].parentNode.parentNode.style.backgroundColor=temp;
    button[x].parentNode.parentNode.style.opacity=1;
}