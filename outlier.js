


let array1 = [2, 4, 0, 100, 4, 11, 2602, 36]
let array2 = [160, 3, 1719, 19, 11, 13, -21]


let checkOutlier = (arr) => {
    let evens = []
    let odds = []
    for (i=0; i < arr.length; i++){
        if (arr[i] % 2 === 0){
            evens.push(arr[i])
        } else if (arr[i] % 2 !== 0){
            odds.push(arr[i])
        }
    }
    if (odds.length > evens.length){
        return(evens)
    } else if (evens.length > odds.length){
        return(odds)
    }
}

console.log(checkOutlier(array1))
console.log(checkOutlier(array2))