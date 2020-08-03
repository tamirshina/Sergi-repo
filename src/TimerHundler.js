let myFunc;
export function timer(homeBtnLogic) {
  myFunc = window.setInterval(() => {
    homeBtnLogic();
  }, 1200000);
  console.log("timer on");
}
export function removeTimer() {
  window.clearInterval(myFunc);
  console.log("timer off");
}
