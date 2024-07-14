function recordCookies() {
    var cookies = document.cookie; // Mengambil semua cookies yang tersimpan
    var cookieArray = cookies.split(';'); // Membuat array dari cookies

    var cookieListHTML = '<h2>Daftar Cookies:</h2><ul>';
    cookieArray.forEach(function(cookie) {
        cookieListHTML += '<li>' + cookie.trim() + '</li>'; // Menambahkan setiap cookie ke dalam daftar HTML
    });
    cookieListHTML += '</ul>';

    document.getElementById('cookieList').innerHTML = cookieListHTML; // Menampilkan daftar cookies di halaman
}
