import { commonPasswords } from "./model";
import { validarClave } from "./validar-clave";

describe("validarClave", () => {
  it("Debería devolver undefined", () => {
    //Arrange
    const nombreUsuario: any = undefined;
    const clave: any = undefined;
    const commonPasswords: any = undefined;
    //Act
    const resultado = () => validarClave(nombreUsuario, clave, commonPasswords);
    //Assert
    expect(resultado).toThrowError("Algo ha salido mal");
  });
  it("Debería devolver null", () => {
    //Arrange
    const nombreUsuario: any = null;
    const clave: any = null;
    const commonPasswords: any = null;
    //Act
    const resultado = () => validarClave(nombreUsuario, clave, commonPasswords);
    //Assert
    expect(resultado).toThrowError("Algo ha salido mal");
  });
  it("Debería devolver ''", () => {
    //Arrange
    const nombreUsuario: any = "";
    const clave: any = "";
    const commonPasswords: any = "";
    //Act
    const resultado = () => validarClave(nombreUsuario, clave, commonPasswords);
    //Assert
    expect(resultado).toThrowError("Algo ha salido mal");
  });


  it("Debería devolver que la contraseña es correcta", () => {
    // Arrange
    //Modificando nombreUsuario y/o clave se pueden hacer todos los test de error
    const nombreUsuario = "Pepe";
    const clave = "Mustang!1234";
    const clavesComunes = commonPasswords;
    // Act
    const resultado = validarClave(nombreUsuario, clave, clavesComunes);
    // Assert
    expect(resultado).toEqual({
      esValida: true 
    });
  });
});