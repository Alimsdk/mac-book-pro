// change/update extra items on cart
function updateData(inputId,price){
  const extraItemsId=document.getElementById(inputId);
  extraItemsId.innerText=price;

  updateTotal();
}
// get total price

function updateTotal(){
  const basePrice=costingPart('default-cost');
  const memoryPrice=costingPart('extra-memory-cost');
  const ssdPrice=costingPart('extra-storage-cost');
  const deliveryCharge=costingPart('extra-delivery-cost');
  
  const totalPrice=basePrice+memoryPrice+ssdPrice+deliveryCharge;
 document.getElementById('total-cost').innerText=totalPrice;
 document.getElementById('total-price').innerText=totalPrice;
  console.log(totalPrice);
 return totalPrice;
}

function costingPart(InputId){
const priceId=document.getElementById(InputId);
const price=parseInt(priceId.innerText);
return price;
}


function buttons(btnName,updatePrice,price){
  document.getElementById(btnName).addEventListener('click',function(){
    updateData(updatePrice,price)
  });
}
// memory buttons
 buttons('default-memory','extra-memory-cost',0);
 buttons('extra-memory','extra-memory-cost',180);
//  storage buttons
 buttons('default-storage','extra-storage-cost',0);
 buttons('extra-storage','extra-storage-cost',100);
 buttons('super-extra-storage','extra-storage-cost',180);
//  delivery buttons
 buttons('default-delivery','extra-delivery-cost',0);
 buttons('fast-delivery','extra-delivery-cost',20);

// promo code handling

document.getElementById('promo-code').addEventListener('click',function(){
     const inputCode= document.getElementById('promo-input');
     if(inputCode.value=='stevekaku'){
      const discount= updateTotal();
     document.getElementById('total-price').innerText=discount-(discount*(20/100));
     }
});