
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

// retrieves any data (as a string) as a result of user interacting with app
const saved_data = localStorage.getItem("form_submissions")

// describes what happens when "submit" button is clicked
submitButton.addEventListener("click", () => {

    // submitted-form object created upon click
    // properties for object determined by user's input values
    const submitted_form = {

        username: userName.value,
        email: userEmail.value,
        password: userPassword.value,
        confirm_password: userConfirmPassword.value

    }

    /**
     * save object to local storage (as string); "form_submissions" to be the key, value to be the object
     * note: in previous exercise I used an array and pushed object to array, which might have been
     * redundant--in any case, i am only storing one object at a time in local storage in this case,
     * so i realized i can just by the array
     */
    
    localStorage.setItem("form_submissions", JSON.stringify(submitted_form))

    // input values cleared
    userName.value = ""
    userEmail.value = ""
    userPassword.value = ""
    userConfirmPassword = ""

})
