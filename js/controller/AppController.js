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
    }


    getInput(btnVal){
        this.ModelApp.processBtn(btnVal)
    }

    ChangeMode(mode){
        this.ModelApp.mode = mode.innerHTML
        this.ViewApp.clearActiveModeButtons()
        if(!mode.classList.contains('active')){
            mode.classList.add('active')
            this.ModelApp.mode = mode.innerHTML
        }
        return
    }
}