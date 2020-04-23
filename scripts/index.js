window.addEventListener('DOMContentLoaded', event => {
    event.stopPropagation();
    const dropdown = document.querySelector('.fa-cog');
    // console.log(dropdown);
    dropdown.addEventListener('click', event => {
        const pref = document.querySelector('.pref');
        pref.classList.toggle('pref--hidden');
    });
    const searchButton = document.querySelector('.fa-search');
    searchButton.addEventListener('click', event => {
        const searchBar = document.querySelector('.search');
        searchBar.classList.toggle('search--hidden');
    })
})
