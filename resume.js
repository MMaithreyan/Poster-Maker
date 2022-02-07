
var loadFile = function (event) {
  var image = document.getElementById("output");
  image.src = URL.createObjectURL(event.target.files[0]);
};

function getData(){
  var company_name = document.getElementById('company_name').value;

  localStorage.setItem("company_name",company_name);
}
document.getElementById('data1').innerHTML=localStorage.getItem('company_name')
