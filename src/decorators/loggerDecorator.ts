import { IServicioCorreo, Correo } from '../services/servicioCorreoInterface';
import DecoratorBase from './baseDecorator';

export default class LoggerDecorator extends DecoratorBase {
  constructor(servicio: IServicioCorreo) {
    super(servicio);
  }

  enviarCorreo(correo: Correo): void {
    // Lógica de registro de eventos
    console.log('Registrando evento de envío de correo');
    super.enviarCorreo(correo);
  }
}
