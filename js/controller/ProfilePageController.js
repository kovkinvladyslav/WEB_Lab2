export default class ProfileController {
    constructor(usersList, view) {
        this.usersList = usersList;
        this.view = view;

        if (this.usersList.getCurrentUser()) {
            this.view.renderUser(this.usersList.getCurrentUser());
            document.querySelector('#profileTable').classList.remove('hidden');
        } else {
            window.location.href = '../../index.html'; 
        }
    }
}
