"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const meseroController_1 = require("../controllers/meseroController");
const auth_1 = require("../middleware/auth");
class MeseroRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.post('/insertarMesero/', auth_1.validarToken, meseroController_1.meseroController.insertar_mesero);
        this.router.delete('/eliminarMesero/:id', auth_1.validarToken, meseroController_1.meseroController.eliminar_mesero);
        this.router.put('/modificarMesero/:id', auth_1.validarToken, meseroController_1.meseroController.modificar_mesero);
        this.router.get('/mostrarTodosMeseros/', auth_1.validarToken, meseroController_1.meseroController.mostrar_todos_meseros);
        this.router.get('/buscarUnMeseroId/:id', auth_1.validarToken, meseroController_1.meseroController.buscar_mesero_id);
        this.router.get('/buscarMeserosNombre/:nombre', auth_1.validarToken, meseroController_1.meseroController.buscar_mesero_nombre);
    }
}
const meseroRouter = new MeseroRouter();
exports.default = meseroRouter.router;
