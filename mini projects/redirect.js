// Redirect to index.html after form submission
document.addEventListener('DOMContentLoaded', function () {
    const forms = document.querySelectorAll('form');

    forms.forEach(form => {
        form.addEventListener('submit', function (e) {
            // Let the form handle its submit normally first
            // Then check if success message is shown
            const checkSuccess = setInterval(() => {
                const successMessage = document.querySelector('.success-message, #success-message, [id*="success"], [class*="success"]');

                if (successMessage && (successMessage.style.display === 'block' || window.getComputedStyle(successMessage).display === 'block')) {
                    // Success message is visible, redirect after 3 seconds
                    clearInterval(checkSuccess);
                    setTimeout(() => {
                        window.location.href = 'index.html';
                    }, 3000);
                }
            }, 100); // Check every 100ms

            // Stop checking after 10 seconds
            setTimeout(() => clearInterval(checkSuccess), 10000);
        });
    });

    // Also handle back buttons
    const backButtons = document.querySelectorAll('.back-btn, #back-btn, [id*="back"], button[onclick*="back"]');
    backButtons.forEach(btn => {
        btn.addEventListener('click', function () {
            window.location.href = 'index.html';
        });
    });
});
