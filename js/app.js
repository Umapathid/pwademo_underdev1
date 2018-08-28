// application of PWA //
var defferedPrompt;
if('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('./sw.js')
        .then( function() {
            console.log('Service worker register');
        });
}

window.addEventListener("beforeinstallprompt", function(event) {
    console.log("Beforeinstallprompt fired");
    event.preventDefault();
    defferedPrompt = event;
});