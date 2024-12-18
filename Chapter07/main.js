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

  const hideAmount = panelHeight - 50;

  $("#chocolate").css("bottom", -hideAmount);
  console.log("Hidden height of panel: " + hideAmount);
});
