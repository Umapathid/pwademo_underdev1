var installButton = document.querySelector("#add_installBtn");

installButton.addEventListener("click", function(){
    console.log("BeforeInstall prompt activated");
    openCreateModal();
});

function openCreateModal() {
    console.log('add button activated');
    
        defferedPrompt.prompt();

        defferedPrompt.userChoice.then(function(choiceResult) {
            console.log("choice is: " + choiceResult);
            if(choiceResult.outcome === 'dismissed') {
                console.log('User cancelled the installed');
            }
            else {
                console.log('User add to Home screen');
            }
            defferedPrompt = null;
        });
        
    
}