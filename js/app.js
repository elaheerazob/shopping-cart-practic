function updateProductNumber(){
    const caseNumber =document.getElementById('case-number');
    let caseTotal =caseNumber.value;
    caseNumber.value=parseInt(caseTotal) + 1;
}

document.getElementById('case-plus').addEventListener('click',function(){
    const caseNumber =document.getElementById('case-number');
    let caseTotal =caseNumber.value;
    caseNumber.value=parseInt(caseTotal) + 1;
})
document.getElementById('case-minus').addEventListener('click',function(){
    const caseNumber =document.getElementById('case-number');
    let caseTotal =caseNumber.value;
    caseNumber.value=parseInt(caseTotal) + 1;
})