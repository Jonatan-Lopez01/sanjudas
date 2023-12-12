"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const bebidaController_1 = require("../controllers/bebidaController"); //checar el noombre del objeto de platillo controler, debe coincidir
const auth_1 = require("../middleware/auth");
class BebidaRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.post('/insertarBebida/', auth_1.validarToken, bebidaController_1.bebidaController.insertar_bebida);
        this.router.delete('/eliminarBebida/:id', auth_1.validarToken, bebidaController_1.bebidaController.eliminar_bebida);
        this.router.put('/modificarBebida/:id', auth_1.validarToken, bebidaController_1.bebidaController.modificar_bebida);
        this.router.get('/mostrarTodasBebidas/', auth_1.validarToken, bebidaController_1.bebidaController.mostrar_todas_bebidas);
        this.router.get('/buscarUnaBebidaId/:id', auth_1.validarToken, bebidaController_1.bebidaController.buscar_bebida_id);
        this.router.get('/buscarBebidasNombre/:nombre', auth_1.validarToken, bebidaController_1.bebidaController.buscar_bebida_nombre);
    }
}
const bebidaRouter = new BebidaRouter();
exports.default = bebidaRouter.router;
