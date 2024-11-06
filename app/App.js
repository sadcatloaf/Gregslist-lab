import { router } from './router-config.js';
import { HomeController } from './controllers/HomeController.js';
import { CarsController } from './controllers/CarsController.js';
import { HousesController } from './controllers/HousesController.js';
const USE_ROUTER = false

class App {

  HomeController = new HomeController()
  CarsController = new CarsController()
  HousesController = new HousesController()


  constructor() {
    if (USE_ROUTER) {
      this.router = router
      this.router.init(this)
    }
  }

}

const app = new App()
// @ts-ignore
window.app = app
