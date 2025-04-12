export default class AppView{
    constructor(){
        this.keys = document.querySelectorAll('#calculator button, #change-mode button');
        this.addOnclickEvents()
        this.changeModeKeys = document.querySelectorAll('#change-mode button')
        this.controllerOnChangeMode = null
        this.controllerOnInput = null
    }

    updateMode(mode){
        let programmerKeys = document.querySelectorAll('.programmer-buttons')
        if(mode === 'Normal'){
            programmerKeys.forEach(buttons => {
                buttons.classList.add('hidden')
            })
        } else if (mode === 'Programmer') {
            programmerKeys.forEach(buttons => {
                buttons.classList.remove('hidden')
            })
            
        }
    }

    updateButtonsHighlight(base){
        const baseButtons = document.querySelectorAll('.programmer-buttons .row:last-child .btn');
        baseButtons.forEach(button => {
            if (button.innerHTML === base) {
              button.classList.add('active');
            } else {
              button.classList.remove('active');
            }
          });
          
        
    }

    setControllerOnChangeMode(controllerOnChangeMode){
        this.controllerOnChangeMode = controllerOnChangeMode
    }

    setControllerOnInput(controllerOnInput){
        this.controllerOnInput = controllerOnInput
    }

    clearActiveModeButtons() {
        this.changeModeKeys.forEach(button => {
          button.classList.remove('active');
        });
    }
    
    updateDisplay(displayVal){
        document.querySelector('#calculator').firstElementChild.value = displayVal
        console.log(displayVal)
    }

    addOnclickEvents(){
        for(let i = 0; i < this.keys.length; i++){
            this.keys[i].addEventListener('click', (e) => this.onClick(e))
        }
    }

    onClick(e){
        if(e.target.parentNode.id === 'change-mode'){
            this.controllerOnChangeMode(e.target)
        } else {
            this.controllerOnInput(e.target.innerHTML)
        }
    }

}