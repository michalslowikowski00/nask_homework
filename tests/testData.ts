export type userDataType = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  birthDate: string;
  language?: string;
  phone?: string;
  marketingOptIn?: boolean;
};

export const testUser: userDataType = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'john.doe@example.com',
  password: 'Password123!',
  confirmPassword: 'Password123!',
  birthDate: '1990-01-01',
  language: 'en',
  phone: '1234567890',
  marketingOptIn: false,
};

export const url = 'http://localhost:8080/';

export const invalidEmails = [
  'johndoe@com',
  'johndoe.com',
  'johndoe@',
  '@example.com',
  'john@doe@example.com',
  'john doe@example.com',
  'john.doe@.com',
  'john.doe@com.',
];

export const invalidPasswords = {
  abc123:
    'Hasło musi zawierać: co najmniej 8 znaków, dużą literę, znak specjalny!',
  abcdefgh: 'Hasło musi zawierać: dużą literę, liczbę, znak specjalny!',
  Abcdefgh: 'Hasło musi zawierać: liczbę, znak specjalny!',
  'abcdefg!': 'Hasło musi zawierać: dużą literę, liczbę!',
  'ABCDEFGH!': 'Hasło musi zawierać: liczbę!',
  'Abcdef!': 'Hasło musi zawierać: co najmniej 8 znaków, liczbę!',
  '12345678!': 'Hasło musi zawierać: dużą literę!',
  Abc12345: 'Hasło musi zawierać: znak specjalny!',
  'abc12345!': 'Hasło musi zawierać: dużą literę!',
};
