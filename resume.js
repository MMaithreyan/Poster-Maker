var loadFile = function (event) {
  var image = document.getElementById("output");
  var pic = image.src = URL.createObjectURL(event.target.files[0]);
};



function getData() {
  //gettting the values
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var pro = document.getElementById("pro").value;

  var telephone = document.getElementById("telephone").value;
  var mobile = document.getElementById("mobile").value;
  var gitlink = document.getElementById("git").value;

  var id = document.getElementById("id").value;
  var address = document.getElementById("Address").value;
  var skill1 = document.getElementById("skill1").value;
  var skill2 = document.getElementById("skill2").value;
  var skill3 = document.getElementById("skill3").value;
  var skill4 = document.getElementById("skill4").value;
  var sk1 = document.getElementById("sk1").value;
  var sk2 = document.getElementById("sk2").value;
  var sk3 = document.getElementById("sk3").value;
  var sk4 = document.getElementById("sk4").value;

  //saving the values in local storage
  localStorage.setItem("txtValue", email);
  localStorage.setItem("txtValue1", password);
  localStorage.setItem("pro", pro);
  localStorage.setItem("txtValue2", mobile);
  localStorage.setItem("github-link", gitlink);

  localStorage.setItem("txtValue3", telephone);
  localStorage.setItem("txtValue4", id);
  localStorage.setItem("txtValue5", address);
  localStorage.setItem("txtValue6", skill1);
  localStorage.setItem("txtValue7", skill2);
  localStorage.setItem("txtValue8", skill3);
  localStorage.setItem("txtValue9", skill4);
  localStorage.setItem("txtValue10", sk1);
  localStorage.setItem("txtValue11", sk2);
  localStorage.setItem("txtValue12", sk3);
  localStorage.setItem("txtValue13", sk4);

}


document.getElementById("data").innerHTML = localStorage.getItem("txtValue");
document.getElementById("data1").innerHTML = localStorage.getItem("txtValue1");
document.getElementById("about").innerHTML = localStorage.getItem("pro");
document.getElementById("data2").innerHTML = localStorage.getItem("txtValue2");
document.getElementById("data3").innerHTML = localStorage.getItem("txtValue3");
document.getElementById("data4").innerHTML = localStorage.getItem("txtValue4");
document.getElementById("github").innerHTML = localStorage.getItem("github-link");

document.getElementById("data5").innerHTML = localStorage.getItem("txtValue5");
document.getElementById("data6").innerHTML = localStorage.getItem("txtValue6");
document.getElementById("data7").innerHTML = localStorage.getItem("txtValue7");
document.getElementById("data8").innerHTML = localStorage.getItem("txtValue8");
document.getElementById("data9").innerHTML = localStorage.getItem("txtValue9");
document.getElementById("meter1").value = localStorage.getItem("txtValue10");
document.getElementById("meter2").value = localStorage.getItem("txtValue11");
document.getElementById("meter3").value = localStorage.getItem("txtValue12");
document.getElementById("meter4").value = localStorage.getItem("txtValue13");

