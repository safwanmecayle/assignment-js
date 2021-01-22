
// Q-1 kilometreToMetre starts

    function kilometreToMetre(kilometre) {

        var metre = kilometre * 1000;    //  1 kilometre=1000 metre
        return metre;
    }
    // var outputResult = kilometreToMetre(1);
    // console.log(outputResult);

    // Q-1 kilometreToMetre ends
    // Q-2 budgetCalculator starts

    function budgetCalulator(watch, phone, laptop) {
        var totalCost = (50 * watch) + (100 * phone) + (500 * laptop);
        return totalCost;
    }
// var totalPrice =budgetCalulator(1,1,1);
// console.log(totalPrice);

// Q-2 budgetCalculator ends
// Q-3 hotelCost starts


function hotelCost(hotelDays) {
    var hotelStayCost = 0;
    if (hotelDays <= 10) {
        hotelStayCost = hotelDays * 100;
    }
    else if (hotelDays <= 20) {
        var first10days = 10 * 100;
        var remaininDays = hotelDays - 10;
        var second10days = remaininDays * 80;
        hotelStayCost = first10days + second10days;
    } else {
        var first10days = 10 * 100;
        var second10days = 10 * 80;
        var remaininDays = hotelDays - 20;
        var third10days = remaininDays * 50;
        hotelStayCost = first10days + second10days + third10days;
    }
    return hotelStayCost;
}
    // var count = hotelCost(20);
    // console.log(count);

/** Q-3 ends here */
    // Q-4 starts here

function megaFriend(allNames){
 var maxword = allNames[0];

    for (var i= 0; i < allNames.length; i++){
        var element = allNames[i];
        if(element.length > maxword.length){
            maxword = element;
        }
    }
     return maxword;
}
var largeWord = megaFriend(["habu","shuvo","kabila","nehal","arif"]);
console.log(largeWord);

// Q-4 starts here