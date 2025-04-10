export default class ProfileView {
    constructor() {
        this.fullNameEl = document.querySelector('#fullName');
        this.emailEl = document.querySelector('#email');
        this.genderEl = document.querySelector('#gender');
        this.birthDateEl = document.querySelector('#birthDate');
    }

    renderUser(user) {
        this.fullNameEl.textContent = user.fullName;
        this.emailEl.textContent = user.email;
        this.genderEl.textContent = user.gender;
        this.birthDateEl.textContent = user.birthDate;
    }
}
