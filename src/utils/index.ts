const calculator = (
  beerPrice: string,
  beerInput: number,
  beerCompared: number,
): string => {
  if (beerPrice && beerInput && beerCompared) {
    const sanitizedPrice = beerPrice
      ? parseInt(beerPrice.replace(/\D/g, ''), 10) / 100
      : 0;
    const result = ((sanitizedPrice * beerCompared) / beerInput).toFixed(2);
    return result;
  }

  return '0.00';
};

export default calculator;
