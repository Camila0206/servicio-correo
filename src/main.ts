import ServicioCorreo from './services/servicioCorreo';
import ReintentosDecorator from './decorators/reintentoDecorator';
import ThreadsDecorator from './decorators/threadsDecorator';
import LoggerDecorator from './decorators/loggerDecorator';
import CacheDecorator from './decorators/cacheDecorator';

const servicioBase = new ServicioCorreo();
const servicioConReintentos = new ReintentosDecorator(servicioBase);
const servicioConThreads = new ThreadsDecorator(servicioBase);
const servicioConLogger = new LoggerDecorator(servicioBase);
const servicioConCache = new CacheDecorator(servicioBase);

const correo = {};
servicioConReintentos.enviarCorreo(correo);
servicioConThreads.enviarCorreo(correo);
servicioConLogger.enviarCorreo(correo);
servicioConCache.enviarCorreo(correo);
