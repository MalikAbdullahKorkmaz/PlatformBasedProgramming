const checkConditions = (weather) => {
    let h =  weather["humidity"]
    let t = weather["temperature"]
    let s = weather["winspeed"]

    if(t>= 20 && t <= 30){
        if(h > 50){
            if(s<15){
                result `Ideal Condition`
            }
        }
    }
    return `Not Ideal Conditition`
}
module.exports = {checkConditions}