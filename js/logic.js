function Extra_cost() {
    let Purchase = Number(document.getElementById("totalPurchase").value);
    let Weight = Number(document.getElementById("totalweight").value);
    let isInternacional = document.getElementById("isLocal").value === "false";
    let Priority = document.getElementById("IsPriority").value === "true"
    
    let extraCostP = document.getElementById("ExtraCost");
    let totalP = document.getElementById("total");
    let hasExtraCostP = document.getElementById("hasExtraCost");
    
    

    
   if (Purchase <= 0 || Weight <= 0) {
        extraCostP.textContent = "Please enter a valid purchase amount";
        totalP.textContent = "";
        return;
    }

    let extraCostRate = 0;
    if (Weight > 10) {
        extraCostRate =  0.10;
    }
           
    if (Purchase > 0){
        if(isInternacional){
            
            extraCostRate += 0.05; 
            extraCostP.textContent = "Special rate for international ship ";
        } else {
            extraCostP.textContent = "No special rate applied ";

        }
    }
    
    let extraCostAmount = Purchase * extraCostRate;
    let finalTotal = Purchase + extraCostAmount;
    let hasExtraCost = extraCostRate > 0;
    let shippingType = Priority ? " Is Priority" : "Standard Shipping";
    hasExtraCostP.textContent = `Extra cost applied: ${hasExtraCost}`;
     totalP.textContent =
      `Final total: $${finalTotal.toFixed(2)} (Extra Cost: ${(extraCostRate * 100).toFixed(0)}%) shippingType : ${(shippingType)}`;


}

 