var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

var Textbox = document.getElementById("textbox");

function start()
{
    Textbox.innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event) {

    console.log(event);

    var Content = event.results[0][0].transcript;

    Textbox.innerHTML = Content;
    console.log(Content);
    if(Content == "selfie")
    {
        console.log("tirando selfie ...")
        speak();
    }
}


function speak() {
    var synth = window.speechSynthesis;

    speakData = "Tirando sua selfie em 5 segundos";

    var utterThis = new SpeechSynthesisUtterance(speakData);

    synth.speak(utterThis);

    Webcam.attach(camera);

    setTimeout(function()
    {
        takeSelfie1();
        save();
    }, 5000);
    setTimeout(function()
    {
        takeSelfie2();
        save();
    }, 6000);
    setTimeout(function()
    {
        takeSelfie3();
        save();
    }, 7000);
}

camera = document.getElementById("camera");
Webcam.set({
    width: 360,
    height:250,
    image_format : "jpeg",
    jpeg_quality: 90
});

function takeSelfie1()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result1").innerHTML = '<img id="selfieImage" src="'+data_uri+'"/>';
    });
}
function takeSelfie2()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result2").innerHTML = '<img id="selfieImage" src="'+data_uri+'"/>';
    });
}
function takeSelfie3()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result3").innerHTML = '<img id="selfieImage" src="'+data_uri+'"/>';
    });
}


function save()
{
    link = document.getElementById("link");
    image = document.getElementById("selfieImage").src ;
    link.href = image;
    link.click();
}
