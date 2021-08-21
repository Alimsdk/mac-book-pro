// change/update extra items on cart
function updateData(inputId,price){
  const extraItemsId=document.getElementById(inputId);
  extraItemsId.innerText=price;

  updateTotal();
}
// get total price

function updateTotal(){
  const baseprice=costingPart('default-cost');
  const memoryprice=costingPart('extra-memory-cost');
  const ssdprice=costingPart('extra-storage-cost');
  const deliverycharge=costingPart('extra-delivery-cost');
  
  const totalprice=baseprice+memoryprice+ssdprice+deliverycharge;
 document.getElementById('total-cost').innerText=totalprice;
 document.getElementById('total-price').innerText=totalprice;
  console.log(totalprice);
 return totalprice;
}

function costingPart(InputId){
const priceid=document.getElementById(InputId);
const price=parseInt(priceid.innerText);
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