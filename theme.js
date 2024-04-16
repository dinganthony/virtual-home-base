var d = new Date();
var h = d.getHours();

var theme;
var next;
var greeting;

pickTheme = (hour) => {
    return hour >= 6 && hour < 18 ? 'light' : 'dark';
}

if (h >= 5 && h < 12) {
    greeting = "Good morning!";
} else if (h >= 12 && h < 18) {
    greeting = "Good afternoon!";
} else {
    greeting = "Good evening!";
}
// document.getElementById("theme-display").innerHTML = theme;
document.getElementById("theme").classList.add(theme + '-theme');
// document.getElementById("next-theme").innerHTML = next;
// greetingElement = document.getElementById("greeting");
// if (greetingElement != null) {
//     greetingElement.innerHTML = greeting;
// }

changeTheme = (newTheme) => {
    themeElement = document.getElementById("theme");
    themeElement.setAttribute("class", "");
    themeElement.classList.add(newTheme.toLowerCase() + '-theme');
    // document.getElementById("theme-display").innerHTML = newTheme;
    window.localStorage.setItem('customTheme', newTheme);
}

removeTheme = () => {
    var date = new Date();
    var hour = d.getHours();
    changeTheme(pickTheme(hour));
    window.localStorage.removeItem('customTheme');
}

