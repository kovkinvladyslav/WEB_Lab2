export default class Model {
    constructor() {
        this.mode = 'Normal'
        this.onChangeCallback = null;
        return this.iniOnModelChange();
    }

    setOnChangeCallback(callback) {
        this.onChangeCallback = callback
    }

    iniOnModelChange(){
        let handler = {
            set: (obj, prop, val) => {
                obj[prop] = val;
                if(this.onChangeCallback) this.onChangeCallback(this)
                return true;
            }
        }
        return new Proxy(this, handler)
    }
}