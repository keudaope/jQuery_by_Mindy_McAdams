$(document).ready(() => {
  // 1. esimerkki
  // $("img")
  //   .on("mouseenter", () => {
  //     $("img").attr("src", "images/albert_new.png");
  //   })
  //   .on("mouseleave", () => {
  //     $("img").attr("src", "images/albert_old.png");
  //   });

  // Toinen esimerkki
  $("img")
    .on("mousedown", () => {
      $("img").attr("src", "images/albert_new.png");
    })
    .on("mouseup", () => {
      $("img").attr("src", "images/albert_old.png");
    });
});
