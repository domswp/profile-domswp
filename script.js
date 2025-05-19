// Simple script for the contact form functionality
document.addEventListener('DOMContentLoaded', function() {
    const messageInput = document.getElementById('message-input');
    const sendButton = document.querySelector('.send-btn');
    
    sendButton.addEventListener('click', function() {
        if (messageInput.value.trim() !== '') {
            alert('Pesan telah dikirim! Terima kasih atas masukan Anda.');
            messageInput.value = '';
        } else {
            alert('Silakan masukkan pesan terlebih dahulu.');
        }
    });
});
