export interface Pensamento{
  // Interface é como se fosse um contrato que deve ser respeitado tanto pelo Frontend como pelo Backend
  // A interrogação, representa que o preenchimento daquele atributo é opcional
  id?: number,
  conteudo: string,
  autoria: string,
  modelo: string,
  favorito: boolean
}
