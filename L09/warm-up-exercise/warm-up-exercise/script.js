var L09a;
(function (L09a) {
    let leute = [
        {
            name: "aline",
            alter: 18,
            hoehe: 156,
            hobbys: ["zeichnen", "lesen"]
        },
        {
            name: "penelope",
            alter: 20,
            hoehe: 165,
            hobbys: ["zeichnen", "wandern"]
        }
    ];
    for (let index = 0; index < leute.length; index++) {
        console.log(leute[index].name);
    }
    let numbers = [1, 18, 32, 75, 82, 365, 27];
    let index = 0;
    let sum = 0;
    for (let index = 0; index < numbers.length; index++) {
        sum += numbers[index];
    }
    console.log(sum);
})(L09a || (L09a = {}));
//# sourceMappingURL=script.js.map