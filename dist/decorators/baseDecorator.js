"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DecoratorBase = /** @class */ (function () {
    function DecoratorBase(servicio) {
        this.servicio = servicio;
    }
    DecoratorBase.prototype.enviarCorreo = function (correo) {
        this.servicio.enviarCorreo(correo);
    };
    DecoratorBase.prototype.listarCorreo = function (inicio, fin) {
        return this.servicio.listarCorreo(inicio, fin);
    };
    DecoratorBase.prototype.descargarCorreo = function (infoCorreo) {
        return this.servicio.descargarCorreo(infoCorreo);
    };
    return DecoratorBase;
}());
exports.default = DecoratorBase;
