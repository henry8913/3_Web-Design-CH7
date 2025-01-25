const cache = {};

const loadComponent = (selector, url) => {
    if (cache[url]) {
        console.log(`Recupero ${url} dalla cache.`);
        document.querySelector(selector).innerHTML = cache[url];
        return Promise.resolve();
    }

    return fetch(url)
        .then(response => {
            if (!response.ok) throw new Error(`Errore nel caricamento di ${url}: ${response.statusText}`);
            return response.text();
        })
        .then(data => {
            cache[url] = data;
            document.querySelector(selector).innerHTML = data;
        });
};

Promise.all([
    loadComponent('#head-placeholder', './components/head.html'),
    loadComponent('#header-placeholder', './components/header.html'),
    loadComponent('#footer-placeholder', './components/footer.html'),
])
    .then(() => {
        console.log('Tutte le sezioni sono state caricate!');
    })
    .catch(error => {
        console.error('Errore durante il caricamento delle sezioni:', error);
    });

document.addEventListener("DOMContentLoaded", function () {
    if (!sessionStorage.getItem("modalShown")) {
        let modalShown = false;

        window.addEventListener("scroll", function () {
            if (!modalShown && window.scrollY > 200) {
                const myModal = new bootstrap.Modal(document.getElementById('infoModal'));
                myModal.show();
                sessionStorage.setItem("modalShown", "true");
                modalShown = true;
            }
        });
    }
});


