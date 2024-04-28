const btn_check = document.getElementById("check");
const input_email = document.getElementById("email");
const input_status = document.getElementById("status");
console.log("Hola");

window.addEventListener("load", () => {
  btn_check.addEventListener("click", (e) => {
    e.preventDefault();
    let random = Math.random();
    random = random < 0.5;

    if (random) {
      console.log("Accept");
      input_status.value = "Accept";
    } else {
      console.log("Reject");
      input_status.value = "Reject";
    }
  });
});
