import UserList from './model/UsersList'
import Controller from './controller/ProfilePageController';
import ProfileView from './view/ProfilePageView'

let UserListModel = new UserList();
let ProfilePageView = new ProfileView();
let controller = new Controller(UserListModel, ProfilePageView);

