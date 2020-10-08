import { take, primes } from "./generate-primes";

describe("<Form />", () => {
  it("should render the form button", () => {
    const primeNumbers = [...take(3, primes(2))];
    console.log(primeNumbers);
    expect(primeNumbers).toEqual([2, 3, 5]);
  });

  it("should render the form button", () => {
    const primeNumbers = [...take(5, primes(2))];
    console.log(primeNumbers);
    expect(primeNumbers).toEqual([2, 3, 5, 7, 11]);
  });
});
