function fahrenheitToCelcius(fahrenheit: number): string {
  const celcius = (fahrenheit - 32) * (5 / 9);

  return celcius.toFixed(2);
}

// Example usage
console.log(fahrenheitToCelcius(68)); // Output: 20.00
