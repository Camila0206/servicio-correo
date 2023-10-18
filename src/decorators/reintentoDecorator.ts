import { IServicioCorreo, Correo } from '../services/servicioCorreoInterface';
import DecoratorBase from './baseDecorator';

export default class ReintentosDecorator extends DecoratorBase {
  constructor(servicio: IServicioCorreo) {
    super(servicio);
  }

  enviarCorreo(correo: Correo): void {
    for (let intentos = 0; intentos < 3; intentos++) {
      try {
        super.enviarCorreo(correo);
        console.log('Envío exitoso');
        return;
      } catch (error) {
        console.error('Error en el envío, intento', intentos + 1);
      }
    }
    console.error('No se pudo enviar el correo después de 3 intentos.');
  }
}
