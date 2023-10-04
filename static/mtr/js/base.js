$(document).ready(function () {
    $('.burger').click(function (event) {
        $('.burger,.btn-link,.header').toggleClass('active')
        $('body').toggleClass('lock')
    })
    $('.link-s').click(function (event) {
        $('.burger,.btn-link,.header').removeClass('active')
        $('body').removeClass('lock')
    })
    $('.tgl-b').click(function (event) {
        $('.tgl-com').toggleClass('active')
        $('body').toggleClass('lock')

    })
    $('.add-c-bu').click(function (event) {
        $('.tgl-com').removeClass('active')
        $('body').removeClass('lock')

    })
    {

        $('#id_author').attr('placeholder', "Ім'я")
        $('#id_content').attr('placeholder', 'Відгук')

    }
      $('select').click(function (event) {
        $('select').css('color', 'black')
    })
    $(window).scroll(function() {

var scrollTop = window.scrollY; // Отримуємо поточне значення прокрутки по вертикалі
var windowHeight = window.innerHeight; // Отримуємо висоту вікна в пікселях
  // Змінити властивості елемента в залежності від позиції скролу
  if (scrollTop > windowHeight) {
    $('.header').css({
        'position':'fixed',
      'background-color': 'rgba(0,0,0,0.8)',
      'color': 'black',
      'transition': 'all 0.3s ease 0s'
    });
  } else {
    $('.header').css({
      'background-color': '',
      'position': 'absolute',
      'transition': 'all 0.5s ease 0s'



    });
  }
});
})
