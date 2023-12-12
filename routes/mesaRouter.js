"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mesaController_1 = require("../controllers/mesaController");
const auth_1 = require("../middleware/auth");
class MesaRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.post('/insertarMesa/', auth_1.validarToken, mesaController_1.mesaController.insertar_mesa);
        this.router.delete('/eliminarMesa/:id', auth_1.validarToken, mesaController_1.mesaController.eliminar_mesa);
        this.router.put('/modificarMesa/:id', auth_1.validarToken, mesaController_1.mesaController.modificar_mesa);
        this.router.get('/mostrarTodasMesas/', auth_1.validarToken, mesaController_1.mesaController.mostrar_todas_mesas);
        this.router.get('/buscarUnaMesaId/:id', auth_1.validarToken, mesaController_1.mesaController.buscar_mesa_id);
        this.router.get('/buscarMesaNumero/:nombre', auth_1.validarToken, mesaController_1.mesaController.buscar_mesa_numero);
    }
}
const mesaRouter = new MesaRouter();
exports.default = mesaRouter.router;
