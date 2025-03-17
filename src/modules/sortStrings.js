function sortStrings(arr) {
    return arr.sort((a, b) => {
      const strA = a.replace(/\s/g, '');
      const strB = b.replace(/\s/g, '');
      return strA.localeCompare(strB);
    });
  }
  
  module.exports = sortStrings;