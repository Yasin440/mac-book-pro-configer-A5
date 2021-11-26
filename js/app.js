// select memory which you inneed...
function getMemoryBtn(selectMemory) {
    const memoryCost = document.getElementById('memory-cost-total');
    const memoryCosttext = memoryCost.innerText;
    const memoryCostValue = parseFloat(memoryCosttext);
    if (selectMemory == '8gb') {
        memoryCost.innerText = 0;

    }
    else {
        memoryCost.innerText = 180;
    }
}

document.getElementById('8gb-memory').addEventListener('click', function () {
    getMemoryBtn('8gb');
})
document.getElementById('16gb-memory').addEventListener('click', function () {
    getMemoryBtn('16gb');
})
// select Storage which you inneed....
function getStorageBtn(selectStorage) {
    const storageCost = document.getElementById('storage-cost-total');
    const storageCostText = storageCost.innerText;
    if (selectStorage == '256gb') {
        storageCost.innerText = 0;
    }
    else if (selectStorage == '512gb') {
        storageCost.innerText = 100;
    }
    else if (selectStorage == '1tb') {
        storageCost.innerText = 180;
    }
    return;
}
document.getElementById('256gb-storage').addEventListener('click', function () {
    getStorageBtn('256gb');
})
document.getElementById('512gb-storage').addEventListener('click', function () {
    getStorageBtn('512gb');
})
document.getElementById('1tb-storage').addEventListener('click', function () {
    getStorageBtn('1tb');
})
// select Delivery method....
function getDeliveryBtn(selectDeliveryMethod) {
    const deliveryCharge = document.getElementById('delivery-cost-total');
    if (selectDeliveryMethod == 'free') {
        deliveryCharge.innerText = 0;
    }
    else if (selectDeliveryMethod == 'charge') {
        deliveryCharge.innerText = 20;
    }
    return;
}
document.getElementById('free-delivery').addEventListener('click', function () {
    getDeliveryBtn('free');
})
document.getElementById('charge-delivery').addEventListener('click', function () {
    getDeliveryBtn('charge');
})

//total price with out promo code....

function subTotal() {
    const totalwithPrimary = document.getElementById('subTotal-cost-total').innerText;
    const totalwithPrimaryAmmount = parseFloat(totalwithPrimary);
    const totalAfterPromo = totalwithPrimaryAmmount + updateCost('memory') + updateCost('storage') + updateCost('delivery');
    console.log(totalAfterPromo);
}

// check promo code..

function checkCode() {
    const subTotal = document.getElementById('subTotal-cost-total');
    const total = document.getElementById('total-with-code');
    const codeInputValue = document.getElementById('input-code').value;
    if (codeInputValue == 'stevekaku') {
        total.innerText = subTotal.innerText - (subTotal.innerText * .2);
    }
    else {
        alert('Wrong Promo Code..')
    }
}
document.getElementById('apply-code').addEventListener("click", function () {
    checkCode();
});













//////my assignment 5 Js simple algorithm
/*...Problem No: 01 (Convert Seer To Mon with function)...*/


// function seerToMon(seer) {
//     // Warning: use number..
//     if (typeof seer != 'number') {
//     return 'error: Please use a number..!'
//     }
//     // Warning: use +ve number..
//     else if (seer < 0) {
//     return 'error: Please use a +ve number..!'
//     }
//     //1 mon = 40 seer..
//     const mon = seer / 40;
//     return mon;
//     }
//     const convertedToMon = seerToMon(200);
//     console.log(convertedToMon);
//     /*...Problem No: 02 (Get total sales price with function)...*/
//     function totalSales(shirtQuantity, pantQuantity, shoesQuantity) {
//     const totalQuantity = shirtQuantity + pantQuantity + shoesQuantity;
//     // Warning: use +ve quantity number..
//     if (shirtQuantity < 0 || pantQuantity < 0 || shoesQuantity < 0) {
//     return 'error: Product quantity can not negative..!';
//     }
//     // Warning: use integer quantity number..
//     else if (totalQuantity % 1 != 0) {
//     return 'error: Product quantity must ba an integer number..!';
//     }
//     const shirtPrice = 100;
//     const pantPrice = 200;
//     const shoesPrice = 500;
//     // inTotalSun...
//     const totalPrice = shirtPrice * shirtQuantity + pantPrice * pantQuantity + shoesPrice * shoesQuantity;
//     return totalPrice;
//     }
//     const totalBill = totalSales(2, 2, 2);
//     console.log(totalBill);
//     /*...Problem No: 03 (Calculate total delivery cost with function)...*/
//     function deliveryCost(deliveryQuantity) {
//     const deliveryCost1To100 = 100;
//     const deliveryCost110To200 = 80;
//     const deliveryCost201ToUp = 50;
//     // Warning: use +ve number..
//     if (deliveryQuantity <= 0) {
//     return 'error: You can not delivery less than one product..!'
//     }
//     // Warning: use integer quantity number..
//     else if (deliveryQuantity % 1 != 0) {
//     return 'error: Delivery quantity must ba an integer number..!';
//     }
//     else if (deliveryQuantity <= 100) {
//     // first 100 deliverycost inTotal..
//     const totalDeliveryCost = deliveryQuantity * deliveryCost1To100;
//     return totalDeliveryCost;
//     }
//     else if (deliveryQuantity <= 200) {
//     // first 100 deliverycost..
//     const totalDeliveryCost1To100 = 100 * deliveryCost1To100;
//     // 101 to 200 deliverycost..
//     const totalDeliveryCost110To200 = (deliveryQuantity - 100) * deliveryCost110To200;
//     // inTotal..
//     const totalDeliveryCost = totalDeliveryCost1To100 + totalDeliveryCost110To200;
//     return totalDeliveryCost;
//     }
//     else {
//     // first 100 deliverycost..
//     const totalDeliveryCost1To100 = 100 * deliveryCost1To100;
//     // 101 to 200 deliverycost..
//     const totalDeliveryCost110To200 = 100 * deliveryCost110To200;
//     // 201+ deliverycost..
//     const totalDeliveryCost201ToUp = (deliveryQuantity - 200) * deliveryCost201ToUp;
//     // inTotal..
//     const totalDeliveryCost = totalDeliveryCost1To100 + totalDeliveryCost110To200 + totalDeliveryCost201ToUp;
//     return totalDeliveryCost;
//     }
//     }
//     const totalDeliveryCostBill = deliveryCost(400);
//     console.log(totalDeliveryCostBill);
//     /*...Problem No: 04 (Find the first five character name from an array with function)...*/
//     const friendsName = ['nayeem', 'yiasin', 'raju', 'robin', 'rakib', 'siam', 'tusar'];
//     function perfectFriend(friendsName) {
//     const friends = [];
//     for (const element of friendsName) {
//     // Warning: Array must be a string of set..
//     if (typeof element === 'number') {
//     return 'error: Add string in array..!';
//     }
//     else if (element.length == 5) {
//     friends.push(element);
//     return element;
//     }
//     }
//     return friends;
//     }
//     const bestfriend = perfectFriend(friendsName);
//     console.log(bestfriend);