import UsersList from './model/UsersList.js';
import RegisterView from './view/RegisterView.js';
import RegistrationController from './controller/RegisterController.js';

const usersList = new UsersList();
const registerView = new RegisterView();
const registrationController = new RegistrationController(usersList, registerView);
