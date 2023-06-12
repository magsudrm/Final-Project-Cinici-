$(document).ready(function() {
  $('.slider-content').slick();
});

$(document).ready(function() {
  $('.slider-content2').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
});
document.addEventListener("DOMContentLoaded", function() {
  var qadinLink = document.querySelector(".a-qadin");
  var dropdownQadin = document.querySelector(".dropdown-qadin");

  qadinLink.addEventListener("mouseover", function() {
    dropdownQadin.style.display = "block";
  });

  dropdownQadin.addEventListener("mouseout", function() {
    dropdownQadin.style.display = "none";
  });
});
