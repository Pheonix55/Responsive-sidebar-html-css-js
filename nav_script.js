
const sidebar = document.getElementById('sidebar');

function toggleSubmenu(element) {
    const submenu = element.nextElementSibling;
    const isOpen = submenu.classList.contains('show');//if its open then it will be closed by closeAllSubmenu, if its not then the next condition wil  open it

    closeAllSubmenu();

    if (!isOpen) {
        if (sidebar.getAttribute('data-style') == 'icon-only'){
            sidebar.setAttribute('data-style', 'full');
        }
            element.classList.add('rotate');
        submenu.classList.add('show');
    }
}

function closeAllSubmenu() {
    document.querySelectorAll('.dropdown-btn').forEach(el => el.classList.remove('rotate'));
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