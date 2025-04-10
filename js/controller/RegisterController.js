import User from '../model/User.js'; 

export default class RegistrationController {
    constructor(UsersList, RegisterView) {
        this.UsersList = UsersList;
        this.RegisterView = RegisterView;

        this.RegisterView.setControllerOnRegister((fullName, email, gender, birthDate, password) => {
            this.register(fullName, email, gender, birthDate, password);
        });
    }

    register(fullName, email, gender, birthDate, password) {
        const newUser = new User(email, password, gender, birthDate, fullName);

        if (this.UsersList.isInUsersList(newUser)) {
            this.RegisterView.showError('Користувач з таким email вже існує!');
            return;
        } else {
            this.UsersList.addUser(newUser);
            this.RegisterView.redirectToLogin();
        }

    }
}
