function removeFirsOccurence(original: string, search: string): string {
  const index = original.indexOf(search);

  if (index === -1) {
    return original;
  }

  return original.slice(0, index) + original.slice(index + search.length);
}
