const button = document.querySelector('.button')
const firstInput = document.querySelector('#first-input') as HTMLInputElement;
const secondInput = document.querySelector('#second-input') as HTMLInputElement;
export const screen = document.querySelector('.screen');

function addNumber(a:number,b:number){
    // if(typeof a == 'number' && typeof b == number){
    //     screen.innerHTML = a + b;
    // }
    // else{
    //     screen.innerHTML = parseInt(a) + parseInt(b);
    // }
    if(screen){
        screen.innerHTML = (a + b).toString();
    }

}
button?.addEventListener('click',() => 
    addNumber(parseInt(firstInput.value),parseInt(secondInput.value)));