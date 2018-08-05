function event1(x){
    document.getElementById("display").value+=x;
}
    function event2(){
    var x = document.getElementById("display").value;
    document.getElementById("display").value = eval(x);
}
    function resetf() {
    $("#calc")[0].reset();
}