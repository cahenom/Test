document.addEventListener('DOMContentLoaded', () => {
    const cookieList = document.getElementById('cookieList');

    // Fungsi untuk mendapatkan semua cookie
    const getCookies = () => {
        const decodedCookie = decodeURIComponent(document.cookie);
        const cookieArray = decodedCookie.split(';');
        const cookies = {};
        cookieArray.forEach(cookie => {
            const [name, value] = cookie.split('=');
            cookies[name.trim()] = value;
        });
        return cookies;
    };

    // Fungsi untuk menampilkan cookie di daftar
    const displayCookies = () => {
        const cookies = getCookies();
        cookieList.innerHTML = '';
        for (const [name, value] of Object.entries(cookies)) {
            const listItem = document.createElement('li');
            listItem.textContent = `${name}: ${value}`;
            cookieList.appendChild(listItem);
        }
    };

    // Tampilkan cookies saat halaman dimuat
    displayCookies();
});
