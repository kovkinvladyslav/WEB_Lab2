import Controller from './controller/AppController.js'
import View from './view/AppView.js'
import Model from './model/AppModel.js'

let appView = new View()
let appModel = new Model()
let controller = new Controller(appView, appModel)