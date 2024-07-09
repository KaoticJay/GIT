document.getElementById('activate-text').addEventListener('click', function() {
    fetch('https://KaoticJay.github.io/GIT/index.html')
        .then(response => response.text())
        .then(html => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            const textContainer = doc.getElementById('text-container');
            if (textContainer) {
                textContainer.style.display = 'block';
                console.log('Text activated on White Page');
            }
        })
        .catch(error => console.error('Error:', error));
});
