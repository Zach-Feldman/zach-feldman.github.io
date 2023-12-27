/*eslint-env es6*/

/* redirect.js for Zachary B. Feldman */

const form = document.getElementById('form');
const result = document.getElementById('result');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(form);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);
  result.innerHTML = "Please wait..."
  result.classList.add("result-message");

    fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })

    .then(async (response) => {
        let json = await response.json();
        if (response.status == 200) {
            result.classList.remove("error");
            result.innerHTML = json.message;
        } else {
            console.log(response);
            result.classList.add("error");
            result.innerHTML = json.message;
        }
    })

    .catch(error => {
        console.log(error);
        result.classList.add("error");
        result.innerHTML = "Something went wrong!";
    })

    .then(function() {
        form.reset();
        setTimeout(() => {
            result.innerHTML = ""; // Clear the message after 3 seconds
            result.classList.remove("result-message", "error");
        }, 3000);
    });
});