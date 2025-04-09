export default class userListModel {
    constructor() {
        this.users = [];
        this.onChangeCallback = null;
        this.currentUser = null;
    }

    add(user){
        this.users.push(user);
    }
    setCurrentUser(userEmail, userPassword) {
        this.currentUser = this.users.find(user =>
            user.userEmail === userEmail && user.userPassword === userPassword
        );
        return this.currentUser;
    }
    
}