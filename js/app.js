function updateProductNumber(product,price,numberUp){
    const prouctInpurt =document.getElementById(product + '-number');
    let caseNumber =prouctInpurt.value;
    if(numberUp){
        caseNumber = parseInt(caseNumber) + 1;
    }else if(caseNumber > 0){
        caseNumber = parseInt(caseNumber) - 1 ;
    }
    prouctInpurt.value =caseNumber;

    //Update total fild
    const caseTotal = document.getElementById(product +'-total');
    caseTotal.innerText =caseNumber * price;

    calculetTotal()
}

function getInputValue(product){
    const prductInput =document.getElementById(product +'-number');
    const productNumber = parseInt(prductInput.value);
    return productNumber;
}

function calculetTotal(){
    
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal /4;
    const total = subTotal + tax;

    
    //update
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-total').innerText = tax;
    document.getElementById('total-amount').innerText =total;
    
}

//case 
document.getElementById('case-plus').addEventListener('click',function(){
    updateProductNumber('case',59,true)
})
document.getElementById('case-minus').addEventListener('click',function(){
    updateProductNumber('case',59,false)
})

// phone
document.getElementById('phone-plus').addEventListener('click',function(){
    updateProductNumber('phone',1219,true)
})
document.getElementById('phone-minus').addEventListener('click',function(){
    updateProductNumber('phone',1219,false)
})

