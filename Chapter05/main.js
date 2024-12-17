$(document).ready(() => {
  // 1. ja 2. esimerkki
  // $(".change-color").on("click", () => {
  //   $("div").css({ background: "#ffb53f", borderRadius: "40px" });
  // });
  // $(".change-border").on("click", () => {
  //   $("div").css("border-radius", "40px");
  // });

  // 3. esimerkki
  // $(".change-color").on("click", () => {
  //   $("div").addClass("orange");
  // });
  // $(".change-border").on("click", () => {
  //   $("div").removeClass("orange");
  // });

  // 4. esimerkki
  // $(".change-color").on("click", () => {
  //   $("div").toggleClass("orange");
  // });

  // 5. esimerkki
  $(".change-color")
    .on("mouseenter", () => {
      $("div").addClass("orange");
    })
    .on("mouseleave", () => {
      $("div").removeClass("orange");
    });
});
