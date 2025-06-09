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
Then the registration should be blocked with a validation error

Given the page is loaded  
When the user leaves the first name field empty  
Then the registration should be blocked with a validation error

Given the page is loaded  
When the user leaves the last name field empty  
Then the registration should be blocked with a validation error

Given the page is loaded  
When the user leaves the birth date field empty  
Then the registration should be blocked with a validation error

Given the page is loaded  
When the user leaves all required fields empty  
Then the registration should be blocked with validation errors

Given the page is loaded  
When the user fills all fields but does not accept the privacy policy and terms  
Then the registration should be blocked with a validation error

### Password validation

Given the page is loaded  
When the password is "abc123"  
Then validation should show error for the invalid password

Given the page is loaded  
When the password is "abcdefgh"  
Then validation should show error for the invalid password

Given the page is loaded  
When the password is "Abcdefgh"  
Then validation should show error for the invalid password

Given the page is loaded  
When the password is "abcdefg!"  
Then validation should show error for the invalid password

Given the page is loaded  
When the password is "ABCDEFGH!"  
Then validation should show error for the invalid password

Given the page is loaded  
When the password is "Abcdef!"  
Then validation should show error for the invalid password

Given the page is loaded  
When the password is "12345678!"  
Then validation should show error for the invalid password

Given the page is loaded  
When the password is "Abc12345"  
Then validation should show error for the invalid password

Given the page is loaded  
When the password is "abc12345!"  
Then validation should show error for the invalid password

Given the page is loaded  
When the password confirmation does not match the password  
Then validation should show error for the invalid password confirmation

### Email validation

Given the page is loaded
When the email address is "johndoe@com"
Then validation should show error for the invalid email address

Given the page is loaded
When the email address is "johndoe.com"
Then validation should show error for the invalid email address

Given the page is loaded
When the email address is "johndoe@"
Then validation should show error for the invalid email address

Given the page is loaded
When the email address is "@example.com"
Then validation should show error for the invalid email address

Given the page is loaded
When the email address is "john@doe@example.com"
Then validation should show error for the invalid email address

Given the page is loaded
When the email address is "john doe@example.com"
Then validation should show error for the invalid email address

Given the page is loaded
When the email address is "john.doe@.com"
Then validation should show error for the invalid email address

Given the page is loaded
When the email address is "john.doe@com."
Then validation should show error for the invalid email address
