export default class LoginView {
    constructor(){
        this.loginForm = document.querySelector('#login-form')
        this.emailInput = document.querySelector('#emailAddress')
        this.passwordInput = document.querySelector('#password')
        this.controllerOnLogin = null
        document.querySelector('#login-form').addEventListener('submit', (e) => this.onSubmit(e))

    }
    setControllerOnLogin(controllerOnLogin){
        this.controllerOnLogin = controllerOnLogin
    }

    
    showError(message) {
        let toastContainer = document.querySelector('.toast-container');
        if (!toastContainer) {
          toastContainer = document.createElement('div');
          toastContainer.className = 'toast-container position-fixed top-0 end-0 p-3';
          document.body.appendChild(toastContainer);
        }
        
        const toastId = 'error-toast-' + Date.now();
        const toastHTML = `
          <div id="${toastId}" class="toast align-items-center text-white bg-danger border-0" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="d-flex">
              <div class="toast-body">
                ${message}
              </div>
              <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
          </div>
        `;
        
        toastContainer.insertAdjacentHTML('beforeend', toastHTML);
        
        const toastElement = document.getElementById(toastId);
        const toast = new bootstrap.Toast(toastElement, {delay: 5000});
        toast.show();
        
        setTimeout(() => {
          toastElement.remove();
        }, 5000);
      }

    redirectToApp() {
        window.location.href = 'app.html';
    }

    onSubmit(e){
        e.preventDefault();
        if (this.loginForm.checkValidity()) {
            this.controllerOnLogin(
                this.emailInput.value,
                this.passwordInput.value
            );
        }
    }

}