// clase padre
class moto {
    // constructor y parametros
    constructor (marca,cilindraje,placas){
        this.marca = marca;
        this.cilindraje = cilindraje;
        this.placas = placas;
    }

    adiccional (){
        return" Soy para 2 pasajeros y Tengo 2 Ruedas pai";
    }
}
// clase hijo
class Cuatrimoto extends moto{
    constructor(){
        super("Pulsar","200","GPW-48C");
        
    }

    pasajeros (){
        return" Soy para 4 pasajeros y tengo 4 ruedas pai.";
    }
    
}

const moto1 = new moto ("BMW","250","CQW-23A");
console.log(moto1)  ; console.log(moto1.adiccional());

const moto2 = new Cuatrimoto();
console.log(moto2); console.log(moto2.pasajeros())


////////////////////--------------------------//////////////////////////////////

// clase padre

class cantante {
    constructor (nombre,pais,años){
        this.nombre = nombre;
        this.pais = pais;
        this.años = años;
    }

    QueSon (){
        return " El cantante es un humano";
    }
}

// Clase Hijo
class generoMusical extends cantante{
    constructor(genero){
        super("El Ferxxo","Colombia","25");
        this.genero = genero;
    }

}

const cantante1 = new cantante ("Bad Bunny beibe", "P R", "28");
console.log(cantante1); console.log(cantante1.QueSon());

const cantante2 = new generoMusical ("Reggeton");
console.log(cantante2)


//////////////// ---------------------------------- //////////////////////////////

// objeto

const aviones = {
    propietario : "James",
    edad : 20,
    avionesQueTiene : {
        avion1 : "jett",
        avion2 : "carroVolador",
        avion3 : "MotoVoladora"
    }
}
// formar de imprimir el objeto.......
console.log(aviones.propietario + ' Tiene ' + aviones.edad + ' Años, ademaas tiene un : '+ aviones.avionesQueTiene.avion1);
console.log(aviones["avionesQueTiene"]["avion1"]);