// application of PWA //
if('serviceWorker' in nagivator) {
    navigator.serviceWorker
        .register("./sw.js")
        .then( function() {
            console.log("Service worker register");
        });
}

