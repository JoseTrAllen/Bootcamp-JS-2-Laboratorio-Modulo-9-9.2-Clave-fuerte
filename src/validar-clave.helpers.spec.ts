import { commonPasswords } from "./model";
import { tieneCaracteresEspeciales, tieneLongitudMinima, tieneMayusculasYMinusculas, tieneNombreUsuario, tieneNumeros, tienePalabrasComunes } from "./valida-clave.helpers";

describe("tieneMayusculasYMinusculas", () => {
  it("Debería devolver undefined", () => {
    //Arrange
    const clave: any = undefined;
    //Act
    const resultado = () => tieneMayusculasYMinusculas(clave);
    //Assert
    expect(resultado).toThrowError("Algo ha salido mal");
  });
  it("Debería devolver null", () => {
    //Arrange
    const clave: any = null;
    //Act
    const resultado = () => tieneMayusculasYMinusculas(clave);
    //Assert
    expect(resultado).toThrowError("Algo ha salido mal");
  });
  it("Debería devolver ''", () => {
    //Arrange
    const clave: any = "";
    //Act
    const resultado = () => tieneMayusculasYMinusculas(clave);
    //Assert
    expect(resultado).toThrowError("Algo ha salido mal");
  });

  it("Debería mostar que hay minúsculas y mayúsculas en la clave", () => {
    //Arrange
    const clave = "Casa";
    //Act
    const resultado = tieneMayusculasYMinusculas(clave);
    //Assert
    expect(resultado).toEqual({
      esValida: true,
    });
  });
  it("Debería mostrar que no hay minúsculas y mayúsculas en la clave y un error", () => {
    //Arrange
    const clave = "casa";
    //Act
    const resultado = tieneMayusculasYMinusculas(clave);
    //Assert
    expect(resultado).toEqual({
      esValida: false,
      error: "La contraseña no contiene mayúsculas y minúsculas"
    });
  })
});

describe("tieneNumeros", () => {
  it("Debería devolver undefined", () => {
    //Arrange
    const clave: any = undefined;
    //Act
    const resultado = () => tieneNumeros(clave);
    //Assert
    expect(resultado).toThrowError("Algo ha salido mal");
  });
  it("Debería devolver null", () => {
    //Arrange
    const clave: any = null;
    //Act
    const resultado = () => tieneNumeros(clave);
    //Assert
    expect(resultado).toThrowError("Algo ha salido mal");
  });
  it("Debería devolver ''", () => {
    //Arrange
    const clave: any = "";
    //Act
    const resultado = () => tieneNumeros(clave);
    //Assert
    expect(resultado).toThrowError("Algo ha salido mal");
  });
  it("Debería mostrar que hay números en la clave", () => {
    //Arrange
    const clave = "Casa1234";
    //Act
    const resultado = tieneNumeros(clave);
    //Assert
    expect(resultado).toEqual({
      esValida: true
    })
  });
  it("Debería mostrar que no hay números en la clave y un error", () => {
    //Arrange
    const clave = "Casa";
    //Act
    const resultado = tieneNumeros(clave);
    //Assert
    expect(resultado).toEqual({
      esValida: false,
      error: "La contraseña no contiene ningún número"
    })
  });
});

describe("tieneCaracteresEspeciales", () => {
  it("Debería devolver undefined", () => {
    //Arrange
    const clave: any = undefined;
    //Act
    const resultado = () => tieneCaracteresEspeciales(clave);
    //Assert
    expect(resultado).toThrowError("Algo ha salido mal");
  });
  it("Debería devolver null", () => {
    //Arrange
    const clave: any = null;
    //Act
    const resultado = () => tieneCaracteresEspeciales(clave);
    //Assert
    expect(resultado).toThrowError("Algo ha salido mal");
  });
  it("Debería devolver ''", () => {
    //Arrange
    const clave: any = "";
    //Act
    const resultado = () => tieneCaracteresEspeciales(clave);
    //Assert
    expect(resultado).toThrowError("Algo ha salido mal");
  });
  it("Debería mostrar que tiene caracteres especiales", () => {
    //Arrange
    const clave = "Casa.1234!#"
    //Act
    const resultado = tieneCaracteresEspeciales(clave);
    //Assert
    expect(resultado).toEqual({
      esValida: true
    });
  });
  it("Debería mostrar que no tiene caracteres especiales y un error", () => {
    //Arrange
    const clave = "Casa"
    //Act
    const resultado = tieneCaracteresEspeciales(clave);
    //Assert
    expect(resultado).toEqual({
      esValida: false,
      error: "La contraseña no contiene ningún caracter especial"
    });
  });
});

describe("tieneLongitudMinima", () => {
  it("Debería devolver undefined", () => {
    //Arrange
    const clave: any = undefined;
    //Act
    const resultado = () => tieneLongitudMinima(clave);
    //Assert
    expect(resultado).toThrowError("Algo ha salido mal");
  });
  it("Debería devolver null", () => {
    //Arrange
    const clave: any = null;
    //Act
    const resultado = () => tieneLongitudMinima(clave);
    //Assert
    expect(resultado).toThrowError("Algo ha salido mal");
  });
  it("Debería devolver ''", () => {
    //Arrange
    const clave: any = "";
    //Act
    const resultado = () => tieneLongitudMinima(clave);
    //Assert
    expect(resultado).toThrowError("Algo ha salido mal");
  });
  it("Debería devolver que la contraseña tiene 8 caracteres", () => {
    //Arrange
    const clave = "Casa.1234!";
    //Act
    const resultado = tieneLongitudMinima(clave);
    //Assert
    expect(resultado).toEqual({
      esValida: true,
    });
  });
  it("Debería devolver que la contraseña no tiene 8 caracteres y un error", () => {
    //Arrange
    const clave = "Casa";
    //Act
    const resultado = tieneLongitudMinima(clave);
    //Assert
    expect(resultado).toEqual({
      esValida: false,
      error: "La contraseña debe tener mínimo 8 caracteres"
    });
  });
});

describe("tieneNombreUsuario", () => {
  it("Debería devolver undefined", () => {
    //Arrange
    const clave: any = undefined;
    const nombreUsuario: any = undefined;
    //Act
    const resultado = () => tieneNombreUsuario(clave, nombreUsuario);
    //Assert
    expect(resultado).toThrowError("Algo ha salido mal");
  });
  it("Debería devolver null", () => {
    //Arrange
    const clave: any = null;
    const nombreUsuario: any = null;
    //Act
    const resultado = () => tieneNombreUsuario(clave, nombreUsuario);
    //Assert
    expect(resultado).toThrowError("Algo ha salido mal");
  });
  it("Debería devolver ''", () => {
    //Arrange
    const clave: any = "";
    const nombreUsuario: any = "";
    //Act
    const resultado = () => tieneNombreUsuario(clave, nombreUsuario);
    //Assert
    expect(resultado).toThrowError("Algo ha salido mal");
  });
  it("Debería devolver que el nombre de user no es el mismo que la contraseña", () => {
    //Arrange
    const nombreUsuario = "Pepe";
    const clave = "Casa.1234!";
    //Act
    const resultado = tieneNombreUsuario(nombreUsuario, clave);
    //Assert
    expect(resultado).toEqual({
      esValida: true,
    });
  });
  it("Debería devolver que el nombre de user es el mismo que la contraseña y un error", () => {
    //Arrange
    const nombreUsuario = "Pepe";
    const clave = "Pepe";
    //Act
    const resultado = tieneNombreUsuario(nombreUsuario, clave);
    //Assert
    expect(resultado).toEqual({
      esValida: false,
      error: "La contraseña contiene el nombre de usuario",
    });
  });
});

describe("tienePalabrasComunes", () => {
  it("Debería devolver undefined", () => {
    //Arrange
    const clave: any = undefined;
    const clavesComunes: any = undefined;
    //Act
    const resultado = () => tienePalabrasComunes(clave, clavesComunes);
    //Assert
    expect(resultado).toThrowError("Algo ha salido mal");
  });
  it("Debería devolver null", () => {
    //Arrange
    const clave: any = null;
    const clavesComunes: any = null;
    //Act
    const resultado = () => tienePalabrasComunes(clave, clavesComunes);
    //Assert
    expect(resultado).toThrowError("Algo ha salido mal");
  });
  it("Debería devolver ''", () => {
    //Arrange
    const clave: any = "";
    const clavesComunes: any = "";
    //Act
    const resultado = () => tienePalabrasComunes(clave, clavesComunes);
    //Assert
    expect(resultado).toThrowError("Algo ha salido mal");
  });
  it("Debería devolver que la conraseña no forma parte del array de palabrasnpm run test comunes", () => {
    //Arrange
    const clave = "Casa";
    const clavesComunes = commonPasswords;
    //Act
    const resultado = tienePalabrasComunes(clave, clavesComunes);
    //Assert
    expect(resultado).toEqual({
      esValida: true,
    });
  });
  it("Debería devolver que la conraseña forma parte del array de palabras comunes", () => {
    //Arrange
    const clave = "mustang";
    const clavesComunes = commonPasswords;
    //Act
    const resultado = tienePalabrasComunes(clave, clavesComunes);
    //Assert
    expect(resultado).toEqual({
      esValida: false,
      error: "La contraseña contiene una palabra común. Debes cambiarla",
    });
  });
})