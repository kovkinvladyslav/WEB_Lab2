import UsersList from "./UsersList.js";

export default class User {
    #password
    constructor(email, password, gender, birthDate, fullName){
        this.email = email || null;
        this.#password = password || null;
        this.gender = gender || null;
        this.birthDate = birthDate || null;
        this.fullName = fullName || null;
    }

    isValid(usersList){
        return usersList.isInUsersList(new User(this.email, this.#password))
    }
}