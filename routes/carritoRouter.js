"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const carritoController_1 = require("../controllers/carritoController"); //checar el noombre del objeto de platillo controler, debe coincidir
const auth_1 = require("../middleware/auth");
class CarritoRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        //este servicio lo ocupan los meseros
        this.router.post('/insertarAlCarrito/', auth_1.validarToken, carritoController_1.carritoController.insertar_al_carrito);
        //puede no ocuparse este servicio
        this.router.delete('/eliminarDelCarrito/:id', auth_1.validarToken, carritoController_1.carritoController.eliminar_del_carrito);
        //podria usarse cuando el administrador le haga un descuento al precio de un producto a un cliente
        this.router.put('/modificarDelCarrito/:id', auth_1.validarToken, carritoController_1.carritoController.modificar_del_carrito);
        this.router.get('/mostrarTodosProductosCarrito/', auth_1.validarToken, carritoController_1.carritoController.mostrar_todos_productos_del_carrito);
        /*SERVICIOS RELACIONADOS A LA INSERCCION DE PRODUCTOS POR LOS MESEROS */
        /*SERVICIOS RELACIONADOS AL COBRO DEL ADMINISTRADOR A LAS MESAS*/
        //Mostrar todos los productos que se han levantado dependiendo de el numeroMesa
        this.router.get('/mostrarProductosCarrito/:numeroMesa', auth_1.validarToken, carritoController_1.carritoController.mostrar_productos_carrito_numeroMesa);
        //eliminar todos los productos que se han levantado dependiendo el numero de mesa, ya que se hizo el cobro
        this.router.delete('/eliminarProductosDelCarrito/:numeroMesa', auth_1.validarToken, carritoController_1.carritoController.eliminar_productos_carrito_numeroMesa);
    }
}
const carritoRouter = new CarritoRouter();
exports.default = carritoRouter.router;
