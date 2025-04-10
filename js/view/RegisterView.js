export default class RegisterView {
    constructor() {
        this.fullNameEl = document.querySelector('#fullName');
        this.emailEl = document.querySelector('#emailAddress');
        this.genderEl = document.querySelector('#gender');
        this.birthDateEl = document.querySelector('#birthDate');
        this.passwordEl = document.querySelector('#password');
        this.form = document.querySelector('#register-form');
        this.controllerOnRegister = null;

        this.form.addEventListener('submit', (e) => this.onSubmit(e));
    }

    setControllerOnRegister(controllerOnRegister) {
        this.controllerOnRegister = controllerOnRegister;
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
        const toast = new bootstrap.Toast(toastElement, { delay: 5000 });
        toast.show();

        setTimeout(() => {
          toastElement.remove();
        }, 5000);
    }

    redirectToLogin() {
        window.location.href = 'index.html';
    }

    onSubmit(e) {
        e.preventDefault();

        if (this.form.checkValidity()) {
            this.controllerOnRegister(
                this.fullNameEl.value,
                this.emailEl.value,
                this.genderEl.value,
                this.birthDateEl.value,
                this.passwordEl.value
            );
        }
    }
}
