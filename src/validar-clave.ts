import { ValidacionClave, commonPasswords } from "./model";
import { tieneCaracteresEspeciales, tieneLongitudMinima, tieneMayusculasYMinusculas, tieneNombreUsuario, tieneNumeros, tienePalabrasComunes } from "./valida-clave.helpers";


export const validarClave = (nombreUsuario: string, clave: string, commonPasswords: string[]): ValidacionClave => {
  if(!nombreUsuario || !clave || !commonPasswords){
    throw new Error("Algo ha salido mal");
  };

  let resultado: ValidacionClave;

  resultado = tieneNombreUsuario(nombreUsuario, clave)
  if(!resultado.esValida){
    return resultado;
  };
  resultado = tienePalabrasComunes(clave, commonPasswords)
  if(!resultado.esValida){
    return resultado;
  };
  resultado = tieneMayusculasYMinusculas(clave);
  if (!resultado.esValida){
    return resultado;
  };
  resultado = tieneNumeros(clave);
  if (!resultado.esValida){
    return resultado;
  };
  resultado = tieneCaracteresEspeciales(clave)
  if(!resultado.esValida){
    return resultado;
  };
  resultado = tieneLongitudMinima(clave)
  if(!resultado.esValida){
    return resultado;
  };
  
  return { esValida: true };
};

console.log(validarClave("Pepe", "casa.1234", commonPasswords));




