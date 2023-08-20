
function verifyAge(isOlderThan18)
{
    if (isOlderThan18)
    {
        window.location.href = "PynqDataPage/GraphPage.html";
    }
    else
    {
        location.reload();
        alert("Sorry, you must be 18 or older to access this website.");
    }
}
function redirectToAboutPage() {
    window.location.href = "AboutUsFolder/AboutUsPage.html";
}


window.onload = function()
{
    document.getElementById("achtergrond").style.display = "flex";
};

function changeButtonStyle(button, backgroundColor, textColor) {
    button.style.backgroundColor = backgroundColor;
    button.style.color = textColor;
    button.style.outlineColor = textColor;
}

function hoversound(){
    var snd = new Audio('LeagueSounds/hover.mp3')
    snd.play()
}

function clicksound(){
    var snd = new Audio('LeagueSounds/click.mp3')
    snd.play()
}

function quitsound(){
    var snd = new Audio('LeagueSounds/Quit.mp3')
    snd.play()
}