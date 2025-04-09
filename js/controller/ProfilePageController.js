import User from '../../model/User'

export default class ProfilePageController {
    constructor(userListModel, userView){
        this.userListModel = userListModel;
        this.userView = userView;
    }
    onChangeCallback() {
        /* updates UI when a model has changed (title, done attributes) */
        document.querySelector('#profileTable').innerHTML = this.userView.toHtml();
    }
    addUser(userFullName, userEmail, userGender, userPassword ){
        const user = new User(userFullName, userEmail, userGender, userPassword);
        this.userListModel.add(user);
    }

    initOnModelChange() {
        /* updates UI when a model list has changed (adds, deletes items) */
        let handler = {
            set: (obj, prop, val) => {
                obj[prop] = val;
                document.querySelector('#profileTable').innerHTML = this.itemListView.toHtml();
                return true;
            }
        }
        this.userListModel.users = new Proxy(this.userListModel.user, handler);
    }


}