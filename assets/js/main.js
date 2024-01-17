/*
--- CONSEGNA
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

--- BONUS
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
*/

const ul = document.querySelector('ul.list');
const lastClick = document.querySelector('p.text-white');
const generate = document.getElementById('ok');
let levelSelected = document.getElementById('level')

generate.addEventListener('click', function() {
    lastClick.innerText = 'Quale cella cliccherai per prima?';
    ul.innerHTML = '';
    ul.classList.remove('d-none');

    if (levelSelected.value === 'easy'){
        for (let i = 1; i <= 49; i++) {
            const element = document.createElement('li');
                element.innerText = i;
                element.classList.add('bg-body-secondary', 'ratio-49', 'd-flex', 'justify-content-center', 'align-items-center', 'fw-bold', 'border', 'border-white', 'border-2');
                element.addEventListener('click', function() {
                    this.classList.toggle('bg-body-secondary');
                    this.classList.toggle('bg-primary');
                    this.classList.toggle('text-white');
                    lastClick.innerText = 'Ultima cella cliccata: ' + i;
                });
                ul.appendChild(element);
        }
    } else if (levelSelected.value === 'normal'){
        for (let i = 1; i <= 81; i++) {
            const element = document.createElement('li');
                element.innerText = i;
                element.classList.add('bg-body-secondary', 'ratio-81', 'd-flex', 'justify-content-center', 'align-items-center', 'fw-bold', 'border', 'border-white', 'border-2');
                element.addEventListener('click', function() {
                    this.classList.toggle('bg-body-secondary');
                    this.classList.toggle('bg-primary');
                    this.classList.toggle('text-white');
                    lastClick.innerText = 'Ultima cella cliccata: ' + i;
                });
                ul.appendChild(element);
            }
    } else {
        for (let i = 1; i <= 100; i++) {
            const element = document.createElement('li');
                element.innerText = i;
                element.classList.add('bg-body-secondary', 'ratio-100', 'd-flex', 'justify-content-center', 'align-items-center', 'fw-bold', 'border', 'border-white', 'border-2');
                element.addEventListener('click', function() {
                    this.classList.toggle('bg-body-secondary');
                    this.classList.toggle('bg-primary');
                    this.classList.toggle('text-white');
                    lastClick.innerText = 'Ultima cella cliccata: ' + i;
                });
                ul.appendChild(element);
        }
    }
})

