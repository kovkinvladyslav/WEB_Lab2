export default class View{
    constructor(){
        this.keys = document.querySelectorAll('#calculator button, #change-mode button');
        this.operators = ['+', '-', 'x', '/']
        this.programmerOperators = ['AND', 'OR', 'XOR', 'NOT', 'BIN', 'DEC', 'HEX']
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
            return
        } else {
            this.controllerOnInput(e.target.innerHTML)
        }
    }

}