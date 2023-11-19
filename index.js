function trimProperties(obj) {
  const copyObj = {...obj}
  for (let key in copyObj) {
    copyObj[key] = copyObj[key].trim()
  }
  return copyObj
}

function trimPropertiesMutation(obj) {
  for (let key in obj) {
    obj[key] = obj[key].trim()
  }
  return obj
}

function findLargestInteger(integers) {
  integers.sort((a, b) => a - b)
  return integers[integers.length-1]
}

class Counter {
  constructor(initialNumber) {
    this.value = initialNumber
  }
  init = false
  countDown() {
    if (!this.init) {
      this.init=true
      return this.value
    }
    else if(this.value) {
      this.value-=1
    }
    return this.value
  }
}

class Seasons {
  array = ['spring', 'summer', 'fall', 'winter']
  index = 0
  constructor() {
    this.value = this.array[0]
  }
  next() {
    if (this.index === 3) this.index = 0
    else this.index += 1
    this.value = this.array[this.index]
    return this.value
  }
}

class Car {
  constructor(name, tankSize, mpg) {
    this.tankSize = tankSize // car initiazes full of gas
    this.mpg = mpg
    this.odometer = 0
    this.gas = tankSize
  }
  drive(distance) {
    if (distance <= this.mpg * this.gas) {
      this.odometer += distance
      this.gas -= distance/this.mpg
    }
    else {
      this.odometer += this.mpg * this.gas
      this.gas = 0
    }
    return this.odometer
  }
  refuel(gallons) {
    if (this.gas + gallons < this.tankSize) {
      this.gas += gallons
    }
    else {
      console.log(this.tankSize)
      this.gas = this.tankSize
    }
    return this.mpg * this.gas
  }
}

function isEvenNumberAsync(number) {
  return number%2===0
  ? true
  :false
}

module.exports = {
  trimProperties,
  trimPropertiesMutation,
  findLargestInteger,
  isEvenNumberAsync,
  Counter,
  Seasons,
  Car,
}
