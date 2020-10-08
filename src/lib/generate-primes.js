export function* take(max, iterable) {
  for (let x of iterable) {
    if (max <= 0) return;
    max--;
    yield x;
  }
}

export function* primes(start) {
  let n = +start;

  while (true) {
    if (isPrime(n)) yield n;
    n++;
  }

  function isPrime(num) {
    for (var i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
}
