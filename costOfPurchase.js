function countAllSummOfThreeValuableUsers(users) {
    let totalAmount = 0;
    users.forEach(purchaseAmount => {
        totalAmount += purchaseAmount;
    });
    return totalAmount;
  }
  
  let costOfPurchaseForEachUser = [10000, 20000, 30000];
  console.log(countAllSummOfThreeValuableUsers(costOfPurchaseForEachUser));