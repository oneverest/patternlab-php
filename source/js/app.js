
// This waits for the DOM to load correctly before changing elements
$(document).ready(function(){
    // All your normal JS code goes in here
    $(".rating").rating();

    $('.message .close')
      .on('click', function() {
        $(this)
          .closest('.message')
          .transition('fade')
        ;
      })
    ;

    $('.ui.dropdown').dropdown();

    $('.ui.menu .dropdown')
      .dropdown({
        transition: 'drop',
        on: 'hover',
        action: 'hide',
        duration: 200
      })
    ;
    
    $('.ui.card').popup({
      // popup: '.special.popup'
    });

    $('.ui.button').popup();
    $('.ui.sidebar').sidebar();

    $('.icon.link').popup();
    $('img[data-content]').popup();

    // $('.ui.menu').popup();

    $('.ui.text.menu .browse.item').popup({
      popup: $('.admission.popup'),
      debug: true
    });

    // shape example 
    $('.shape').shape();
    $('.button').click((e) => {
      const t = e.currentTarget;
      const direction = t.dataset.direction || false;
      const animation = t.dataset.animation || false;
      if (direction && animation) {
        $('.shape').shape(animation + '.' + direction);
      }
    });

    $('.toggle.button').click((e) => {
      $('.ui.sidebar').sidebar('toggle');
    });

    $('.ui.example1.sticky')
      .sticky({
      context: '#example1'
    });
    $('.ui.sticky.example2').sticky({
      context: '#example2',
      pushing: true
    });
    $('.ui.sticky.example3').sticky({
      context: '#example3',
      pushing: true
    });

    $('.ui.sticky.example4').sticky();

    $('#page-dimmer-example').click((e) => {
      $(e.currentTarget).parent().dimmer('show');
    });

    $('.dimmer-example.button').click((e) => {
      const btn = e.currentTarget;
      const dimmId = '#' + btn.dataset.dimmer;
      const classList = Array.prototype.slice.call(btn.classList, 0);
      if ( classList.indexOf('show') !== -1)
        $(dimmId).dimmer('show');
      else
        $(dimmId).dimmer('hide');
    });

    // $('.menu .item').tab();
    // $('.ui.modal').modal('show');
    $('.example-modal.button').click((e) => {
      const t = e.currentTarget;
      const modal = t.dataset.target || false;
      if ( modal )
        $(modal).modal('show');
    });
});

// window.onload = function() {
//   console.log(2);
// };
// 
// var jq = jQuery.noConflict();
// jq(document).ready(function() {
//   jq('shape').shape();
// });