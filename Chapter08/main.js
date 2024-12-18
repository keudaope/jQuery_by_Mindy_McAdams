// jquery is loaded
$(document).ready(() => {
    $(".more-text").hide();
    $(".bottom").hide();

    $('.clicker').on('click', (event) => {
      $(event.currentTarget).closest('section').siblings()
      .find('.bottom').slideUp();
      $(event.currentTarget).parent().next().slideToggle();
    });

    $('.more-link').on('click', (event) => {
      if($(event.currentTarget).text() === ' MORE ') {
        // More -> show
        $(event.currentTarget).prev().show();
        $(event.currentTarget).text(' LESS ');
      }else{
        $(event.currentTarget).prev().hide();
        $(event.currentTarget).text(' MORE ');// LESS -> hide
      }
      

    })
  });
  
