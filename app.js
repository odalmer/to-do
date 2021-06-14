const activityBtn = document.getElementById("newActivityBtn");
const newActivityTxt = document.getElementById("activityTxt");
const actContainer = document.getElementById("actContainer");
var activities = [];
// Ahora tengo planeado hacer que el border qeu tienen los p desaparezcan si el elemento esta vacio, y qeu vayan apareciendo segun lo vayan llenando aqui

newActivityTxt.addEventListener("keydown", function (e) {
  if (e.key == "Enter") {
    AddNewActivity();
  }
});
activityBtn.onclick = function () {
  AddNewActivity();
};

function AddNewActivity() {
  if (newActivityTxt.value != "") {
    var actIndex = activities.length;
    var newActivity = newActivityTxt.value;
    CreateActivity(newActivity, actIndex);
    newActivityTxt.value = "";
    activities.push(newActivity);
  }
}

CreateActivity('Add a activity!', 0);
function CreateActivity(newActivity, actIndex) {
  var container = document.createElement("div");
  var checkbox = document.createElement("input");
  var actLbl = document.createElement("label");

  container.className = "activity";
  container.id = "activity" + actIndex;
  checkbox.type = "checkbox";
  checkbox.id = "quitAct" + actIndex;
  actLbl.setAttribute("for", "quitAct" + actIndex);
  actLbl.innerText = newActivity;
  actContainer.append(container);
  container.append(checkbox);
  container.append(actLbl);

  container.addEventListener("click", function () {
    container.remove();
  });
}
// var divContainer = document.getElementsByClassName('container')
$(document).ready(function () {
  var height = $(window).height();

  $(".container").height(height);
});