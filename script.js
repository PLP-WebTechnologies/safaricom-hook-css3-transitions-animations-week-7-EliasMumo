// Function with parameters and return value
function calculateArea() {
    const width = parseFloat(document.getElementById('width').value);
    const height = parseFloat(document.getElementById('height').value);
    
    if (isNaN(width) || isNaN(height)) {
        document.getElementById('area-result').textContent = 'Please enter valid numbers';
        return;
    }
    
    const area = width * height;
    document.getElementById('area-result').textContent = `The area is ${area} square units`;
    return area;
}

// Function demonstrating scope
function demonstrateScope() {
    let localVar = 'I am a local variable';
    globalVar = 'I am a global variable';
    
    function innerFunction() {
        let innerVar = 'I am an inner variable';
        return `Inner function: ${localVar}, ${globalVar}, ${innerVar}`;
    }
    
    const result = `Outer function: ${localVar}, ${globalVar}\n${innerFunction()}`;
    document.getElementById('scope-result').textContent = result;
}

// Function to toggle animation class
function toggleAnimation() {
    const target = document.getElementById('animation-target');
    target.classList.toggle('animated');
}

// Function to create and remove a loading spinner
function showLoadingSpinner(duration) {
    const spinner = document.createElement('div');
    spinner.classList.add('loading-spinner');
    document.body.appendChild(spinner);
    
    setTimeout(() => {
        spinner.remove();
    }, duration);
}

// Event listener for card hover to trigger loading spinner
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        showLoadingSpinner(1000);
    });
});

