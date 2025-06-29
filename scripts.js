
const userName = document.getElementById("username")
const userEmail = document.getElementById("email")
const userPassword = document.getElementById("password")
const userConfirmPassword = document.getElementById("confirm-password")
const signupForm = document.querySelector(".sign-up-form")
const usernameError = document.getElementById("usernameError")
const emailError = document.getElementById("customEmailError")
const passwordError = document.getElementById("passwordError")
const confirmPasswordError = document.getElementById("confirmPasswordError")
const submitButton = document.getElementById("submit-button")
const statusMessage = document.getElementById("status-message")

// retrieves any object/data (as a string) saved in local storage as a result of user previously interacting with app
const saved_data = localStorage.getItem("form_submissions")
// recovers object type of the saved object in local storage; will use to populate placeholder values if object exists
const recovered_saved_data = JSON.parse(saved_data)

if(saved_data) {
        userName.placeholder = recovered_saved_data.username
        userEmail.placeholder = recovered_saved_data.email
        userPassword.placeholder = recovered_saved_data.password
        userConfirmPassword.placeholder = recovered_saved_data.confirm_password
    }

/**
 * the following arrow-functions apply
 * validation to all input fields
 */

userName.addEventListener("input", () => {
// check input validity and decide validation message based on result
    if (userName.validity.valueMissing) {
        userName.setCustomValidity("please enter a value");
    } else if (userName.validity.tooLong) {
        userName.setCustomValidity("username is too long");
    }
    else if (userName.validity.tooShort) {
        userName.setCustomValidity("username is too short")
    } else {
        userName.setCustomValidity(''); // clear custom error if valid
    }
    // display the custom message or clear it if all constraints are met
    usernameError.textContent = userName.validationMessage
})

userEmail.addEventListener("input", () => {

    // check input validity and decide validation message based on result
    if (userEmail.validity.valueMissing) {
        userEmail.setCustomValidity("please enter a value");
    } else if (userEmail.validity.typeMismatch) {
        userEmail.setCustomValidity("please enter a valid email address");
    }
    else if (userEmail.validity.tooShort) {
        userEmail.setCustomValidity("email is too short")
    } else if (userEmail.validity.tooLong) {
        userEmail.setCustomValidity("email is too long")
    } else {
        userEmail.setCustomValidity(''); // clear custom error if valid
    }
    // display the custom message or clear it if all constraints are met
    emailError.textContent = userEmail.validationMessage;

})

userPassword.addEventListener("input", () => {

    // check input validity and decide validation message based on result
    if (userPassword.validity.valueMissing) {
        userPassword.setCustomValidity("please enter a value");
    } else if (userPassword.validity.tooLong) {
        userPassword.setCustomValidity("password is too long");
    }
    else if (userPassword.validity.tooShort) {
        userPassword.setCustomValidity("password is too short")
    } else {
        userPassword.setCustomValidity(''); // clear custom error if valid
    }
    // display the custom message or clear it if all constraints are met
    passwordError.textContent = userPassword.validationMessage;

})

userConfirmPassword.addEventListener("input", () => {

    // check input validity and decide validation message based on result
    if (userConfirmPassword.validity.valueMissing) {
        userConfirmPassword.setCustomValidity("please enter a value");
    } else if (userConfirmPassword.validity.tooLong) {
        userConfirmPassword.setCustomValidity("password is too long");
    }
    else if (userConfirmPassword.validity.tooShort) {
        userConfirmPassword.setCustomValidity("password is too short")
    } else if (userConfirmPassword.value !== userPassword.value) { //only applying this to "confirm password" field since most users complete this last
        userConfirmPassword.setCustomValidity("passwords must match")
    }
    else {
        userConfirmPassword.setCustomValidity('') // clear custom error if valid
    }
    // display the custom message or clear it if all constraints are met
    confirmPasswordError.textContent = userConfirmPassword.validationMessage

})

/**describes what happens when "submit" button is clicked
 * note: prior to clicking submit button, validations are only performed when user inputs
 * content in input fields, meaning they may still "legally" submit form with blank fields.
 * need to account for this by validating one more time when submit button is clicked,
 * then proceeding accordingly.
 */
submitButton.addEventListener("click", (event) => {

    event.preventDefault() // prevents default behavior for submit-button since i want to define that logic here

    /**
     * following if-else describes what happens when all validations pass at moment of user's click,
     * and what happens if validations don't pass at moment of user's click.
     */

    if(userName.validity.valid && userEmail.validity.valid && userPassword.validity.valid && userConfirmPassword.validity.valid) {

        // given all validations pass, "submitted-form" object created;
        // properties for object determined by user's input values
        const submitted_form = {

            username: userName.value,
            email: userEmail.value,
            password: userPassword.value,
            confirm_password: userConfirmPassword.value

        }

        /**
         * save object to local storage (as string); "form_submissions" to be the key, value to be the object.
         * note: in previous exercise i used an array and pushed object to array, which might have been
         * redundant--in any case, i am only storing one object at a time in local storage here,
         * so i realized i can just bypass the array
         */
        
        localStorage.setItem("form_submissions", JSON.stringify(submitted_form))

        // input values cleared
        userName.value = ""
        userEmail.value = ""
        userPassword.value = ""
        userConfirmPassword.value = ""
        statusMessage.classList.remove("has-text-danger")
        statusMessage.classList.add("has-text-link"); // green didn't pop out as much ):
        statusMessage.textContent = "submitted successfully!"

    } else {
        statusMessage.textContent = "please fill out all fields correctly."
    }

})


