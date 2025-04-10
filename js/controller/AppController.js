import Model from "../model/AppModel";

export default class Controller {
    constructor(ViewApp, ModelApp){
        this.ModelApp = ModelApp
        this.ViewApp = ViewApp
        this.ViewApp.setControllerOnChangeMode(this.ChangeMode.bind(this))
        this.ModelApp.setOnChangeCallback((e) => this.onChangeCallback)
        this.initOnModelChange();

    }

    onChangeCallback(){
        document.querySelector('')
    }

    ChangeMode(mode){
        console.log(mode);
        this.ViewApp.clearActiveModeButtons()
        if(!mode.classList.contains('active')){
            mode.classList.add('active')
        }
        return
    }
}