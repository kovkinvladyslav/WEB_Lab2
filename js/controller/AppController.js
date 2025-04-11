import Model from "../model/AppModel.js";

export default class Controller {
    constructor(ViewApp, ModelApp){
        this.ModelApp = ModelApp
        this.ViewApp = ViewApp
        this.ViewApp.setControllerOnChangeMode(this.ChangeMode.bind(this));
        this.ViewApp.setControllerOnInput(this.getInput.bind(this))
        this.ModelApp.setOnChangeCallback(this.onChangeCallback.bind(this));
    }

    onChangeCallback(){
       this.ViewApp.updateMode(this.ModelApp.mode)
       this.ViewApp.updateDisplay(this.ModelApp.display)
       this.ViewApp.updateButtonsHighlight(this.ModelApp.base)
    }


    getInput(btnVal){
        this.ModelApp.processBtn(btnVal)
    }

    ChangeMode(mode){
        const modeName = mode.innerHTML;
        
        this.ViewApp.clearActiveModeButtons();
        
        this.ModelApp.mode = modeName;
        mode.classList.add('active');
        
        if(modeName === 'Normal'){
            this.ModelApp.setNewBase('DEC')
        }
    }
}