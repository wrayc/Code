function deepCopy(target) {
    if (target instanceof Object) {
        let dist;
        if (target instanceof Array) {
            dist = [];
        } else if(target instanceof Function){
            dist = function (){
                return target.call(this,...arguments)
            }
        }else if(target instanceof RegExp){
            dist = new RegExp(target.source,target.flags)
        }else if(target instanceof Date){
            dist = new Date(target)
        }else {
            dist = {}
        }
        for (let key in target) {
            if (target.hasOwnProperty(key)) {
                dist[key] = deepCopy(target[key])
            }
        }
        return dist
    } else {
        return target
    }
}

let obj1 = 20;
let obj2 = {
    name: 'WRay',
    child: {
        name: 'Gtaa'
    }
}
let obj3 = [[11, 22], [22, 33]]
console.log(deepCopy(obj1))
console.log(deepCopy(obj2))
console.log(deepCopy(obj3))
