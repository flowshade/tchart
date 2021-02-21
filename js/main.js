$(document).ready(() => {
    $("#add-item").click(() => {
        fetch('../templates/item.html')
        .then(response => response.text())
        .then(data => $("#items").append(data));
    })

    let ctrlIsPressed = false;

    $(document).keydown((e) => {
        if(e.which == "17") {
            ctrlIsPressed = true;
        }
    });
    
    $(document).keyup(() => {
        ctrlIsPressed = false;
    });

    window.deleteItem = (item) => {
        if(ctrlIsPressed) {
            if (confirm("Are you sure you want to delete this item?")) {
                item.parentNode.removeChild(item);
            }
        }
    }
})