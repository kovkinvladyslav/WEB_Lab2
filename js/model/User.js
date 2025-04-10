import UsersList from "./UsersList.js";

export default class User {
    constructor(email, password, gender, birthDate, fullName){
        this.email = email || null;
        this.password = password || null;
        this.gender = gender || null;
        this.birthDate = birthDate || null;
        this.fullName = fullName || null;
    }

    isValid(){
        let storedUser = JSON.parse(localStorage.getItem(this.email)) 
        if(storedUser != null){
            if(storedUser.password == this.password){
                this.gender = storedUser.gender
                this.birthDate = storedUser.birthDate
                this.fullName = storedUser.fullName
                return true;
            } 
        } 
        return false;
    }
}