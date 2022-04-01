function orderFood(food,quantity){

    // return {orderedFood:food,orderedQuantity:quantity}
    console.log({ orderedFood: food, orderedQuantity: quantity });
    console.log({ food, quantity });
    return {food,quantity}
}

function receiveOrder(){

}

function cookFoodAccordingToOrder(){

}

function pickupOrder(){

}

function deliverOrder(){

}

const orderDetails = orderFood("pizza",4)
console.log(orderDetails,"test order details")