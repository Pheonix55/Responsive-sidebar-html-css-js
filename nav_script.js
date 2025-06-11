
const sidebar = document.getElementById('sidebar');

function toggleSubmenu(element) {
    const submenu = element.nextElementSibling;
    const isOpen = submenu.classList.contains('show');//if its open then it will be closed by closeAllSubmenu, if its not then the next condition wil  open it
    // document.querySelectorAll('#sidebar > ul > li').forEach(li => li.classList.remove('active'));
    closeAllSubmenu();

    if (!isOpen) {
        if (sidebar.getAttribute('data-style') == 'icon-only') {
            sidebar.setAttribute('data-style', 'full');
        }
        element.classList.add('active');
        element.classList.add('rotate');
        submenu.classList.add('show');
    }
}

function closeAllSubmenu() {
    document.querySelectorAll('.dropdown-btn').forEach(el => el.classList.remove('rotate'));
    document.querySelectorAll('#sidebar > ul > li').forEach(li => li.classList.remove('active'));
    document.querySelectorAll('#sidebar > ul > li > button').forEach(li => li.classList.remove('active'));

    sidebar
        .querySelectorAll('.sub-menu')
        .forEach(el => el.classList.remove('show')
        );
}

function toggleSidebar() {
    closeAllSubmenu()
    if (sidebar.getAttribute('data-style') == 'icon-only') {
        sidebar.setAttribute('data-style', 'full');
    }
    else {
        sidebar.setAttribute('data-style', 'icon-only');

    }
}


document.querySelectorAll('#sidebar > ul > li > a').forEach(link => {
    link.addEventListener('click', function (e) {
        document.querySelectorAll('#sidebar > ul > li').forEach(li => li.classList.remove('active'));
        this.parentElement.classList.add('active');
    });
});