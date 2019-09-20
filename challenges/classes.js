// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMakerClass{
    constructor(attrs){
        this.length = attrs.length,
        this.width = attrs.width,
        this.height = attrs.height
    }
    volume(){
        return this.length * this.width * this.height;
    }
    surfaceArea(){
        return (2 * (this.length * this.width + this.length * this.height + this.width * this.height))
    }
}

class CubeMaker extends CuboidMakerClass{
    constructor(values){
        super(values);
    }
    volumeCube(){
        return Math.pow(this.length, 3);
    }
    surfaceAreaCube(){
        return (6 * (Math.pow(this.length, 2)));
    }
}

const cuboidTwo = new CuboidMakerClass({
    length: 4,
    width: 5,
    height: 5 
})

const cube = new CubeMaker({
    length: 3,
    width: 3,
    height: 3
})


// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboidTwo.volume()); // 100
console.log(cuboidTwo.surfaceArea()); // 130
console.log(cube.volumeCube()); // 27
console.log(cube.surfaceAreaCube()); // 54


/*
Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  
Find out the formulas for volume and surface area for cubes and create those methods 
using the dimension properties from CuboidMaker.  
Test your work by logging out your volume and surface area.
*/