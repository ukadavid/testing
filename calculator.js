const mathOperations = {
    a : 2,
    b : 3,
    sum : function () {return this.a + this.b},
    diff : function () {return this.a - this.b},
    product : function () {return this.a * this.b},
    divide : function () {return Number((this.a / this.b).toFixed(1))}
};

module.exports = mathOperations;
