
//objetos

const persona ={
    primerNombre: 'juan',
    apellido:'perez',
    edad: 22,
    documetnoIdentidad: 5612,
    
    caracteristicas: {
        colorCabello: "rojo",
        etnicidad: "Indoeuropeo",
        idiomaMaterno: "Español",
    },
    //metodo
    saludar:function(){
        return "Hola " +this.primerNombre +" "+ this.apellido
    }
}

//Accediendo al metodo
console.log(persona.saludar());
//acceder a una propiedad forma 1
console.log(persona.apellido)
//acceder a propiedad. segunda forma 
console.log(persona['primerNombre'])




//clases

class persona_1 {
    constructor(primerNombreusuario,apellidoUsuario){
        this.primerNombreusuario = primerNombreusuario;
        this.apellidoUsuario = apellidoUsuario;
    }
    saludarPersona(){
        return "Hola" +""+ this.primerNombreusuario +" " + this.apellidoUsuario
    }

    //voy a usar la clase para conntruir  una persona 

     
}

let personas=new persona_1('mario','casas');
personas.primerNombreusuario='Carlos';
personas.apellidoUsuario=' Cantor';

console.log(personas.saludarPersona())


//Herencia 
class animales{
 constructor (nombre, edad, sonido){
    this.nombre = nombre;
    this.sonido = sonido;
    this.edad= edad;
 }
 //metodo
 sonido(){
    return this.nombre +" tiene el siguiente sonido: "+ this.sonido

 }
}




class gatos extends animales{
    // constructor de la clase gatos 
    constructor(nombre,edad,sonido,cazador){
        super(nombre,edad,sonido)
        this.cazador = cazador; 
    }

    //metodo 
    maullar(){
        return "El gato puede hacer el sonido " + this.sonido
    }


}

//Crear un animal, especificamente un gato

let gato = new gatos('don gato',9,'maullador',true )
console.log(gato)




//--------------------------------------------Tarea-------------------

const hospital={
    usuario: "Juan",
    hospital:"pablo tobon",
    fecha:"12 enero",
    horas:4,
    dias_Trabajados:214,
    pago:50000,



    trabajo: {
       ropa:"Azul",
       edad:31,
        ciudad:"medellin",
    },

informe:function(){
    return "Nombre de trabajador: "+this.usuario+" horas trabajadas: "+this.horas + "pago por hora: "+ this.pago
},

datos:function(){
    pago_total=this.horas * this.pago;
    return "El pago total de las horas trabajadas es de: "+ pago_total
}
}

console.log(hospital.informe());
//acceder a una propiedad forma 1
console.log(hospital.usuario)


console.log(hospital.datos());
//acceder a una propiedad forma 1




class tecnologia{
    constructor(computador, maus, teclado,celular,tablet,reloj,usb){
        this.computador=computador;
        this.maus=maus;
        this.teclado=teclado;
        this.celular=celular;
        this.tablet=tablet;
        this.reloj=reloj;
        this.usb=usb;
    }

    pc(){
        return "Estos son los mas vendidos: " + this.computador + this.celular + this.tablet
    }
   

}

class objetos extends tecnologia{
    constructor (computador, maus, teclado,celular,tablet,reloj,usb,ventas){
        super(computador, maus, teclado,celular,tablet,reloj,usb)
        this.ventas=ventas;
    }

    compra(celular){
        this.celular.push(celular);

    }
   

}

let obj = new tecnologia('lenovo','prisma','samsung','itgm','horosa','sasd',3205000) 

const op1 = new objetos('lenovo','prisma','samsung','itgm','horosa','sasd',3205000) 
const o1s = new objetos('Asus','color','Iphone','mismag','magna','seas',320) 
console.log(objetos.compra(obj))

const Datosobjetos =(objetos)=>{
    tecnologia.comprar1(prompt('Agregar celular '))
}