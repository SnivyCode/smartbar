function click() {
    window.open("ordini/ordini.html", "_self")
}


function validate() {
    var input = document.getElementById("input").value;
    var password = "thomas"
    
    if(input==password) {
        //Ok
        window.open("ordini/ordini.html", "_self")
        
    } else alert("Password is not correct.")
}