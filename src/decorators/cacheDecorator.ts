import { IServicioCorreo, Correo } from '../services/servicioCorreoInterface';
import DecoratorBase from './baseDecorator';

export default class CacheDecorator extends DecoratorBase {
  constructor(servicio: IServicioCorreo) {
    super(servicio);
  }

  enviarCorreo(correo: Correo): void {
    // Lógica de caché para optimización de rendimiento
    console.log('Usando caché para el envío de correo');
    super.enviarCorreo(correo);
  }
}
