const InputText = document.getElementById("inputText");

const inputheading = document.getElementById("heading").innerText;

const backspaceCountdisplay = document.getElementById("backspacecount");

const wordCountdisplay = document.getElementById("Words");

const setTimer = document.getElementById("timer");

const setresult = document.getElementById("result");

let backSpaceCount = 0;

let wordCount = 0;
let timeleft =60;
let countDown

InputText.addEventListener("keydown", (event) => {
  if (event.key === "Backspace") {
    backSpaceCount++;
    backspaceCountdisplay.textContent = backSpaceCount;
  }
  if (event.key === " ") {
    wordCount++;
    wordCountdisplay.textContent = wordCount;
   
  }
});

function handleReset(){
  backSpaceCount = 0;
  backspaceCountdisplay.textContent = backSpaceCount;
  wordCount = 0;
  wordCountdisplay.textContent = wordCount;

  InputText.value= "";

  clearInterval(countDown);
  timeleft = 60;
  setTimer.style.color = "black";

  setTimer.textContent =timeleft;
}

function handleStart(){
  clearInterval(countDown)

   countDown = setInterval(()=>{
      timeleft--;
      if(timeleft ==0){
          clearInterval(countDown)
          alert("Your time is over");
          setresult.textContent="Your Typing speed is "+ wordCount + "per minute and used "+ backSpaceCount +"backspaces."
          handleReset();
          
        }
      else if(timeleft<10){
        setTimer.textContent = "0"+timeleft;
        setTimer.style.color = "yellowGreen";
      }

      
      else{
          setTimer.textContent =timeleft;
          setTimer.style.color = "black";
      }

  },1000)

  InputText.disabled = false;
  InputText.focus();
}
