var hc = {
    id: 2,
    dbId: 1,
    googleId: 100,
    // startTrail: function (): string {
    //     throw new Error("Function not implemented.")
    // }
    startTrail: function () {
        return "Started Already";
    },
    getCoupons: function (name) {
        return 10;
    }
};
console.log(hc);
