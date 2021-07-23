function _new(func){
    let obj =Object.create(func.prototype)

    let result = func.apply(obj)
    if(result && (typeof (result) == "object" || typeof (result) == "function")){
        return result
    }
    return obj
}

// fn.call(thisArg,param1,param2)
// fn.apply(thisArg,[param1,param2])
// fn.bind(thisArg,param1,param2)
function fn(x1,x2){
    console.log(this,x1,x2)
}
let o1 = {x:200}
fn.call(20,20,30)
fn.apply('str',[50,60])
fn.bind(true,70,80)()
