function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento === null) {
        console.log('Elemento não encontrado');
    }
    
    if (elemento && elemento.localName === 'audio'){
        elemento.play();
    }

    else {
        console.log('Parâmetro inválido');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

//para
for (let contador =0; contador < listaDeTeclas.length;contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;


    tecla.onclick = function () {
        tocaSom(idAudio);
    };

    tecla.onkeydown = function (evento) {
        
    if (evento.code === 'Space' || evento.code === 'Enter') {
        tecla.classList.add('ativa');
    }

}

    tecla.onkeyup = function (evento) {

    if (evento.code === 'Space' || evento.code === 'Enter') {
        tecla.classList.remove('ativa');
    }
        
}

}

/* Com While

while (contador < listaDeTeclas.length) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];

    //template string
    const idAudio = `#som_${instrumento}`;

    //console.log(idAudio);

    tecla.onclick = function () {
        tocaSom(idAudio);
    };

    contador = contador + 1;

    //console.log(contador)

}

*/



/* Com repetição
function tocaSomPom() {
    document.querySelector('#som_tecla_pom').play();
}

document.querySelector('.tecla_pom').onclick = tocaSomPom;

function tocaSomClap() {
    document.querySelector('#som_tecla_clap').play();    
}

function tocaSomTim() {
    document.querySelector('#som_tecla_tim').play();
}

function tocaSomPuff() {
    document.querySelector('#som_tecla_puff').play();
}

function tocaSomSplash() {
    document.querySelector('#som_tecla_splash').play();
}

function tocaSomToim() {
    document.querySelector('#som_tecla_toim').play();
}

function tocaSomPsh() {
    document.querySelector('#som_tecla_psh').play();
}

function tocaSomTic() {
    document.querySelector('#som_tecla_tic').play();
}

function tocaSomTom() {
    document.querySelector('#som_tecla_tom').play()
}

document.querySelector('.tecla_clap').onclick = tocaSomClap;
document.querySelector('.tecla_tim').onclick = tocaSomTim;
document.querySelector('.tecla_puff').onclick = tocaSomPuff;
document.querySelector('.tecla_splash').onclick = tocaSomSplash;
document.querySelector('.tecla_toim').onclick = tocaSomToim;
document.querySelector('.tecla_psh').onclick = tocaSomPsh;
document.querySelector('.tecla_tic').onclick = tocaSomTic;
document.querySelector('.tecla_tom').onclick = tocaSomTom;
*/