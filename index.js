tailwind.config = {
    theme: {
      extend: {
        colors: {
          primary: '#03ce00',
        }
      }
    }
  }
$(document).ready(function () {
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();
      if (scroll > 300) {
        $("header").addClass("bg-gray-700 backdrop-blur-sm  bg-opacity-30");
      }

      else {
        $("header").removeClass("bg-gray-700 backdrop-blur-sm bg-opacity-30");
      }
    })
  })
  $(document).ready(function () {
    $('#search-input').focus(function () {
      $('#search').addClass('w-64 placeholder-white').removeClass('w-10 overflow-hidden');
      $('#search-input').addClass('placeholder-white');

    });

    $(document).click(function (event) {
      if (!$(event.target).closest('#search').length) {
        $('#search').removeClass('w-64 placeholder-white').addClass('w-10 overflow-hidden placeholder-transparant');
        $('#search-input').removeClass('placeholder-white').addClass('placeholder-transparent');
      }
    });
  });

  $(document).ready(function(){
    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5, // Menampilkan 5 gambar secara bersamaan
        slidesToScroll: 1,
        autoplay: true, // Aktifkan autoplay
        autoplaySpeed: 5000, // Waktu antara perpindahan slide (dalam milidetik)
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    });
});