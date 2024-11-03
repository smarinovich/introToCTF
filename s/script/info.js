import { getCookie } from "./cookies.js";

$(document).ready(function () {
    let flags = getCookie();
    if (flags === "") {
        return;
    }
    let flagList = flags.split('|');
    let flagCount = 0;
    for (let i = 0; i < flagList.length; i++) {
        if (flagList[i].length != 4) {
            continue;
        }
        $(`#${String(flagList[i])}`).removeClass("incomplete")
        flagCount++;
    }
    if (flagCount === 13) {
        $("#fin").removeClass("incomplete")

    }
});