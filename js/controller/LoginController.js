import User from "../model/User.js";
import UsersList from "../model/UsersList.js"

export default class Controller {
    constructor(UsersList, LoginView){
        this.UsersList = UsersList;
        this.LoginView = LoginView;
        this.LoginView.setControllerOnLogin((email, password) => this.login(email, password))
    }

    login(email, password){
        const user = new User(email, password);
        if (user.isValid(this.UsersList)) {
            this.UsersList.setCurrentUser(user);
            this.LoginView.redirectToApp();
        } else {
            this.LoginView.showError('Невірний email або пароль!');
        }
    }
}