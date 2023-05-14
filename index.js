//clicked animation
const btns = document.querySelectorAll(".button");
btns.forEach(item => item.addEventListener('click',()=>{item.classList.add("clicked")}));
btns.forEach(item => item.addEventListener('transitionend', removeTransition));
function removeTransition(event){
  if(event.propertyName != 'transform') return;
  this.classList.remove('clicked');
}

//function to display a joke
async function displayjoke() {
  const joke = await getjoke(); // Fetch the joke data
  if (joke) {
    // Display the joke on the page or perform any desired action
    let ques = joke.question;
    let punch = joke.punchline;
    console.log(ques,"------",punch);
    const setupEl = document.querySelector(".setup");
    const punchEl = document.querySelector(".punchline");
    setupEl.textContent = ques;
    punchEl.textContent = punch;
  }
}
//function for fetching the joke
async function getjoke(){
  try{
    const response = await fetch("https://backend-omega-seven.vercel.app/api/getjoke");
    const jokeData = await response.json();
    return jokeData[0];
  }catch (error) {
    console.log("Error:",error);
    return null;
  }
}


function speakText(text) {
  const speechSynthesis = window.speechSynthesis;
  
  // Create a new SpeechSynthesisUtterance instance
  const utterance = new SpeechSynthesisUtterance(text);
  
  // Speak the text
  speechSynthesis.speak(utterance);
}

// Event listener for the Speak button
const speakButton = document.getElementById("speak");
speakButton.addEventListener("click", () => {
  const jokeText = document.getElementById("joke").innerText;
  speakText(jokeText);
});