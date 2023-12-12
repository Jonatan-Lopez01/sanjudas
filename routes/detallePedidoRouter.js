"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const detallePedidoController_1 = require("../controllers/detallePedidoController"); //checar el noombre del objeto de platillo controler, debe coincidir
const auth_1 = require("../middleware/auth");
class DetallePedidoRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.post('/insertarDetallePedido/', auth_1.validarToken, detallePedidoController_1.detallePedidoController.insertar_detalle_pedido);
        this.router.delete('/eliminarDetallePedido/:id', auth_1.validarToken, detallePedidoController_1.detallePedidoController.eliminar_detalle_pedido);
        this.router.put('/modificarDetallePedido/:id', auth_1.validarToken, detallePedidoController_1.detallePedidoController.modificar_detalle_pedido);
        this.router.get('/mostrarTodosLosDetalles/', auth_1.validarToken, detallePedidoController_1.detallePedidoController.mostrar_todos_detalles_pedidos);
    }
}
const detallePedidoRouter = new DetallePedidoRouter();
exports.default = detallePedidoRouter.router;
