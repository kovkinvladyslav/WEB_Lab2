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
    isValid(user){
        let storedUser = JSON.parse(localStorage.getItem(this.email)) 
        if(storedUser != null){
            if(storedUser.password == user.password){
                user.gender = storedUser.gender
                user.birthDate = storedUser.birthDate
                user.fullName = storedUser.fullName
                return true;
            } 
        } 
        return false;
    }
}
