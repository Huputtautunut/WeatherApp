function openTab(evt, tabName){

  //declaring variables
  var i, tabcontent, tablinks

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
document.getElementById(tabName).style.display = "inline-block";
evt.currentTarget.className += " active";

}

// this function is what controls the chart view when user navigates between views (Temperature, Humidity, etc.)
function changeView(value){

if(value == 1){
document.getElementById('chartContainer').style.display = "none";

}else if(value == 0){
document.getElementById('chartContainer').style.display = "inherit";

}
}
