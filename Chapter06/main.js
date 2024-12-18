$(document).ready(() => {
  $(".move-right").on("click", () => {
    $("div").animate(
      {
        left: "+=200px",
      },
      "slow"
    );
  });
  $(".move-left").on("click", () => {
    $("div").animate(
      {
        left: "-=200px",
      },
      "slow"
    );
  });
});
