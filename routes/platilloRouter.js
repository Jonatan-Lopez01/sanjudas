"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const platilloController_1 = require("../controllers/platilloController"); //checar el noombre del objeto de platillo controler, debe coincidir
const auth_1 = require("../middleware/auth");
class PlatilloRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.post('/insertarPlatillo/', auth_1.validarToken, platilloController_1.platilloController.insertar_platillo);
        this.router.delete('/eliminarPlatillo/:id/', auth_1.validarToken, platilloController_1.platilloController.eliminar_platillo);
        this.router.put('/modificarPlatillo/:id/', auth_1.validarToken, platilloController_1.platilloController.modificar_platillo);
        this.router.get('/mostrarTodosPlatillos/', auth_1.validarToken, platilloController_1.platilloController.mostrar_todos_platillos);
        this.router.get('/buscarUnPlatilloId/:id/', auth_1.validarToken, platilloController_1.platilloController.buscar_platillo_id);
        this.router.get('/buscarPlatillosNombre/:nombre/', auth_1.validarToken, platilloController_1.platilloController.buscar_platillo_nombre);
    }
}
const platilloRouter = new PlatilloRouter();
exports.default = platilloRouter.router;
