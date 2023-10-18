"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var servicioCorreo_1 = require("./services/servicioCorreo");
var reintentoDecorator_1 = require("./decorators/reintentoDecorator");
var threadsDecorator_1 = require("./decorators/threadsDecorator");
var loggerDecorator_1 = require("./decorators/loggerDecorator");
var cacheDecorator_1 = require("./decorators/cacheDecorator");
var servicioBase = new servicioCorreo_1.default();
var servicioConReintentos = new reintentoDecorator_1.default(servicioBase);
var servicioConThreads = new threadsDecorator_1.default(servicioBase);
var servicioConLogger = new loggerDecorator_1.default(servicioBase);
var servicioConCache = new cacheDecorator_1.default(servicioBase);
var correo = {};
servicioConReintentos.enviarCorreo(correo);
servicioConThreads.enviarCorreo(correo);
servicioConLogger.enviarCorreo(correo);
servicioConCache.enviarCorreo(correo);
