unction button5reponse()
{
 let display=document.getElementById("display");
  let newValue= display.getAttribute("value")+5;
  display.setAttribute("value", newValue);
}
let button4=document.getElementById("btn4");
button4.addEventListener("click", button4reponse);

