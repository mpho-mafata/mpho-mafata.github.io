
   function langName(evt, name) {
      var i, tabcontent, tablinks;
      tabcontent = document.getElementsByClassName("tabcontent");
      for (i = 0; i < tabcontent.length; i++) {
         tabcontent[i].style.display = "none";
      }
      tablinks = document.getElementsByClassName("tablinks");
      for (i = 0; i < tablinks.length; i++) {
         tablinks[i].className = tablinks[i].className.replace(" active", "");
      }
      document.getElementById(name).style.display = "block";
      evt.currentTarget.className += " active";
   }

function openNavbar() {
    document.getElementById("sideNavigationBar")
        .style.width = "50%";
}
function closeNavbar() {
    document.getElementById("sideNavigationBar")
        .style.width = "0%";
}

<!-- SET MY HOME PAGE INTO TWO COLUMNS-->
.container {
    column-count: 2;
    column-gap: 20px;
}

// Get the scroll button:
let mybutton = document.getElementById("scrollbutton");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

