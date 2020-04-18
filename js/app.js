var box = document.getElementById("box");
var box_text = document.getElementById("box-text");
function onChangeBorderRadius(border_radius, value) {
    console.log("change " + border_radius + " radius:<" + value + ">");
    if (value == "") {
        value = "0";
    }
    switch (border_radius) {
        case "top-left":
            box.style.borderTopLeftRadius = value + "px";
            break;
        case "top-right":
            box.style.borderTopRightRadius = value + "px";
            break;
        case "bottom-right":
            box.style.borderBottomRightRadius = value + "px";
            break;
        case "bottom-left":
            box.style.borderBottomLeftRadius = value + "px";
            break;
        default:
            console.log("border invalid: " + border_radius);
    }
    updateBoxText();
}
function updateBoxText() {
    var borderTopLeftRadius = box.style.borderTopLeftRadius == "" ? 0 : parseFloat(box.style.borderTopLeftRadius);
    var borderTopRightRadius = box.style.borderTopRightRadius == "" ? 0 : parseFloat(box.style.borderTopRightRadius);
    var borderBottomRightRadius = box.style.borderBottomRightRadius == "" ? 0 : parseFloat(box.style.borderBottomRightRadius);
    var borderBottomLeftRadius = box.style.borderBottomLeftRadius == "" ? 0 : parseFloat(box.style.borderBottomLeftRadius);
    var result = "";
    // Caso todas as bordas iguais
    if ((borderTopLeftRadius == borderTopRightRadius) && (borderBottomRightRadius == borderTopLeftRadius) &&
        (borderBottomRightRadius == borderTopRightRadius) && (borderBottomLeftRadius == borderTopLeftRadius) &&
        (borderBottomLeftRadius == borderTopRightRadius) && (borderBottomLeftRadius == borderBottomRightRadius)) {
        box_text.innerHTML = "border-radius: " + borderBottomLeftRadius + "px;";
    }
    else if ((borderTopLeftRadius == borderBottomRightRadius) && (borderTopRightRadius == borderBottomLeftRadius)) {
        box_text.innerHTML = "border-radius: " + borderTopLeftRadius + "px " + borderTopRightRadius + "px;";
    }
    else { // caso todas as bordas diferentes
        if (borderTopLeftRadius != 0) {
            result += "border-top-left-radius: " + borderTopLeftRadius + "px;\n";
        }
        if (borderTopRightRadius != 0) {
            result += "border-top-right-radius: " + borderTopRightRadius + "px;\n";
        }
        if (borderBottomRightRadius) {
            result += "border-bottom-right-radius: " + borderBottomRightRadius + "px;\n";
        }
        if (borderBottomLeftRadius != 0) {
            result += "border-bottom-left-radius: " + borderBottomLeftRadius + "px;";
        }
        box_text.innerHTML = result;
    }
}
function onCopy() {
    // Select
    box_text.select();
    box_text.setSelectionRange(0, 99999); /*For mobile devices*/
    document.execCommand("copy");
    // deselect
    document.getSelection().removeAllRanges();
    console.log("Clipboard: " + box_text.value);
}
box.style.borderRadius = "1px";
