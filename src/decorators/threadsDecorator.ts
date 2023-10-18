import { IServicioCorreo, Correo } from '../services/servicioCorreoInterface';
import DecoratorBase from './baseDecorator';

export default class ThreadsDecorator extends DecoratorBase {
  constructor(servicio: IServicioCorreo) {
    super(servicio);
  }

  enviarCorreo(correo: Correo): void {
    console.log('Enviando correo de forma segura para hilos');
    super.enviarCorreo(correo);
  }
}
