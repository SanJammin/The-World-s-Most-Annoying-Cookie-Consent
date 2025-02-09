const modal = document.getElementById("modal");
const modalCloseBtn = document.getElementById("modal-close-btn");
const consentForm = document.getElementById("consent-form");
const modalText = document.getElementById("modal-text");


modalCloseBtn.addEventListener("click", function(){
    modal.style.display = "none";
});

consentForm.addEventListener("submit", function(e){
    e.preventDefault();
    modalText.innerHTML = `
            <div class="modal-inner-loading">
                <img src="images/loading.svg" class="loading">
                <p id="uploadText">
                    Uploading your data to the dark web...
                </p>
            </div>`

    setTimeout(function(){
        document.getElementById("uploadText").textContent = `Making the sale...`
    }, 1500);
    });

setTimeout(function(){
    modal.style.display = "inline";
}, 1500);