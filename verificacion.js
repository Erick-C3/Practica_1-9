/*
    credenciales verificadas de un usuario
        - usuario registrado
        - contraseña registrada
    
    credenciales ingresadas por algun usuario
        - usuario
        - contraseña

    requisitos
        - verificar si las credenciales usadas
            son validas
        - mostrar resultado visual para el usuario

*/

const USUARIO_REGISTRADO = "Erick";
const CONTRASENIA_REGISTRADA = "123";
const IMG_INGRESO_ERROR = "https://c.tenor.com/c6S6vcG7724AAAAS/quien-te-conoce-desconocido.gif";
const IMG_INGRESO_CORRECTO = "http://pa1.narvii.com/7519/625df64cc41325cb28abd3003c16ebf9a0b0d579r1-587-250_00.gif";

const CANT_INTENTOS_DEF = 0;

let usuarioIngresado = "usuario por def";
let contraseniaIngresada = "contraseña por def";
let cantIntentos = CANT_INTENTOS_DEF;

/**
 * Verifica el login
 */
function verificacion(){
    usuarioIngresado = document.querySelector('#usuario_ingresado').value;
    contraseniaIngresada = document.querySelector('#contrasenia_ingresada').value;

    if( (usuarioIngresado == USUARIO_REGISTRADO) && (contraseniaIngresada == CONTRASENIA_REGISTRADA)){
        document.querySelector('#mensaje_resultado').innerHTML = `
            <h1> Usuario ${usuarioIngresado} bienvenido! </h1>
            <img src=${IMG_INGRESO_CORRECTO} alt="imagen de error ingreso">
            
        `;
        cantIntentos = CANT_INTENTOS_DEF;
    }else{
        cantIntentos++;
        document.querySelector('#mensaje_resultado').innerHTML = `
            <h1> Usuario y/o contraseña incorrectos! </h1>
            <img src=${IMG_INGRESO_ERROR} alt="imagen de error ingreso">
            <h4> intentos: ${cantIntentos} </h4>
        `;
    }
}