$(document).ready(function () {
    $('.burger').click(function (event) {
        $('.burger,.btn-link').toggleClass('active')
        $('body').toggleClass('lock')
    })
    $('.link-s').click(function (event) {
        $('.burger,.btn-link').removeClass('active')
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
  // Отримати поточну позицію скролу
        var scrollTop = $(this).scrollTop();

  // Змінити властивості елемента в залежності від позиції скролу
  if (scrollTop > 707) {
    $('.header').css({
      'background-color': 'rgba(0,0,0,0.8)',
      'color': 'black'
    });
  } else {
    $('.header').css({
      'background-color': '',


    });
  }
});
})
