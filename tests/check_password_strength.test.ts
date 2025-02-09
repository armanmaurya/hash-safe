import { checkPasswordStrength } from '../src/check_password_strength';

describe('checkPasswordStrength', () => {
  it('should return 0 for passwords shorter than 6 characters', () => {
    expect(checkPasswordStrength('123')).toBe(0);
  });

  it('should return a higher score for longer passwords', () => {
    expect(checkPasswordStrength("ioapliaodioa")).toBeGreaterThan(checkPasswordStrength("ioaplia"));
  });

  it('should return a higher score for passwords with mixed character types', () => {
    expect(checkPasswordStrength('aA1!@kalio')).toBeGreaterThan(checkPasswordStrength('aaaa'));
  });

  it('should return 0 for common passwords', () => {
    expect(checkPasswordStrength('password')).toBe(0);
    expect(checkPasswordStrength('123456')).toBe(0);
  });

  it('should penalize repeated characters', () => {
    expect(checkPasswordStrength('aaaAAA111!!!')).toBeLessThan(checkPasswordStrength('aA1!aA1!'));
  });

  it('should penalize sequential numbers and letters', () => {
    expect(checkPasswordStrength('1234abcd')).toBeLessThan(checkPasswordStrength('1a2b3c4d'));
  });

  it('should ensure the score stays between 0 and 100', () => {
    expect(checkPasswordStrength('aA1!aA1!aA1!aA1!aA1!aA1!aA1!aA1!aA1!aA1!')).toBeLessThanOrEqual(100);
    expect(checkPasswordStrength('')).toBeGreaterThanOrEqual(0);
  });
});

