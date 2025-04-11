export default class Model {
    constructor() {
        this.mode = 'Normal'
        this.display = ''
        this.onChangeCallback = null;
        return this.iniOnModelChange();
    }


    processBtn(btnVal) {
        if (btnVal === 'C') {
            this.display = ''
        } else if (btnVal === '=') {
            try {
                const expression = this.display
                    .replace(/×/g, '*')
                    .replace(/÷/g, '/')
                    .replace(/−/g, '-')
    
                const result = eval(expression)
                this.display = result.toString()
            } catch (error) {
                this.display = 'Error'
            }
        } else if (btnVal === '⌫') {
            this.display = this.display.slice(0, -1)
        }   else if (btnVal === '.') {
            let lastDisplayChar = this.display.at(-1)
            if(this.display.match(/\d+$/) && !this.display.match(/\.\d+$/)){
                this.display += '.'
            }
        } else {
            if(((/\d/).test(btnVal) && (this.display === '0')) || this.display === 'Error'){
                this.display = ''
            }
            this.display += btnVal
        }
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