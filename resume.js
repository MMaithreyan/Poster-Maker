var loadFile = function (event) {
    var image = document.getElementById("output");
    image.src = URL.createObjectURL(event.target.files[0]);
  };

  function getData()
  {
      //gettting the values
     var email = document.getElementById("email").value;
      var password= document.getElementById("password").value; 
      var telephone= document.getElementById("telephone").value; 
      var mobile= document.getElementById("mobile").value; 

      //saving the values in local storage

      localStorage.setItem("txtValue", email);
      localStorage.setItem("txtValue1", password);
      localStorage.setItem("txtValue2", mobile);
      localStorage.setItem("txtValue3", telephone);   
  }

  document.getElementById("data").innerHTML=localStorage.getItem("txtValue");
document.getElementById("data1").innerHTML=localStorage.getItem("txtValue1");
document.getElementById("data2").innerHTML=localStorage.getItem("txtValue2");
document.getElementById("data3").innerHTML=localStorage.getItem("txtValue3");