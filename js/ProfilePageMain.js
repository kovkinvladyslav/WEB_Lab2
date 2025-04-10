import UsersList from './model/UsersList.js';
import ProfileView from './view/ProfilePageView.js';
import ProfileController from './controller/ProfilePageController.js';

const usersList = new UsersList();
const view = new ProfileView();
const controller = new ProfileController(usersList, view);
