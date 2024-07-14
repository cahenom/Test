document.getElementById('recordCookies').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    
    // Function to retrieve cookies
    function getCookies() {
        return document.cookie;
    }
    
    // Send cookies to server (replace with your server endpoint)
    function sendCookiesToServer(cookies) {
        // Replace 'your-server-endpoint' with your actual server endpoint
        fetch('your-server-endpoint', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ cookies: cookies }),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to send cookies to server');
            }
            return response.json();
        })
        .then(data => {
            console.log('Cookies sent successfully:', data);
            // Optionally handle success response here
        })
        .catch(error => {
            console.error('Error sending cookies to server:', error);
            // Optionally handle error here
        });
    }
    
    // Get cookies and send them to server
    const cookies = getCookies();
    sendCookiesToServer(cookies);
});
