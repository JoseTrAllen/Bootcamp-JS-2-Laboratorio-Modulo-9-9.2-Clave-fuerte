import { ValidacionClave } from "./model";

export const tieneMayusculasYMinusculas = (clave: string): ValidacionClave => {
  if(!clave){
    throw new Error("Algo ha salido mal");
  };
  if(/[A-Z]/.test(clave) && /[a-z]/.test(clave)){
    return {
      esValida: true,
    };
  } else {
    return {
      esValida: false,
      error: "La contraseña no contiene mayúsculas y minúsculas",
    };
  };
};

export const tieneNumeros = (clave: string): ValidacionClave => {
  if(!clave){
    throw new Error("Algo ha salido mal");
  };
  if(/[1-9]/.test(clave)){
    return {
      esValida: true,
    };
  } else {
    return {
      esValida: false,
      error: "La contraseña no contiene ningún número",
    };
  }
};

export const tieneCaracteresEspeciales = (clave: string): ValidacionClave => {
  if(!clave){
    throw new Error("Algo ha salido mal");
  };
  if(/[!@#$%^&*(),.?":{}|<>]/.test(clave)) {
    return {
      esValida: true,
    };
  } else {
    return {
      esValida: false,
      error: "La contraseña no contiene ningún caracter especial",
    }
  } 
};

export const tieneLongitudMinima = (clave: string): ValidacionClave => {
  if(!clave){
    throw new Error("Algo ha salido mal");
  };
  if(clave.length >= 8){
    return {
      esValida: true,
    };
  } else {
    return {
      esValida: false,
      error: "La contraseña debe tener mínimo 8 caracteres",
    };
  };
  
};

export const tieneNombreUsuario = (nombreUsuario: string, clave: string,): ValidacionClave => {
  if(!nombreUsuario || !clave){
    throw new Error("Algo ha salido mal");
  };
  if (nombreUsuario.toLocaleLowerCase().replace(/[^a-z]/g, '') !== clave.toLocaleLowerCase().replace(/[^a-z]/g, '')){
    return {
      esValida: true,
    };
  } else {
    return {
      esValida: false,
      error: "La contraseña contiene el nombre de usuario",
    };
  }
};

export const tienePalabrasComunes = (clave: string, commonPasswords: string[]): ValidacionClave => {
  if(!clave || !commonPasswords){
    throw new Error("Algo ha salido mal");
  };
  if(commonPasswords.some(palabra => palabra.toLocaleLowerCase().replace(/[^a-z]/g, '') === clave.toLocaleLowerCase().replace(/[^a-z]/g, ''))){
    return {
      esValida: false,
      error: "La contraseña contiene una palabra común. Debes cambiarla",
    };
  } else {
    return {
      esValida: true,
    };
  };
};

