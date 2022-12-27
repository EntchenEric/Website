let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let clouds = document.getElementById('clouds');
let text = document.getElementById('text');
let btn = document.getElementById('btn');
let topbar = document.getElementById('Start');
let logo = document.getElementById('Logo');
console.log(clouds)

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

logo.addEventListener('click', function () {
    var src = document.getElementById("sec")
    var elementscollection = src.getElementsByTagName('*');
    var elements = Array.prototype.slice.call(elementscollection)

    src = document.getElementById("section")
    srcelements = src.getElementsByTagName('*')
    for (let i = 0; i < srcelements.length; i++) {
        const element = srcelements[i];
        elements.push(element)
    }
    for (let x = 0; x < 10000; x++) {
        setTimeout(() => {
            for (let i = 0; i < elements.length; i++) {
                const element = elements[i];
                element.style.transform = 'rotate(' + randomIntFromInterval(-10, 10) + 'deg)';
            }
        }, 100)
    }

    for (let x = 0; x < 10000; x++) {
        setTimeout(() => {
            for (let i = 0; i < elements.length; i++) {
                const element = elements[i];
                var scalenow = 1 - (x / 10000)
                element.style.scale = scalenow
                element.style.transform = 'rotate(' + randomIntFromInterval(-10, 10) + 'deg)';
            }
        }, 100)
    }
    setTimeout(() => {
        for (let i = 0; i < elements.length; i++) {
            const element = elements[i];
            element.remove();
        }
        src.id = ''
        var top = document.getElementById("Top")
        top.remove();
        setTimeout(() => {
            var div = document.getElementById("sec")

            var textparagraph = document.createElement("p")
            var headerintroduction = document.createElement("h2")
            var textintroduction = document.createElement("p")
            headerintroduction.innerHTML += "Geheime Bildergalerie"

            textintroduction.innerHTML += "Glückwunsch, du hast meine geheime Bildergalerie gefunden! Hier siehst du Bilder von mir als ich noch jünger war und Bilder von mir, die relativ aktuell sind. Schaue sie dir ruhig an."
            textintroduction.style.marginBottom = "10%"
            textintroduction.style.alignContent = "justify";


            textparagraph.appendChild(headerintroduction)
            textparagraph.appendChild(textintroduction)
            textparagraph.style.width = "85%"
            textparagraph.style.marginLeft = "5%"


            div.appendChild(textparagraph)

            for (let imgnr = 1; imgnr < 9; imgnr++) {
                var img = document.createElement('img');
                img.src = 'images/Eric' + imgnr + '.jpg'
                img.style.borderRadius = "50px"
                img.style.width = "40%"
                img.style.height = "auto"
                img.style.marginLeft = "5%"
                img.style.marginBottom = "5%"
                div.appendChild(img)
            }

            var textparagraph = document.createElement("p")
            var headerintroduction = document.createElement("h2")
            var textintroduction = document.createElement("p")
            headerintroduction.innerHTML += "Wieso das ganze?"

            textintroduction.innerHTML += "Einfach verschiedene Seiten erstellen und zwischen ihnen hin und her leiten kann jeder. Ich wollte einfach mal schauen, wie man eine Seite komplett mit JavaScript erstellt. In dieser Seite steckt kein bisschen HTML oder CSS, sondern alles ist rein über JavaScript geschrieben. Außerdem wollte ich meiner Seite einen eigenen Charakter geben, indem ich einige Eastereggs einbaue, und dies ist das Erste! Vielleicht gibt es also noch mehr 👀"
            textintroduction.style.alignContent = "justify";
            textintroduction.style.marginBottom = "10%"

            textparagraph.appendChild(headerintroduction)
            textparagraph.appendChild(textintroduction)
            textparagraph.style.width = "85%"
            textparagraph.style.marginLeft = "5%"


            div.appendChild(textparagraph)


            var backbutton = document.createElement("button")
            backbutton.innerHTML += "Zurück";
            backbutton.style.scale = 1;
            backbutton.style.borderRadius = '50px';
            backbutton.style.width = '85%';
            backbutton.style.height = '10%';
            backbutton.style.marginLeft = "5%"
            backbutton.addEventListener('click', function () {
                window.location.reload();
            })
            div.appendChild(backbutton)
        }, 200)
    }, 100)

    console.log(elements)
})

var cheatcodenow = ""

window.addEventListener('keydown', (event) => {
    if (event.key === 'Backspace') {
        cheatcodenow = ""
    } else {

        cheatcodenow += event.key
    }

    if(cheatcodenow == "ei"){
        window.alert("Eieiei")
        cheatcodenow = ""
    }
    if(cheatcodenow == "motherload"){
        window.alert("Du hast 50.000 Simeolons erhalten! glaub ich..")
        cheatcodenow = ""
    }
    if(cheatcodenow == "flashbang"){
        window.alert("Ich mach hier noch alles in weiß :)")
        cheatcodenow = ""
    }
    if(cheatcodenow == "ok"){
        window.alert("ok")
        cheatcodenow = ""
    }
    if(cheatcodenow == "twitter"){
        window.open("https://twitter.com/EntchenEric", '_blank').focus();
        cheatcodenow = ""
    }
    if(cheatcodenow == "discord"){
        window.open("https://discord.gg/pokemon-de", '_blank').focus();
        cheatcodenow = ""
    }
    if(cheatcodenow == "css"){
        var stylecss = document.getElementById("stylecss")
        stylecss.remove()
        window.alert("CSS erfolgreich entfernt.")
        cheatcodenow = ""
    }
});



window.addEventListener('scroll', function () {
    let value = window.scrollY;
    moon.style.top = value * 1 + 'px';
    moon.style.left = value * 0.3 + 'px';
    clouds.style.top = value * -1 + 'px';
    if (value >= 900) {
        topbar.style.backgroundColor = '#1c0522';
    }
    else {
        topbar.style.backgroundColor = 'transparent';
    }
})