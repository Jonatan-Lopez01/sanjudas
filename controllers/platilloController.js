"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.platilloController = void 0;
const database_1 = __importDefault(require("../database")); //acceso a la base de datos, de cajon
class PlatilloController {
    insertar_platillo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const resp = yield database_1.default.query("INSERT INTO platillo set ?", [req.body]);
            res.json(resp);
        });
    }
    eliminar_platillo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const resp = yield database_1.default.query(`DELETE FROM platillo WHERE platillo_id = ${id}`);
            res.json(resp);
        });
    }
    buscar_platillo_id(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const respuesta = yield database_1.default.query('SELECT * FROM platillo WHERE platillo_id = ?', [id]);
            if (respuesta.length > 0) {
                res.json(respuesta[0]);
                return;
            }
            res.status(404).json({ 'mensaje': 'Platillo no encontrado por id' });
        });
    }
    buscar_platillo_nombre(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nombre } = req.params;
            const respuesta = yield database_1.default.query('SELECT * FROM platillo WHERE nombre LIKE ?', [`%${nombre}%`]);
            if (respuesta.length > 0) {
                res.json(respuesta);
                return;
            }
            res.status(404).json({ 'mensaje': 'Platillo con nombre= <' + `${nombre}` + '> no encontrado' });
        });
    }
    modificar_platillo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const resp = yield database_1.default.query("UPDATE platillo set ? WHERE platillo_id = ?", [req.body, id]);
            res.json(resp);
        });
    }
    mostrar_todos_platillos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const respuesta = yield database_1.default.query('SELECT * FROM platillo');
            res.json(respuesta);
        });
    }
}
exports.platilloController = new PlatilloController();
