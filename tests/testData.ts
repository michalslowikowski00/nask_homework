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
