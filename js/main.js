$(document).ready(() => {
  $("#add-item").click(() => {
    fetch("../templates/item.html")
      .then((response) => response.text())
      .then((data) => $("#items").append(data));
  });

  $(document).click((e) => {
      let element = e.target
      if (element.getAttribute("data-delete") === "true") {
          if (element.getAttribute("data-delete-e") === "card") {
            $(element).parent().parent().parent().parent().css({display: "none"})
          } else {
            $(element).parent().parent().parent().parent().parent().css({display: "none"})
          }
      }
  })

});