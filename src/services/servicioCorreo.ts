import { IServicioCorreo } from '../services/servicioCorreoInterface';

export interface Correo { }
export interface InfoCorreo { }
export interface Collection<T> { }

export default class ServicioCorreo implements IServicioCorreo {
  enviarCorreo(correo: Correo): void {
    console.log('Enviando correo');
  }

  listarCorreo(inicio: number, fin: number): Collection<InfoCorreo> {
    console.log('Listando correos');
    return [];
  }

  descargarCorreo(infoCorreo: InfoCorreo): Correo {
    console.log('Descargando correo');
    return {};
  }
}
