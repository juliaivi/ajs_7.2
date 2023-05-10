import verificationTelehone from '../verificationTelefone';

test('correct phone number', () => {
  const result = verificationTelehone('8 (927) 000-00-00');
  expect(result).toBe('+79270000000');
});

test('correct phone number', () => {
  const result = verificationTelehone('+7 960 000 00 00');
  expect(result).toBe('+79600000000');
});

test('correct phone number', () => {
  const result = verificationTelehone('+86 000 000 0000');
  expect(result).toBe('+860000000000');
});

test('correct phone number', () => {
  const result = verificationTelehone('89270000000');
  expect(result).toBe('+79270000000');
});

test('correct phone number', () => {
  const result = verificationTelehone('+7(927)0000000');
  expect(result).toBe('+79270000000');
});

test('correct phone number', () => {
  const result = verificationTelehone('+7927000-00-00');
  expect(result).toBe('+79270000000');
});
