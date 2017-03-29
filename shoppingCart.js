var priceA = 2,
    priceB = 12,
    priceC = 1.25,
    priceD = 0.15,
    total,
    volumeA,
    volumeB,
    volumeC,
    volumeD,
    resultA = volumeA*priceA,
    resultB = volumeB*priceB,
    resultC = volumeC*priceC,
    resultD = volumeD*priceD;

if ((volumeA || volumeB || volumeC || volumeD) < 0) {
    alert('the quantity of product can not be negative');
    volumeA = 0;
    volumeB = 0;
    volumeC = 0;
    volumeD = 0;
}

//quantity of products input
//TODO count the item quantity with a countVolume function
volumeA = 4;
volumeB = 2;
volumeC = 1;
volumeD = 1;

var dividA = volumeA % 4,
    dividC = volumeC % 6;

function scan(product) {
    if (product == 'A') {
       if (volumeA >= 4) {
            var priceAdis = 7/4;
            resultA = priceAdis*(volumeA - dividA) + priceA*dividA;
       }
       return resultA
    }

    if (product == 'B') {
        return resultB
    }

    if (product == 'C') {
       if (volumeC >= 6) {
          var priceCdis = 6/6;
          resultC = priceCdis*(volumeC - dividC) + priceC*dividC;
       }
       return resultC;
    }

    if (product == 'D') {
       return resultD;
    }
}

function total() {
    return scan('A') + scan('B') + scan('C') + scan('D');
}

//TODO set prices
function setPricing(item, itemPrice) {

}

setPricing('A', 10);

console.log(total())