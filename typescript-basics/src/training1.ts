
interface Point {
    x:number;
    y:number
}
function logPoint(p: Point){
    console.log('x=${p.x} and y=${p.y} ${p.dateOfBith.month}')
}

const force = {x: 46545, y:655655, z:424, name:"laxman", dateOfBirth:{
    month:10,
    year:2022,
    day:12
}};
logPoint(force);