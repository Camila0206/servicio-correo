export interface Correo {}
export interface InfoCorreo {}
export interface Collection<T> {}

export interface IServicioCorreo {
  enviarCorreo(correo: Correo): void;
  listarCorreo(inicio: number, fin: number): Collection<InfoCorreo>;
  descargarCorreo(infoCorreo: InfoCorreo): Correo;
}
