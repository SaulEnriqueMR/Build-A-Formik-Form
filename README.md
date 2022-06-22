# Using Formik

Formik is a small library that can help you with the three most annoying aspects of creating forms in React:

- Getting values in and out of the form state
- Validation and error messages
- Handling form submission

By collecting all of the above in one place, Formik can keep things organized, making testing, refactoring, and reasoning your forms much easier.

In this activity, we created a form with the following fields:

- Email field
- Password field
- Submit button

And has the next validations:

- If the username or password inputs are empty, display the message "Field required" under the text input.
- If the username is not in an email format, display the message "Username should be an email" under the text input.
- If the username and password pass the above validations, then display the message "Login Successful" in an alert box.
