$(document).ready(() => {
  $("#chocolate").css({
    position: "fixed",
    width: "500px",
    height: "auto",
    bottom: "0",
    right: "2rem",
  });

  const panelHeight = $("#chocolate").outerHeight();
  console.log("Panel height: " + panelHeight);
  
  const panelTop = $("#chocolate").offset().top;
  console.log("Top of the panel, position: " + panelTop);

  const secondParaTop = $("#chocolate p:nth-child(2)").offset().top;
  console.log("Top of 2nd P, position: " + secondParaTop);

  const showAmount = parseInt(secondParaTop - panelTop);
  console.log("Height of first P in panel: " + showAmount);

  const hideAmount = panelHeight - showAmount;
  console.log("Height of panel to be hidden: " + hideAmount);



  $("#chocolate").css("bottom", -hideAmount);
  console.log("Hidden height of panel: " + hideAmount);

  $("#chocolate").on('click', () =>{
    if($("#chocolate").hasClass('up')){
      // up -> down
      $("#chocolate").animate({
        bottom: -hideAmount
      }, 300).removeClass('up');

    }
    else{
      // down -> up
      $("#chocolate").animate({
        bottom: "0"
      }, 300).addClass('up');
    }


  });


});
