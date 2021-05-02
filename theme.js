var d = new Date();
var h = d.getHours();

var theme;
var next;
if (h >= 2 && h < 6) {
    theme = 'night';
    next = "6 am";
} else if (h >= 6 && h < 10) {
    theme = 'sunrise';
    next = "10 am";
} else if (h >= 10 && h < 14) {
    theme = 'midday';
    next = "2 pm";
} else if (h >= 14 && h < 18) {
    theme = 'light';
    next = "6 pm";
} else if (h >= 18 && h < 22) {
    theme = 'sunset';
    next = "10 pm";
} else if (h >= 22 || h < 2) {
    theme = 'moonlight';
    next = "2 am";
}
document.getElementById("theme-display").innerHTML = theme;
theme = theme.toLowerCase();
document.getElementById("theme").classList.add(theme + '-theme');
document.getElementById("next-theme").innerHTML = next;
