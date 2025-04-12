export default class ProfileController {
    constructor(usersList, view) {
        this.usersList = usersList;
        this.view = view;

        if (this.usersList.getCurrentUser()) {
            this.view.renderUser(this.usersList.getCurrentUser());
            document.querySelector('#profileTable').classList.remove('hidden');
        } else {
            const base = window.location.origin + window.location.pathname.split('/').slice(0, 2).join('/');
            window.location.href = base + '/index.html';
        }
    }
}
