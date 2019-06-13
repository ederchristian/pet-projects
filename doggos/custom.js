const DOG_URL = "https://dog.ceo/api/breeds/image/random";

const doggos = document.querySelector(".doggos");

function addDoggo() {
    const promise = fetch(DOG_URL);
    promise
        .then(function(response) {
            const processingPromise = response.json();
            return processingPromise;
        })
        .then(function(processedResponse) {
            const img = document.createElement("img");
            img.src = processedResponse.message;
            img.alt = "Good boi";
            doggos.appendChild(img);
        });
}

document.querySelector(".add-doggo").addEventListener("click", addDoggo);
