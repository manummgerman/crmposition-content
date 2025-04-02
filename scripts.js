// Main JavaScript for CRMPosition Training Content

// Set current year in footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Check if user is verified for content access
document.addEventListener('DOMContentLoaded', function() {
    const contentButton = document.getElementById('content-button');
    if (contentButton) {
        const isVerified = localStorage.getItem('yt_subscription_verified');
        
        if (isVerified !== 'true') {
            contentButton.addEventListener('click', function(e) {
                e.preventDefault();
                alert('Please verify your YouTube subscription first.');
                window.location.href = 'verify.html';
            });
        }
    }
});

// For demo purposes - add a hidden button to reset verification status
// This should be removed in production
document.addEventListener('DOMContentLoaded', function() {
    const resetButton = document.createElement('button');
    resetButton.textContent = 'Reset Verification (Demo)';
    resetButton.style.position = 'fixed';
    resetButton.style.bottom = '10px';
    resetButton.style.left = '10px';
    resetButton.style.opacity = '0.1';
    resetButton.style.fontSize = '10px';
    resetButton.style.padding = '5px';
    resetButton.style.zIndex = '1000';
    
    resetButton.addEventListener('click', function() {
        localStorage.removeItem('yt_subscription_verified');
        alert('Verification status reset. You will need to verify again to access content.');
        window.location.href = 'index.html';
    });
    
    document.body.appendChild(resetButton);
});
