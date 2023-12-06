import {makeAutoObservable} from "mobx";

class CarInfoStore {
    color = "black";
    wheels = "1";

    constructor() {
        makeAutoObservable(this)
    }

    setColor = (color) => {
        this.color = color;
    }

    setWheels = (wheels) => {
        this.wheels = wheels;
    }

    setCar = (color, wheels) => {
        this.setColor(color);
        this.setWheels(wheels);
    }

    getStringForImg = () => {
        return `car_${this.color}_${this.wheels}`
    }

}

export default new CarInfoStore();