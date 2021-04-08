function num(id){
    document.getElementById("dis").value +=id;
}
function ope(id){
    document.getElementById("dis").value +=id;
}
function rs(){
    document.getElementById("dis").value ="";
}
function rslt(){
    document.getElementById("dis").value = eval(document.getElementById("dis").value);
}