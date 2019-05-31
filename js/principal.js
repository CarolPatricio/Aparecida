
// var titulo = document.querySelector(".titulo");

// console.log(titulo);

// var paciente = document.querySelector("#primeiro-paciente");
// console.log(paciente);
// var tdpeso = document.querySelector('.info-peso').textContent;
// console.log(tdpeso);

// var tdaltura = document.querySelector('.info-altura').textContent;

// var imc = tdpeso / tdaltura ** 2;
// console.log(imc);

// // document.getElementById("1").innerHTML = imc;

// var tdimc = document.querySelector(".info-imc");
// tdimc.textContent = imc;


var inputEle = document.getElementById('enter');
inputEle.addEventListener('keyup', function Enter(e){
    var key = e.which || e.keyCode;
        if (key == 13) {
            IMC();          
        }
});


function IMC(){
    var peso = document.querySelector('.peso').value;
    var altura = document.querySelector('.altura').value;
    var tdimc = document.querySelector(".info-imc");
    imc = peso / altura ** 2;
    tdimc.textContent = parseFloat(imc).toFixed(2);
}

function verificar () {
    
}

