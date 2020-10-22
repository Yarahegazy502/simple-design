$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        center:true,
        loop: true,
        margin: 10,
        dots:false,
        responsiveClass: true,
        loop:true,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 1,
            },
            1000: {
                items: 4,
            },
        }
    });
});
 
//  var input1 = document.getElementById("chang");
//  input1.addEventListener('click',function(){
//      input1.style.border="6px solid red"
// ; })


 
    // var header = document.getElementById("categories");
    // var btns = header.getElementsByClassName("active1");
    // for (var i = 0; i < btns.length; i++) {
    //   btns[i].addEventListener("click", function() {
    //   var current = document.getElementsByClassName("activve");
    //   if (current.length > 0) { 
    //     current[0].className = current[0].className.replace(" activve", "");
    //   }
    //   this.className += " activve";
    //   });

    // } 


    // var head = document.getElementById("categories");
    // var btn = heade.getElementsByClassName("active11");
    // for (var i = 0; i < btn.length; i++) {
    //   btn[i].addEventListener("dbclick", function() {
    //   var curren = document.getElementsByClassName("activvee");
    //   if (curren.length > 0) { 
    //     curren[0].className = curren[0].className.replace(" activvee", "");
    //   }
    //   this.className += " activvee";
    //   });

    // } 