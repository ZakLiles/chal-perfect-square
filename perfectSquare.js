const perfectSquare = num => {
    let sqrtNum = Math.sqrt(num)
    if(sqrtNum % 1 === 0){
        return Math.pow(sqrtNum+1,2)
    } else {
        return -1
    }
}

console.log(perfectSquare(9))
console.log(perfectSquare(289))
console.log(perfectSquare(3000))