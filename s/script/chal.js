import { setCookie, getCookie, clearCookie } from "./cookies.js";
import { getUnlocks, initUnlocks } from "./unlocks.js";

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
    initUnlocks();
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
        const newFlags = getUnlocks(flagList[i]);
        if (newFlags != "") {
            $(`#${newFlags}card`).removeClass("locked")
        }

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

$("#cry2submit").click(function () {
    checkFlag("cry2", "ITC{64_7H0uSanD_nUmb3rS}");
});

$("#cry3submit").click(function () {
    checkFlag("cry3", "ITC{too_many_steps_to_solve}");
});

$("#cry4submit").click(function () {
    checkFlag("cry4", "ITC{Cr4p0t0gr4pHY_B0sS}");
});