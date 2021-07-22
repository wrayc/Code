function deepCopy(target){
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

let obj1 = {
    name: 'WRay',
    age: 20,
    f:function (){
        console.log('22')
    },
    date:Date.now(),
    re: /\whello/gi
}
let obj2 = deepCopy(obj1)
console.log(obj2)
console.log(obj2 === obj1)


