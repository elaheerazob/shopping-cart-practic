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

