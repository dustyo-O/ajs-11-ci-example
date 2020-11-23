const cashback = {
  regular: {
    bound: 1000,
    percent: 1,
  },
  silver: {
    bound: 10000,
    percent: 2,
  },
  gold: {
    bound: 100000,
    percent: 5,
  },
};

export default function calculateCashback(amount) {
  const loyalityProgram = Object.keys(cashback).reverse() // ['gold', 'silver', 'regular']
    .find((program) => amount >= cashback[program].bound);

  if (!loyalityProgram) return 0;

  // eslint-disable-next-line no-mixed-operators
  return Math.ceil(amount * cashback[loyalityProgram].percent / 100);
}
