let textInput = document.getElementById("text-entered");
let btn = document.getElementById("btn");
let messagePassed = document.getElementById("message-passed");
let validValue = document.getElementsByClassName("valid-value")[0]

validValue.style.display = "none"

btn.addEventListener("click",addMessage)

btn.addEventListener("click",checkIfInputIsEmpty)

function addMessage(){
 messagePassed.innerHTML = textInput.value;   

//  changed the innerHTML of the output to that of the value received

 messagePassed.style.textTransform = "uppercase"

//  transformed the output into uppercase
}

function checkIfInputIsEmpty(){
 {
    if(textInput.value == ""){
      validValue.style.display = "block"

      // checked if input is empty , if it's , it prompts the user to enter a valid one
  
       }
   
  }
  setTimeout(function(){
    validValue.style.display = "none"
  },2000);
 
  // timed the warning message to show for only 2 seconds
}



