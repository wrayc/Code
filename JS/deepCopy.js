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

function deepCopy2(target){
    if(Object.prototype.toString.call(target) === '[object Object]'){
        let dist;
        switch (Object.prototype.toString.call(target).slice(8,-1).toLowerCase()){
            case 'array':
                dist = [];
                break;
            case 'function':
                dist = function (){
                    return target.call(this,...arguments)
                };
                break;
            case 'regExp':
                dist = new RegExp(target.source,target.flags);
                break;
            case 'date':
                dist = new Date(target);
                break;
            default:
                dist = {};
                break;
        }
        for (let key in target){
            if (target.hasOwnProperty(key)){
                dist[key] = deepCopy(target[key])
            }

        }
        return dist;
    }else {
        return target;
    }
}

let obj5 = {
    name: 'WRay',
    age: 20,
    f:function (){
        console.log('22')
    },
    date:Date.now(),
    re: /\whello/gi
}
let obj6 = deepCopy2(obj5)
console.log(obj6)


