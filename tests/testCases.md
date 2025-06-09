### User

Given the page is loaded  
When the user provides correct registration data  
Then the user should be able to register successfully

Given the page is loaded  
When the user provides all required data but omits the language  
Then the user should be able to register successfully

Given the page is loaded  
When the user provides all required data but omits the phone number  
Then the user should be able to register successfully

Given the page is loaded  
When the user leaves the email field empty  
Then the registration should be blocked with a 'Pole E-mail jest wymagane' validation error

Given the page is loaded  
When the user leaves the first name field empty  
Then the registration should be blocked with a 'Pole Imię jest wymagane' validation error

Given the page is loaded  
When the user leaves the last name field empty  
Then the registration should be blocked with a 'Pole Nazwisko jest wymagane' validation error

Given the page is loaded  
When the user leaves the birth date field empty  
Then the registration should be blocked with a validation error

Given the page is loaded  
When the user leaves all required fields empty  
Then the registration should be blocked with 'Pole Data urodzenia jest wymagane' validation errors

Given the page is loaded  
When the user fills all fields but does not accept the privacy policy and terms  
Then the registration should be blocked with a 'To pole jest wymagane' validation error

Given the page is loaded  
When the user fills all fields and accept marketing policy
Then the user should be able to register successfully

### Password validation

Given the page is loaded  
When the password is "abc123"  
Then validation should show 'Hasło musi zawierać: co najmniej 8 znaków, dużą literę, znak specjalny!' error for the invalid password

Given the page is loaded  
When the password is "abcdefgh"  
Then validation should show 'Hasło musi zawierać: dużą literę, liczbę, znak specjalny!' error for the invalid password

Given the page is loaded  
When the password is "Abcdefgh"  
Then validation should show 'Hasło musi zawierać: liczbę, znak specjalny!' error for the invalid password

Given the page is loaded  
When the password is "abcdefg!"  
Then validation should show 'Hasło musi zawierać: dużą literę, liczbę!' error for the invalid password

Given the page is loaded  
When the password is "ABCDEFGH!"  
Then validation should show 'Hasło musi zawierać: liczbę!' error for the invalid password

Given the page is loaded  
When the password is "Abcdef!"  
Then validation should show 'Hasło musi zawierać: co najmniej 8 znaków, liczbę!' error for the invalid password

Given the page is loaded  
When the password is "12345678!"  
Then validation should show 'Hasło musi zawierać: dużą literę!' error for the invalid password

Given the page is loaded  
When the password is "Abc12345"  
Then validation should show 'Hasło musi zawierać: znak specjalny!' error for the invalid password

Given the page is loaded  
When the password is "abc12345!"  
Then validation should show 'Hasło musi zawierać: dużą literę!' error for the invalid password

Given the page is loaded  
When the password confirmation does not match the password  
Then validation should show 'Hasła nie są jednakowe!' error for the invalid password confirmation

### Email validation

Given the page is loaded
When the email address is "johndoe@com"
Then validation should show 'Pole E-mail musi być poprawnym adresem email' error for the invalid email address

Given the page is loaded
When the email address is "johndoe.com"
Then validation should show 'Pole E-mail musi być poprawnym adresem email' error for the invalid email address

Given the page is loaded
When the email address is "johndoe@"
Then validation should show 'Pole E-mail musi być poprawnym adresem email' error for the invalid email address

Given the page is loaded
When the email address is "@example.com"
Then validation should show 'Pole E-mail musi być poprawnym adresem email' error for the invalid email address

Given the page is loaded
When the email address is "john@doe@example.com"
Then validation should show 'Pole E-mail musi być poprawnym adresem email' error for the invalid email address

Given the page is loaded
When the email address is "john doe@example.com"
Then validation should show 'Pole E-mail musi być poprawnym adresem email' error for the invalid email address

Given the page is loaded
When the email address is "john.doe@.com"
Then validation should show 'Pole E-mail musi być poprawnym adresem email' error for the invalid email address

Given the page is loaded
When the email address is "john.doe@com."
Then validation should show 'Pole E-mail musi być poprawnym adresem email' error for the invalid email address
