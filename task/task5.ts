function isPalindrome(str: string): boolean {
  const cleanStr = str.toLocaleLowerCase().replace(/[^a-z0-9]/g, "");

  const reverse = cleanStr.split("").reverse().join("");

  return cleanStr === reverse;
}
