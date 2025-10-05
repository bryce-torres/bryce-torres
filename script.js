const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function openTab(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

function addTask(){
    if(inputBox.value === ''){
        alert("you have to write something");
    }
    else{
       let li = document.createElement("li");
       li.innerHTML = inputBox.value;
       listContainer.appendChild(li);
       let span = document.createElement("span");
       span.innerHTML = "\u00d7";
       li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

//shows the task 
showTask();
// Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();