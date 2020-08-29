const goBtn = document.getElementById("goBtn");
const container = document.getElementById("box-container");
const inputFieldforNumber = document.getElementById("inputNumber");
const inputFieldforDelay = document.getElementById("inputDelay");

let inputNumber = 10;
let inputDelay = 0.5;
let col = 10;
let i = 1;

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function elemenatePrime() {
  // Deleting All Boxes
  while (container.children.length) {
    container.removeChild(container.firstChild);
  }

  //   Setting the user Input Value
  if (parseInt(inputFieldforNumber.value)) {
    inputNumber = parseInt(inputFieldforNumber.value);
    col = Math.floor(Math.sqrt(inputNumber));
  }
  if (parseFloat(inputFieldforDelay.value)) {
    inputDelay = parseFloat(inputFieldforDelay.value);
  }

  //   Creating Boxes
  const numbering = [];
  const box = [];
  container.style.gridTemplateColumns = "repeat(" + col + ", 1fr)";
  for (i = 1; i <= inputNumber; i++) {
    numbering[i - 1] = document.createElement("h1");
    numbering[i - 1].innerText = i;

    box[i - 1] = document.createElement("div");
    box[i - 1].classList.add("box");
    box[i - 1].appendChild(numbering[i - 1]);

    container.appendChild(box[i - 1]);
  }

  /*   sieve of eratosthenes */
  let flag = new Array(inputNumber).fill(true);
  console.log(flag);
  flag[0] = false;
  flag[1] = false;
  box[0].classList.add("notPrime");
  for (i = 2; i <= inputNumber; i += 1) {
    if (flag[i]) {
      // to find all primes up to n

      for (j = i * i; j <= inputNumber; j += i) {
        flag[j] = false;
        // console.log(j);
        if (!box[j - 1].classList.contains("notPrime")) {
          box[j - 1].classList.add("notPrime");
        }
        await sleep(inputDelay * 1000);
      }
    }
  }
}

// Event Listeners
goBtn.addEventListener("click", elemenatePrime);

// On Load
// elemenatePrime();
