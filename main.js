let numberInput = document.querySelector("#Number");
let fullnameInput = document.querySelector("#Fullname");
let positionInput = document.querySelector("#Position");
let addBtn = document.querySelector("#AddBtn");
let infoItems = document.querySelector("#InfoItems");
let removeBtns = document.getElementsByClassName("RemoveBtn");


addBtn.addEventListener("click", function(){
   if (numberInput.value =="" || fullnameInput=="" || positionInput=="") 
   {
        alert("Fields can not be empty!")
        return;
   }

    let containerDiv = document.createElement("div");
    let li = document.createElement("li");
    let deleteBTN = document.createElement("button")
    deleteBTN.innerText = "Remove"
    deleteBTN.style.color = "red"
    deleteBTN.addEventListener("click", function(){
        deleteBTN.parentElement.remove();
    } )
    
    li.innerText = numberInput.value +" "+ fullnameInput.value + " " + positionInput.value
    li.style.marginRight = "20px"

    containerDiv.append(li);
    containerDiv.append(deleteBTN);
    containerDiv.style.display = "flex"
    containerDiv.style.marginTop = "10px"
    infoItems.append(containerDiv);

    numberInput.value = ""
    fullnameInputInput.value = ""
    positionInputInput.value = ""


})