var loadFile = function (event) {
    var image = document.getElementById("output");
    image.src = URL.createObjectURL(event.target.files[0]);
  };

  function myFunction() {
    let person = prompt("Please enter your name", "Harry Potter");
    if (person != null) {
      document.getElementById("demo").innerHTML = person ;
    }
  }