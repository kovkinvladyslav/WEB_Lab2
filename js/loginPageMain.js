import LoginController from './controller/LoginController.js';
import LoginView from './view/LoginView.js';
import UsersList from './model/UsersList.js';

const loginView = new LoginView();
const usersList = new UsersList();
const loginController = new LoginController(usersList, loginView);
