const speakBtn = document.getElementById("spk"); // Use getElementById to target elements by ID
const query = document.getElementById("txt");
speakBtn.addEventListener("click", playSpeech);
function playSpeech() {
    if(query.value)
    {
    const speech = new SpeechSynthesisUtterance(query.value+"rupee");
    speechSynthesis.speak(speech);
    }
    else{
        alert("Enter the query to speak")
        
    }
}
function darkMode() {
      var element = document.body;
    var element1 = document.getElementById("bxid");
    element1.classList.toggle("light-mode");   
    var element = document.body;
    element.classList.remove("light-mode");
    element.classList.add("dark-mode");
    document.getElementById("moon").style.display = "none";
    document.getElementById("sun").style.display = "block";
}
  function lightMode() {
    var element = document.body;
    element.classList.remove("dark-mode");
    element.classList.add("light-mode");
    document.getElementById("sun").style.display = "none";
    document.getElementById("moon").style.display = "block";
}



