"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var baseDecorator_1 = require("./baseDecorator");
var ReintentosDecorator = /** @class */ (function (_super) {
    __extends(ReintentosDecorator, _super);
    function ReintentosDecorator(servicio) {
        return _super.call(this, servicio) || this;
    }
    ReintentosDecorator.prototype.enviarCorreo = function (correo) {
        for (var intentos = 0; intentos < 3; intentos++) {
            try {
                _super.prototype.enviarCorreo.call(this, correo);
                console.log('Envío exitoso');
                return;
            }
            catch (error) {
                console.error('Error en el envío, intento', intentos + 1);
            }
        }
        console.error('No se pudo enviar el correo después de 3 intentos.');
    };
    return ReintentosDecorator;
}(baseDecorator_1.default));
exports.default = ReintentosDecorator;
