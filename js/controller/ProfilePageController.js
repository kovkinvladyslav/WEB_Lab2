export default class ProfileController {
    constructor(usersList, view) {
        this.usersList = usersList;
        this.view = view;

        const currentUser = this.usersList.getCurrentUser();
        if (currentUser) {
            this.view.renderUser(currentUser);
            document.querySelector('#profileTable').style.display = 'table';
        } else {
            window.location.href = '../../index.html'; 
        }
    }
}
