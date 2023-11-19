const utils = require('./index')

describe('[Exercise 1] trimProperties', () => {
  test('[1] returns an object with the properties trimmed', () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimProperties(input)
    expect(actual).toEqual(expected)
  })
  test('[2] returns a copy, leaving the original object intact', () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const staticInput = {...input}
    utils.trimProperties(input)
    expect(input).toMatchObject(staticInput)
  })
})

describe('[Exercise 2] trimPropertiesMutation', () => {
  test('[3] returns an object with the properties trimmed', () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const output = utils.trimPropertiesMutation(input)
    expect(output).toMatchObject(expected)
  })
  test('[4] the object returned is the exact same one we passed in', () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const output = utils.trimPropertiesMutation(input)
    expect(input).toStrictEqual(output)
  })
})

describe('[Exercise 3] findLargestInteger', () => {
  test('[5] returns the largest number in an array of objects { integer: 2 }', () => {
    const input = [{integer: 4}, {integer:6}, {integer:23}, {integer:64}, {integer:234}, {integer:2}, {integer:-43}, {integer:67}]
    const output = utils.findLargestInteger(input)
    expect(output).toBe(234)
  })
})

describe('[Exercise 4] Counter', () => {
  let counter
  beforeEach(() => {
    counter = new utils.Counter(3) // each test must start with a fresh couter
  })
  test('[6] the FIRST CALL of counter.countDown returns the initial count', () => {
    expect(counter.value).toBe(3)
  })
  test('[7] the SECOND CALL of counter.countDown returns the initial count minus one', () => {
    counter.countDown()
    counter.countDown()
    expect(counter.value).toBe(2)
  })
  test('[8] the count eventually reaches zero but does not go below zero', () => {
    expect(counter.value).toBe(3)
    counter.countDown()
    counter.countDown()
    counter.countDown()
    counter.countDown()
    expect(counter.value).toBe(0)
    counter.countDown()
    expect(counter.value).not.toBeLessThan(0)
  })
})

describe('[Exercise 5] Seasons', () => {
  let seasons
  beforeEach(() => {
    seasons = new utils.Seasons() // each test must start with fresh seasons
  })
  test('[9] the FIRST call of seasons.next returns "summer"', () => {
    expect(seasons.next()).toBe('summer')
  })
  test('[10] the SECOND call of seasons.next returns "fall"', () => {
    seasons.next()
    expect(seasons.next()).toBe('fall')
  })
  test('[11] the THIRD call of seasons.next returns "winter"', () => {
    seasons.next()
    seasons.next()
    expect(seasons.next()).toBe('winter')
  })
  test('[12] the FOURTH call of seasons.next returns "spring"', () => {
    seasons.next()
    seasons.next()
    seasons.next()
    expect(seasons.next()).toBe('spring')
  })
  test('[13] the FIFTH call of seasons.next returns again "summer"', () => {
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    expect(seasons.next()).toBe('summer')
  })
  test('[14] the 40th call of seasons.next returns "spring"', () => {
    for (let i=0; i<39; i++) {
      seasons.next()
    }
    expect(seasons.next()).toBe('spring')
  })
})

describe('[Exercise 6] Car', () => {
  let focus
  beforeEach(() => {
    focus = new utils.Car('focus', 20, 30) // each test must start with a fresh car
  })
  test('[15] driving the car returns the updated odometer', () => {
    expect(focus.drive(30)).toBe(30)
  })
  test('[16] driving the car uses gas', () => {
    focus.drive(30)
    expect(focus.gas).toBeLessThan(20)
    const gasMark = focus.gas
    focus.drive(50)
    expect(focus.gas).toBeLessThan(gasMark)
  })
  test('[17] refueling allows to keep driving', () => {
    focus.gas = 0
    focus.drive(50)
    expect(focus.odometer).toBe(0)
    focus.refuel(50)
    focus.drive(20)
    expect(focus.odometer).toBe(20)
  })
  test('[18] adding fuel to a full tank has no effect', () => {
    const gasMarker = focus.gas
    focus.refuel(20)
    expect(focus.gas).toEqual(gasMarker)
  })
})

describe('[Exercise 7] isEvenNumberAsync', () => {
  test('[19] resolves true if passed an even number', async () => {
    let result = await utils.isEvenNumberAsync(6)
    expect(result).toBe(true)
    result = await utils.isEvenNumberAsync(3478)
    expect(result).toBe(true)
  })
  test('[20] resolves false if passed an odd number', async () => {
    let result = await utils.isEvenNumberAsync(5)
    expect(result).toBe(false)
    result = await utils.isEvenNumberAsync(747)
    expect(result).toBe(false)    
  })
})