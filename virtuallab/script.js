function mixSolutions() {
    const resultElement = document.getElementById('result');
    resultElement.textContent = 'The solutions react to form a new compound!';
    resultElement.style.color = 'green';
    resultElement.style.fontWeight = 'bold';
}

function displayImage(input) {
    if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const uploadedImage = document.getElementById('uploadedImage');
            uploadedImage.src = e.target.result;
            uploadedImage.style.display = 'block';
        };
        reader.readAsDataURL(input.files[0]);
    }
}

console.log("Welcome to Virtual Labs!");
