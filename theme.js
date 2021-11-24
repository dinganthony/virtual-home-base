var d = new Date();
var h = d.getHours();

var theme;
var next;
var greeting;

pickTheme = (hour) => {
    if (hour >= 2 && hour < 6) {
        return 'dark';
    } else if (hour >= 6 && hour < 10) {
        return 'light';
    } else if (hour >= 10 && hour < 14) {
        return 'light';
    } else if (hour >= 14 && hour < 18) {
        return 'light';
    } else if (hour >= 18 && hour < 22) {
        return 'dark';
    } else {
        return 'dark';
    }
}

custom = window.localStorage.getItem('customTheme');
if (custom) {
    theme = custom;
} else {
    theme = pickTheme(h);
}

if (h >= 5 && h < 12) {
    greeting = "Good morning!";
} else if (h >= 12 && h < 18) {
    greeting = "Good afternoon!";
} else {
    greeting = "Good evening!";
}
// document.getElementById("theme-display").innerHTML = theme;
theme = theme.toLowerCase();
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

