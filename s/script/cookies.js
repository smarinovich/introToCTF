// Cookie functions taken from https://www.w3schools.com/js/js_cookies.asp
function setCookie(cvalue) {
    const d = new Date();
    d.setTime(d.getTime() + (90 * 24 * 60 * 60 * 1000)); // Files will expire in 3 months
    let expires = "expires=" + d.toUTCString();
    document.cookie = "flags=" + cvalue + ";" + expires + ";path=/";
    location.reload();
}

function getCookie() {
    let name = "flags=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function clearCookie() {
    document.cookie = "flags=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    location.reload();
}

export { setCookie, getCookie, clearCookie };