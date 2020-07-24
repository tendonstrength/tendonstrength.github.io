(function(){
    document.addEventListener('click', function (event) {
        if (!event.target.classList.contains('menu-item')) return;
        var previousSelection = document.querySelector('.active-menu');
        if (previousSelection) previousSelection.classList.remove('active-menu');
        event.target.classList.add('active-menu');
        var content = document.querySelector(event.target.hash);
        var previous = document.querySelector('.visible');
        if (previous) previous.classList.remove('visible');
        if (content) content.classList.add('visible');

        event.preventDefault();
    }, false);
})();