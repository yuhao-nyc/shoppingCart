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

var dividA = volumeA % 4,
    dividC = volumeC % 6;

if (volumeA >= 4) {
    var priceAdis = 7/4;
    resultA = priceAdis*(volumeA - dividA) + priceA*dividA;
}

if (volumeC >= 6) {
    var priceCdis = 6/6;
    resultC = priceCdis*(volumeC - dividC) + priceC*dividC;
}

//quantity of products input
volumeA = 4;
volumeB = 2;
volumeC = 1;
volumeD = 1;

total = resultA + resultB + resultC + resultD;

console.log(total.toFixed(2))