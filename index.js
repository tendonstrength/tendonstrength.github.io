(function(){

    // Listeners
    document.addEventListener("DOMContentLoaded", resolveUrl, false);

    document.addEventListener('click', function (event) {
        if (!event.target.classList.contains('menu-item')) return;
        var previousSelection = document.querySelector('.active-menu');
        if (previousSelection) previousSelection.classList.remove('active-menu');
        event.target.classList.add('active-menu');
        loadContentSection(event.target.hash);
        event.preventDefault();
    }, false);

    // Functions

    // Checks for a hash in the URL and updates the visible section if there is a match and also marks the correct menu item as selected
    function resolveUrl() {
        if (!location.hash) return;
        loadContentSection(location.hash);
        var previousSelection = document.querySelector('.active-menu');
        const newActiveLink = document.querySelector(`[href="${location.hash}"]`);
        if(!newActiveLink) return;
        if (previousSelection) previousSelection.classList.remove('active-menu');
        newActiveLink.classList.add('active-menu');
        
    }

    // Marks the correct content section visible based on the passed in hash
    function loadContentSection(hash) {
        var content = document.querySelector(hash);
        var previous = document.querySelector('.visible');
        if (previous && content) previous.classList.remove('visible');
        if (content) {
            content.classList.add('visible')
            history.replaceState(null, null, hash);
        };
        
    }
})();