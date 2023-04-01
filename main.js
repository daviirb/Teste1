const form = document.getElementById("form-validator");

function validaForm(campoA, campoB) {
    const pnumero = campoA;    
    const snumero = campoB;
    console.log("Valor do campo A: ", +pnumero)
    console.log("Valor do Campo B: ", +snumero)
    return pnumero > snumero;
    
}

form.addEventListener('submit', function(e){
    e.preventDefault();
    const primeiroNumero = document.getElementById('value1');
    const segundoNumero = document.getElementById('value2');

    if (validaForm(primeiroNumero.value, segundoNumero.value)) {
        console.log ("valor de A > B");
        alert("Formulário Não foi Aceito!")
    
    } else{
        console.log("Valor de B > A")
        alert("Formulário Aceito!")
    }


    console.log("valor de A", + primeiroNumero.value);
    console.log("valor de B", + segundoNumero.value);
})


console.log(form);