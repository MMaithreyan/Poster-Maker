var loadfile = function (event) {
  var image = document.getElementById("output");
  image.src = URL.createObjectURL(event.target.files[0]);
};


function getData(){
  var post = document.getElementById('file');
  var company_name = document.getElementById('company_name').value;
  localStorage.setItem("post",post);
  localStorage.setItem("company_name",company_name);

}
document.getElementById('data1').innerHTML=localStorage.getItem('company_name');
document.getElementById('output')=localStorage.getItem('post');
