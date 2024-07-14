document.addEventListener('DOMContentLoaded', () => {
    // Fungsi untuk menyimpan cookie
    const setCookie = (name, value, days) => {
        const d = new Date();
        d.setTime(d.getTime() + (days*24*60*60*1000));
        const expires = "expires="+ d.toUTCString();
        document.cookie = `${name}=${value};${expires};path=/`;
    };

    // Simpan cookie saat halaman dimuat
    const title = document.title;
    const cookieName = title;
    const cookieValue = `Value of ${title}`;
    setCookie(cookieName, cookieValue, 7);  // Cookie akan disimpan selama 7 hari
});
