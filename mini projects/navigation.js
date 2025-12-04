// Service Card Navigation Handler
document.addEventListener('DOMContentLoaded', function() {
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        // Make entire card clickable
        card.style.cursor = 'pointer';
        
        card.addEventListener('click', function(e) {
            // Don't interrupt if user clicks directly on the link
            if (e.target.tagName === 'A' || e.target.closest('a')) {
                return;
            }
            
            // Find the link in this card and navigate to it
            const link = this.querySelector('.card-link');
            if (link) {
                const href = link.getAttribute('href');
                console.log('Navigating to:', href);
                window.location.href = href;
            }
        });
    });
    
    console.log('Service card navigation initialized for', serviceCards.length, 'cards');
});
