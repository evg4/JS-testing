const myObject = {
  firstLetter(arr) {
    if (!Array.isArray(arr)) {
      throw Error("input should be array");
    } else if (
      arr.some((element) => {
        return typeof element !== "string";
      })
    ) {
      throw Error("input should be array of strings");
    } else {
      let newArr = [];
      for (let i = 0; i < arr.length; i++) {
        let letter = arr[i][0];
        newArr.push(letter);
      }
      return newArr.join("").toLowerCase();
    }
  },
};

module.exports = myObject;
