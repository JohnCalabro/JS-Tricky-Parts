function curriedAdd(total) {
    //was kind of confused, looked at solution, makes more sense
    if (total === undefined) return 0; 
    return function addNext(num) {
      if (num === undefined) return total;
      total += num;
      return addNext;
    };
  }
  
  module.exports = { curriedAdd };
module.exports = { curriedAdd };
