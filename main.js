x = 0;
y = 0;
draw_circle = "";
draw_rect = "";
var speechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start()
{
document.getElementById("status").innerHTML = "habla o te secuestro";
recognition.start();
}

recognition.onresult = function(event)
{
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("status").innerHTML = "tu dijite:" + content;
    if(content == "circle")
    {
        x = Math.floor(Math.random()*900);
        y = Math.floor(Math.random()*600);
        document.getElementById("status").innerHTML = "se dibujo lo que tas viendo";
        draw_circle = "set";
    }
    if(content == "rectangle")
    {
        x = Math.floor(Math.random()*900);
        y = Math.floor(Math.random()*600);
        document.getElementById("status").innerHTML = "se dibujo lo que tas viendo";
        draw_rect = "set";
    }
}

function setup()
{
    canvas= createCanvas(900,600);
}

function draw()
{
    if(draw_circle == "set")
    {
        radius = Math.floor(Math.random()*100);
        circle(x,y,radius);
        document.getElementById("status").innerHTML = "yasta el circulo";
        draw_circle = "";
    }
    if(draw_rect == "set")
    {
        rect(x,y,70,50);
        document.getElementById("status").innerHTML = "yasta el rectangulo";
        draw_rect = "";
    }
}