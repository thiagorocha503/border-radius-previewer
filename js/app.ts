const box: HTMLElement = document.getElementById("box");
const box_text: HTMLElement = document.getElementById("box-text");

function onChangeBorderRadius(border_radius: string, value: string) {
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
    let borderTopLeftRadius: number = box.style.borderTopLeftRadius == "" ? 0 : parseFloat(box.style.borderTopLeftRadius);
    let borderTopRightRadius: number = box.style.borderTopRightRadius == "" ? 0 : parseFloat(box.style.borderTopRightRadius);
    let borderBottomRightRadius: number = box.style.borderBottomRightRadius == "" ? 0 : parseFloat(box.style.borderBottomRightRadius);
    let borderBottomLeftRadius: number = box.style.borderBottomLeftRadius == "" ? 0 : parseFloat(box.style.borderBottomLeftRadius);
    let result: string = "";
    // Caso todas as bordas iguais
    if ((borderTopLeftRadius == borderTopRightRadius) && (borderBottomRightRadius == borderTopLeftRadius) &&
        (borderBottomRightRadius == borderTopRightRadius) &&(borderBottomLeftRadius == borderTopLeftRadius) &&
        (borderBottomLeftRadius == borderTopRightRadius) &&(borderBottomLeftRadius == borderBottomRightRadius)){
        box_text.innerHTML = `border-radius: ${borderBottomLeftRadius}px;`;
        
    }else if ((borderTopLeftRadius == borderBottomRightRadius) && (borderTopRightRadius == borderBottomLeftRadius)) {
        box_text.innerHTML = `border-radius: ${borderTopLeftRadius}px ${borderTopRightRadius}px;`;
    } else {// caso todas as bordas diferentes
        if (borderTopLeftRadius != 0) {
            result += `border-top-left-radius: ${borderTopLeftRadius}px;<br> `;
        }
        if (borderTopRightRadius != 0) {
            result += `border-top-right-radius: ${borderTopRightRadius}px;<br>`;
        }
        if (borderBottomRightRadius) {
            result += `border-bottom-right-radius: ${borderBottomRightRadius}px;<br>`;
        }
        if (borderBottomLeftRadius != 0) {
            result += `border-bottom-left-radius: ${borderBottomLeftRadius}px;`;
        }
        box_text.innerHTML = result;
    }

}


box.style.borderRadius = "1px";