import { getCookie } from "./cookies.js";

$(document).ready(function () {
    let flags = getCookie();
    if (flags === "") {
        return;
    }
    let flagList = flags.split('|');
    for (let i = 0; i < flagList.length; i++) {
        if (flagList[i].length != 4) {
            continue;
        }
        $(`#${String(flagList[i])}`).removeClass("incomplete")
    }
});