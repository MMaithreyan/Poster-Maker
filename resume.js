var loadfile = function (event) {
  var image = document.getElementById("output");
  image.src = URL.createObjectURL(event.target.files[0]);
};


function getData(){
  var company_name = document.getElementById('company_name').value;
  var topic = document.getElementById('topic').value;
  var about = document.getElementById('about').value;
  var speaker = document.getElementById('speaker').value;
  var about_speaker = document.getElementById('about_speaker').value;
  var date = document.getElementById('date').value;
  var time = document.getElementById('time').value;
  var meet = document.getElementById('meet').value;
  var link = document.getElementById('link').value;

  localStorage.setItem("company_name",company_name);
  localStorage.setItem("topic",topic);
  localStorage.setItem("about",about);
  localStorage.setItem("speaker",speaker);
  localStorage.setItem("about_speaker",about_speaker);
  localStorage.setItem("date",date);
  localStorage.setItem("time",time);
  localStorage.setItem("meet",meet);
  localStorage.setItem("link",link);

}
document.getElementById('data1').innerHTML=localStorage.getItem('company_name');
document.getElementById('data2').innerHTML=localStorage.getItem('topic');
document.getElementById('data3').innerHTML=localStorage.getItem('about');
document.getElementById('data4').innerHTML=localStorage.getItem('speaker');
document.getElementById('data5').innerHTML=localStorage.getItem('about_speaker');
document.getElementById('data6').innerHTML=localStorage.getItem('date');
document.getElementById('data9').innerHTML=localStorage.getItem('time');
document.getElementById('data7').innerHTML=localStorage.getItem('meet');
document.getElementById('data8').innerHTML=localStorage.getItem('link');
