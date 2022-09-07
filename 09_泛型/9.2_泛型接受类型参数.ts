function test<T, E, O>(a: T, b: E, c: O) {}

test<string, number, object>('leslie', 24, { lover: 'cabbage' })
test('leslie', 24, { lover: 'cabbage' })
