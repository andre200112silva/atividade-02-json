// rational.js
console.log('rational.js');

function rational(numerator, denominator) {
    return { // <== this is a JSON being returned by the function
        numerator: numerator,
        denominator: denominator,
        multiply: function(otherRational) {
            return rational(this.numerator * otherRational.numerator,
                this.denominator * otherRational.denominator);
        },
        greatestCommonDivisor: function() {
            let greatestCommonDivisor = this.numerator < this.denominator
                ? this.numerator : this.denominator;
            while (this.numerator % greatestCommonDivisor !== 0
                || this.denominator % greatestCommonDivisor !== 0) {
                greatestCommonDivisor--;
            }
            return greatestCommonDivisor;
        },
        reduce: function() {
            const gcd = this.greatestCommonDivisor();
            this.numerator /= gcd;
            this.denominator /= gcd;
        }
    };
}

// all test cases must output true

const r1 = rational(2, 3); // sublinhados verdes são warnings, ignore-os
console.log(r1.numerator === 2);
console.log(r1.denominator === 3);

const r2 = rational(3, 5);
console.log(r2.numerator === 3);
console.log(r2.denominator === 5);

const r3 = r1.multiply(r2);
console.log(r3.numerator === 6);
console.log(r3.denominator === 15);


console.log(r3.greatestCommonDivisor() === 3);

r3.reduce();

console.log(r3.numerator === 2);
console.log(r3.denominator === 5);

const r4 = rational(248, 684);
const r5 = rational(320, 496);

const r6 = r4.multiply(r5);
console.log(r6); // 79360/339264
r6.reduce();
console.log(r6); // 40/171
// Em dúvida?
// Teste aqui: https://www.wolframalpha.com/input/?i=248%2F684+*+320%2F496
