"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ServicioCorreo = /** @class */ (function () {
    function ServicioCorreo() {
    }
    ServicioCorreo.prototype.enviarCorreo = function (correo) {
        console.log('Enviando correo');
    };
    ServicioCorreo.prototype.listarCorreo = function (inicio, fin) {
        console.log('Listando correos');
        return [];
    };
    ServicioCorreo.prototype.descargarCorreo = function (infoCorreo) {
        console.log('Descargando correo');
        return {};
    };
    return ServicioCorreo;
}());
exports.default = ServicioCorreo;
