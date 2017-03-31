//products info input
//assume the products pricing and discount info is pre-defined
var volumeA = 4,
    volumeB = 2,
    volumeC = 1,
    volumeD = 1,
    priceAdis = 1.75,
    priceCdis = 1,
    disAVol = 4,
    disCVol = 6,
    priceA = 2,
    priceB = 12,
    priceC = 1.25,
    priceD = 0.15;

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

function scan(product) {
    var resultA,
        resultB,
        resultC,
        resultD,
        dividA = volumeA % disAVol,
        dividC = volumeC % disCVol;

    if ((volumeA || volumeB || volumeC || volumeD) < 0) {
        alert('the quantity of product can not be negative');
        volumeA = 0;
        volumeB = 0;
        volumeC = 0;
        volumeD = 0;
    } else if (product == 'A') {
       if (volumeA > disAVol) {
          resultA = priceAdis*(volumeA - dividA) + priceA*dividA;
       } else if (volumeA < disAVol) {
          resultA = volumeA*priceA;
       } else if (volumeA == disAVol) {
          resultA = volumeA*priceAdis;
       }
       return resultA;
    } else if (product == 'B') {
        return resultB = volumeB*priceB;
    } else if (product == 'C') {
       if (volumeC > disCVol) {
          resultC = priceCdis*(volumeC - dividC) + priceC*dividC;
       } else if (volumeC < disCVol) {
          resultC = volumeC*priceC;
       } else if (volumeC == disCVol) {
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

setPricing('A', priceA);
setPricing('B', priceB);
setPricing('C', priceC);
setPricing('D', priceD);

//test
console.log(total());