import { IServicioCorreo, Correo, InfoCorreo, Collection } from '../services/servicioCorreoInterface';

export default abstract class DecoratorBase implements IServicioCorreo {
  constructor(private servicio: IServicioCorreo) {}

  enviarCorreo(correo: Correo): void {
    this.servicio.enviarCorreo(correo);
  }

  listarCorreo(inicio: number, fin: number): Collection<InfoCorreo> {
    return this.servicio.listarCorreo(inicio, fin);
  }

  descargarCorreo(infoCorreo: InfoCorreo): Correo {
    return this.servicio.descargarCorreo(infoCorreo);
  }
}
