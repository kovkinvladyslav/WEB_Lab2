export default class ProfilePageView {
    constructor(userModel){
        this.userModel = userModel;
    }
    toHtml(){
        return `
        <tbody>
        <tr>
          <th scope="row">Full Name</th>
          <td>
          ${this.userModel.FullName}
          </td>
        </tr>
        <tr>
          <th scope="row">Email</th>
          <td>
          ${this.userModel.userEmail}
          </td>
        </tr>
        <tr>
          <th scope="row">Gender</th>
          <td>
            ${this.userModel.userGender}
          </td>
        </tr>
        <tr>
          <th scope="row">Date of Birth</th>
          <td>
            ${this.userModel.userBirthDate}
          </td>
        </tr>
      </tbody>`;
        
    }
}