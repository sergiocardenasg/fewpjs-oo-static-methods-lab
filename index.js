class Formatter {
  //add static methods here
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  static sanitize(str) {
    const regex = /[^A-Za-z0-9 '-]/g
    return str.replace(regex, '') 
  }

  static titleize(str) {
    const arr = str.split(" ");
    const newArr = [];
    let exceptions = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"];
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      if (i == 0) {
        newArr.push(this.capitalize(element))
      } else {
        if (exceptions.includes(element)) {
          newArr.push(element)
        } else {
          newArr.push(this.capitalize(element))
        }
      }
    }
    return newArr.join(" ")
  }
}