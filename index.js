

const washCarButton = document.querySelector(".wash-btn")
const mowLawnButton = document.querySelector(".mow-btn")
const pullWeedsButton = document.querySelector(".weeds-btn")
const washTotal = document.querySelector(".wash-total")
const mowTotal = document.querySelector(".mow-total")
const weedsTotal = document.querySelector(".weeds-total")
const totalAmt = document.getElementById("total-amt")
const sendInvoiceBtn = document.querySelector(".send-invoice-btn")


let servicesRequested = []


/********************Wash Car Function************************ */

washCarButton.addEventListener("click", function() {
    const washCar = 10
    servicesRequested.push(washCar);
    washCarButton.disabled = true
    washTotal.textContent = `$${washCar}`
     if (totalAmt.innerText === "") {
        totalAmt.innerText = `$${washCar}`
    } else {
      let newTotal = getArraySum(servicesRequested)
       totalAmt.innerText = `$${newTotal}`
       
   }
    })
    
/**********************Mow Lawn Function************************/


mowLawnButton.addEventListener("click", function() {
    const mowLawn = 20
    servicesRequested.push(mowLawn);
    mowLawnButton.disabled = true
    mowTotal.textContent = `$${mowLawn}`
    if (totalAmt.innerText === "") {
        totalAmt.innerText = `$${mowLawn}`
    } else {
      let newTotal = getArraySum(servicesRequested)
       totalAmt.innerText = `$${newTotal}`
       
   }
    })
    
    
/**********************Pull Weeds Function************** */

pullWeedsButton.addEventListener("click", function() {
    const pullWeeds = 30
    servicesRequested.push(pullWeeds);
    pullWeedsButton.disabled = true
     weedsTotal.textContent = `$${pullWeeds}`
    if (totalAmt.innerText === "") {
        totalAmt.innerText = `$${pullWeeds}`
    } else {
      let newTotal = getArraySum(servicesRequested)
       totalAmt.innerText = `$${newTotal}`
       
   }
    })
    
  

/*****************Get sum in the servicesRequested array**************/


function getArraySum(arr){
   let total = 0;
    for(let i in arr) { 
        total += arr[i];
    }
    return total;
}

/*******************Send Invoice Button***********/

sendInvoiceBtn.addEventListener("click", function() {
    totalAmt.innerText = `$0`
    weedsTotal.textContent = `$0`
    washTotal.textContent = `$0`
    mowTotal.textContent = `$0`
})