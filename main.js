const form = document.getElementById("form-validator");

function validator(numeros){
    const campoA = getElementById('campoA');
    const campoB = getElementById('campoB');
    
}
    


form.addEventListener('submit', function(e){

    e.preventDefault();
    if(!campoA>campoB){
        alert("A é maior que B");
    } else {
        alert("B é maior que A")
    }

})

console.log(form)