"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const carritoBarController_1 = require("../controllers/carritoBarController"); //checar el noombre del objeto de platillo controler, debe coincidir
const auth_1 = require("../middleware/auth");
class CarritoBarRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.post('/insertarBebidaBar/', auth_1.validarToken, carritoBarController_1.carritoBarController.insertar_bebida_bar);
        this.router.delete('/eliminarBebidaBar/:id', auth_1.validarToken, carritoBarController_1.carritoBarController.eliminar_bebida_bar);
        //this.router.put('/modificarBebidaBar/:id', carritoBarController.modificar_bebida_bar);
        this.router.get('/mostrarBebidasBar/', auth_1.validarToken, carritoBarController_1.carritoBarController.mostrar_todas_bebidas_bar);
    }
}
const carritoBarRouter = new CarritoBarRouter();
exports.default = carritoBarRouter.router;
