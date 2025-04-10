import User from './User.js';

export default class UsersList {

    addUser(user) {
        localStorage.setItem(user.email, JSON.stringify(user));
    }

    isInUsersList(userToCheck){
        return JSON.parse(localStorage.getItem(userToCheck))
    }

    setCurrentUser(newCurrentUser) {
        localStorage.setItem('currentUser', JSON.stringify(newCurrentUser))
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('currentUser'));
    }
    
}
