const cylinder = new Object();

cylinder["radius"] = '4';
cylinder["height"] = '8';

// cylinder = {
//     radius : '4',
//     height : '8'
// }

function volume(r,h){
    
    var area = (Math.PI)*(r*r)*(h);
    return area.toFixed(4);
}

console.log(volume(cylinder.radius, cylinder.height));