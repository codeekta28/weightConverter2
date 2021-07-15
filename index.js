console.log("This is index.js file");
const inputBox = document.querySelector("#poundValue");
  inputBox.addEventListener('keyup',calculatingConversions);
  function calculatingConversions(){
      const poundValue = inputBox.value;
      console.log(!poundValue);
      let cards = document.querySelectorAll(".card");
      cards.forEach((card)=>{
          if(poundValue){
            card.style.display="block";
          }
      })
      document.querySelector(".gramValue").textContent=convertingPoundToGram(poundValue);
      document.querySelector(".KGValue").textContent=convertingPoundToKg(poundValue);
      document.querySelector(".OunceValue").textContent=convertingPoundToOunce(poundValue);
  }
  function convertingPoundToGram(poundValue){
      const gramWeight = poundValue/0.0022046;
      return(gramWeight.toFixed(3));
  }
  function convertingPoundToKg(poundValue){
      const KgWeight = poundValue/2.2046
      return(KgWeight.toFixed(3));
  }
  function convertingPoundToOunce(poundValue){
      const Ounce = poundValue*16;
      return(Ounce.toFixed(3));
  }