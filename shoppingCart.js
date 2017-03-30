//products info input
var volumeA = 4,
    volumeB = 2,
    volumeC = 1,
    volumeD = 1,
    priceAdis = 1.75,
    priceCdis = 1,
    disANum = 4,
    disCNum = 6,
    priceA,
    priceB,
    priceC,
    priceD;

function setPricing(item, itemPrice) {
    switch (item) {
        case 'A':
            priceA = itemPrice;
            break;
        case 'B':
            priceB = itemPrice;
            break;
        case 'C':
            priceC = itemPrice;
            break;
        case 'D':
            priceD = itemPrice;
            break;
    }
}

//TODO count the item quantity with a countVolume function
function scan(product) {
    var resultA,
        resultB,
        resultC,
        resultD,
        dividA = volumeA % disANum,
        dividC = volumeC % disCNum;

    if ((volumeA || volumeB || volumeC || volumeD) < 0) {
        alert('the quantity of product can not be negative');
        volumeA = 0;
        volumeB = 0;
        volumeC = 0;
        volumeD = 0;
    } else if (product == 'A') {
       if (volumeA > disANum) {
          resultA = priceAdis*(volumeA - dividA) + priceA*dividA;
          //with countA/volumeA, just need to return the price conditionally
       } else if (volumeA < disANum) {
          resultA = volumeA*priceA;
       } else if (volumeA == disANum) {
          resultA = volumeA*priceAdis;
       }
       return resultA;
    } else if (product == 'B') {
        return resultB = volumeB*priceB;
    } else if (product == 'C') {
       if (volumeC > disCNum) {
          resultC = priceCdis*(volumeC - dividC) + priceC*dividC;
       } else if (volumeC < disCNum) {
          resultC = volumeC*priceC;
       } else if (volumeC == disCNum) {
          resultC = volumeC*priceCdis;
       }
       return resultC;
    } else if (product == 'D') {
       return resultD = volumeD*priceD;
    }
}

function total() {
    return scan('A') + scan('B') + scan('C') + scan('D');
}

setPricing('A', 2);
setPricing('B', 12);
setPricing('C', 1.25);
setPricing('D', 0.15);

console.log(total());