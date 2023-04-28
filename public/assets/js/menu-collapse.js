const navLink = document.querySelectorAll('#legumes-saison .nav-link');
const collapse = document.querySelectorAll('#legumes-saison .collapse');

// Function to focus the selected Event Menu by adding the class active to the 'tab-nav li' classList, as well as the 'tab-body'
function focusEventMenu(index) {
    navLink[index].classList.add('active');
    collapse[index].classList.add('show');
}

// Function to unfocus the non-selected Event Menu by removing the class active to the 'tab-nav li' classList, as well as the 'tab-body'
function unfocusEventMenu(index) {
    navLink[index].classList.remove('active');
    collapse[index].classList.remove('show');
}

function updateEventMenus(selectedIndex) {
    for (let i = 0; i < navLink.length; i++) {
        if (i === selectedIndex) {
            focusEventMenu(i);
        } else {
            unfocusEventMenu(i);
        }
    }
}

navLink.forEach((item, index) =>
    item.addEventListener("click", function () { updateEventMenus(index); })
);