// script.js

function check() {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    var wrapper = document.querySelector('.wrapper');
    var centerText = document.querySelector('.center-text');

    if (checkboxes[0].checked && checkboxes[1].checked && checkboxes[2].checked) {
        if (!wrapper.classList.contains('throb')) {
            // Heart formation is complete, add 'throb' class
            wrapper.classList.add('throb');
            
            // Display the "Hello, World!" text
            centerText.style.display = 'block';
        }
    } else {
        if (wrapper.classList.contains('throb')) {
            // Heart formation is not complete, remove 'throb' class
            wrapper.classList.remove('throb');
            
            // Hide the "Hello, World!" text
            centerText.style.display = 'none';
        }
    }
}
