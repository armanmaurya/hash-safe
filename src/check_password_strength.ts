export function checkPasswordStrength(password: string): number {
  if (password.length < 6) return 0; // Too short = very weak

  let strength = 0;

  // Length-based scoring
  strength += Math.min(password.length * 3, 40); // Max 30 points for length

  // Character variety scoring
  if (/[A-Z]/.test(password)) strength += 15; // Uppercase
  if (/[a-z]/.test(password)) strength += 15; // Lowercase
  if (/\d/.test(password)) strength += 15; // Numbers
  if (/[^A-Za-z0-9]/.test(password)) strength += 15; // Special characters

  // Dictionary check (Common passwords)
  const commonPasswords = [
    "password",
    "123456",
    "qwerty",
    "abc123",
    "letmein",
    "welcome",
    "iloveyou",
    "monkey",
    "football",
    "starwars",
  ];

  if (
    commonPasswords.some((p) => new RegExp(`\\b${p}\\b`, "i").test(password))
  ) {
    return 0; // If found as a whole word, return weakest score
  }

  // Pattern detection (penalties)
  if (/(\w)\1{2,}/.test(password)) strength -= 10; // Repeated characters
  if (/1234|2345|3456|4567|5678|6789/.test(password)) strength -= 15; // Sequential numbers
  if (/abcd|bcde|cdef|defg|efgh/.test(password)) strength -= 15; // Sequential letters
  if (/qwerty|asdf|zxcv|poiuy|lkjh/.test(password)) strength -= 10; // Keyboard patterns

  return Math.max(Math.min(strength, 100), 0); // Ensure score stays between 0-100
}
