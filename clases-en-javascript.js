// En esta clase estamos viendo como funcionan las clases en JS

/* class car {

    trunk = "closed"
    speed = 0
    wheels = 4
    fuel = 100


    constructor(color) {
        this.color = color
    }

    constructor(conductor) {
        this.conductor = conductor
    }

    start() {
        console.log("El coche "+ this.color + "ha arrancado")
    }

    stop() {
        if(this.speed != 0){
            console.error("no podemos parar el coche. Está en marcha")
        } else {
            console.log("El coche ha parado")
        }  
    }

    speedUp(kms){
        speedUp = this.speed + kms
        console.log("Has acelerado el coche " + this.speed)
    }

    refuel() {
        console.log("Llenamos el tanque de gasolina")
        this.fuel = 100
    }
}

const car1 = new car(rojo)
const car2 = new car(verde)
const car3 = new car(azul)

console.log(car1.start);

*/
// Este es el código que nos ha pasado Jordi para estudiarlo ----
class car {

    wheels = 4
    speed = 0
    trunk = "closed"
    fuel = 100
    started = false

    constructor(color,pilot) {
        this.color = color
        this.pilot = pilot
    }

    start() {
        this.started = true
        console.log("🚗 El coche "+this.color+" conducido por "+this.pilot+" ha arrancado")
    }

    stop() {
        console.log("Intentamos parar el coche")
        if (this.speed != 0) {
            console.error("No podemos parar el coche porqué está en marcha",this.speed)
        } else {
            this.started = false
            console.log("🛑 Hemos parado el coche "+this.color)
        }
    }

    speedUp(kmsh) {
        console.log("💨 Aceleramos el coche "+this.color, kmsh)
        if(this.fuel<40) {
            console.error("No tienes suficiente gasolina")
        } else {
            this.speed = this.speed + kmsh
            this.fuel = this.fuel - 40
            if (this.fuel < 25) console.warn("Nos estamos quedando sin gasolina")
        }
    }

    brake(kmsh) {
        console.log("Reducimos la velocidad del coche "+this.color+" en (kms/h)",kmsh)
        this.speed = this.speed - kmsh
    }

    openTrunk() {
        console.log("Intentamos abrir el maletero del coche "+this.color)
        if (this.speed != 0) {
            console.log("No se puede abrir el maletero")
        } else {
            this.trunk = "open"
            console.log("Se ha abierto el maletero",this.trunk)
        }
        
    }

    refuel() {
        if (this.speed==0 && this.started == false) {
            console.log("⛽ Rellenamos el tanque de gasolina del coche "+this.color)
            this.fuel = 100
        } else {
            console.error("No puedes llenar la gasolina, debes parar el coche")
        }
        
    }

    status() {
        console.log("Fuel: ", this.fuel)
        console.log("Trunk: ", this.trunk)
        console.log("Wheels: ", this.wheels)
        console.log("Speed: ", this.speed)
        console.log("Color: ", this.color)
    }

}