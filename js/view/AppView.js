export default class View{
    constructor(){
        this.keys = document.querySelectorAll('#calculator button, #change-mode button');
        this.operators = ['+', '-', 'x', '/']
        this.programmerOperators = ['AND', 'OR', 'XOR', 'NOT', 'BIN', 'DEC', 'HEX']
        this.addOnclickEvents()
        this.changeModeKeys = document.querySelectorAll('#change-mode button')
        this.controllerOnChangeMode = null
    }

    setControllerOnChangeMode(controllerOnChangeMode){
        this.controllerOnChangeMode = controllerOnChangeMode
    }

    clearActiveModeButtons() {
        this.changeModeKeys.forEach(button => {
          button.classList.remove('active');
        });
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
        }
        console.log(e.target.parentNode.id)
        return
    }

}