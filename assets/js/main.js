/*
--- CONSEGNA
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: Nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.
*/

const ul = document.querySelector('ul.list');
const lastClick = document.querySelector('p.text-white');
const generate = document.getElementById('ok');
let levelSelected = document.getElementById('level')

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

generate.addEventListener('click', function() {
    lastClick.innerText = 'Quale cella cliccherai per prima?';
    ul.innerHTML = '';
    ul.classList.remove('d-none');

    let bombe = [];
    let maxNumber;
    if (levelSelected.value === 'hard'){
        maxNumber = 49;
    } else if (levelSelected.value === 'normal'){
        maxNumber = 81;
    } else {
        maxNumber = 100;
    }

    while(bombe.length < 16){
        let randomNum = getRandomInt(1, maxNumber);
        if(!bombe.includes(randomNum)) bombe.push(randomNum);
}

    if (levelSelected.value === 'hard'){
        for (let i = 1; i <= 49; i++) {
            const element = document.createElement('li');
                element.innerText = i;
                element.classList.add('bg-body-secondary', 'ratio-49', 'd-flex', 'justify-content-center', 'align-items-center', 'fw-bold', 'border', 'border-white', 'border-2');
                element.addEventListener('click', function() {
                    this.classList.remove('bg-body-secondary');
                    this.classList.add('bg-primary');
                    this.classList.add('text-white');
                    lastClick.innerText = 'Ultima cella cliccata: ' + i;
                    if(bombe.includes(i)){
                        this.classList.remove('bg-primary');
                        this.classList.add('bg-danger');
                        alert('BOMBAAAAA!!!');
                        setTimeout(function() {
                            ul.innerHTML = '';
                        }, 1000);
                    }
                });
                ul.appendChild(element);
        }
    } else if (levelSelected.value === 'normal'){
        for (let i = 1; i <= 81; i++) {
            const element = document.createElement('li');
                element.innerText = i;
                element.classList.add('bg-body-secondary', 'ratio-81', 'd-flex', 'justify-content-center', 'align-items-center', 'fw-bold', 'border', 'border-white', 'border-2');
                element.addEventListener('click', function() {
                    this.classList.remove('bg-body-secondary');
                    this.classList.add('bg-primary');
                    this.classList.add('text-white');
                    lastClick.innerText = 'Ultima cella cliccata: ' + i;
                    if(bombe.includes(i)){
                        this.classList.remove('bg-primary');
                        this.classList.add('bg-danger');
                        alert('BOMBAAAAA!!!');
                        setTimeout(function() {
                            ul.innerHTML = '';
                        }, 1000);
                    }
                });
                ul.appendChild(element);
            }
    } else {
        for (let i = 1; i <= 100; i++) {
            const element = document.createElement('li');
                element.innerText = i;
                element.classList.add('bg-body-secondary', 'ratio-100', 'd-flex', 'justify-content-center', 'align-items-center', 'fw-bold', 'border', 'border-white', 'border-2');
                element.addEventListener('click', function() {
                    this.classList.remove('bg-body-secondary');
                    this.classList.add('bg-primary');
                    this.classList.add('text-white');
                    lastClick.innerText = 'Ultima cella cliccata: ' + i;
                    if(bombe.includes(i)){
                        this.classList.remove('bg-primary');
                        this.classList.add('bg-danger');
                        alert('BOMBAAAAA!!!');
                        setTimeout(function() {
                            ul.innerHTML = '';
                        }, 1000);
                    }
                });
                ul.appendChild(element);
        }
    }
})