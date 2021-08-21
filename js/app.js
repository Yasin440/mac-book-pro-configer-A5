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
