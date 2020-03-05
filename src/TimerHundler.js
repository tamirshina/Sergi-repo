
let myFunc;
export function timer(homeBtnLogic){

    console.log('set time TTT');
     myFunc =window.setInterval(() => {
        homeBtnLogic();
      }, 120000);
}
export function removeTimer(){

    console.log('Remove New ssss');
    window.clearInterval(myFunc);
}