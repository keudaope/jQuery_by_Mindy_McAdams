$(document).ready(() => {
  $("div").on("click", (event) => {
    let divText = $(event.currentTarget).text();

    let userInput = $("input[type=text").val();
    userInput = "<p>" + userInput + "</p>";
    if (divText === "Before") {
      $(".brown").before(userInput);
    } else if (divText === "After") {
      $(".brown").after(userInput);
    } else if (divText === "Prepend") {
      $(".brown").prepend(userInput);
    } else if (divText === "Append") {
      $(".brown").append(userInput);
    }
  });
});
