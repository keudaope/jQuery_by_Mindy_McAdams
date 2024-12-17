$(document).ready(() => {
  // 1. esimerkki
  // $("div").on("click", () => {
  //   $("p").hide();
  // });

  // 2. esimerkki
  // $("p").hide();
  // $("div").on("click", () => {
  //   $("p").show();
  // });

  // 3. esimerkki
  $("div").on("click", () => {
    $("#special").toggle();
  });
});
