"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const carritoCocinaController_1 = require("../controllers/carritoCocinaController");
const auth_1 = require("../middleware/auth");
class CarritoCocinaRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.post('/insertarPlatilloCocina/', auth_1.validarToken, carritoCocinaController_1.carritoCocinaController.insertar_platillo_cocina);
        this.router.delete('/eliminarPlatilloCocina/:id', auth_1.validarToken, carritoCocinaController_1.carritoCocinaController.eliminar_platillo_cocina);
        //this.router.put('/modificarPlatilloCocina/:id', carritoCocinaController.modificar_cocina_platillo);
        this.router.get('/mostrarPlatillosCocina/', auth_1.validarToken, carritoCocinaController_1.carritoCocinaController.mostrar_cocina_platillos);
    }
}
const carritoCocinaRouter = new CarritoCocinaRouter();
exports.default = carritoCocinaRouter.router;
