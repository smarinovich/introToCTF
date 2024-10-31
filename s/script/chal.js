import { setCookie, getCookie, clearCookie } from "./cookies.js";

let flags = "";

function addFlag(flag) {
    flags += flag + "|";
    setCookie(flags);
}

function checkFlag(flagName, flag) {
    if ($(`#${flagName}flag`).val() === flag) {
        alert("Correct Flag!!!");
        addFlag(flagName);
    } else {
        alert("Incorrect flag 😭, try again.");
    };
}

$(document).ready(function () {
    flags = getCookie();
    if (flags === "") {
        return;
    }
    let flagList = flags.split('|');
    for (let i = 0; i < flagList.length; i++) {
        if (flagList[i].length != 4) {
            continue;
        }
        $(`#${String(flagList[i])}done`).removeClass("incomplete")
        $(`#${String(flagList[i])}but`).text($(`#${String(flagList[i])}but`).text() + '✔️');
    }
});

$("#clear").click(function () {
    clearCookie();
})

$("#for1submit").click(function () {
    checkFlag("for1", "ITC{gEx_tH3_g3cK0}");
});

$("#cry1submit").click(function () {
    checkFlag("cry1", "ITC{polyibuscubed}");
});