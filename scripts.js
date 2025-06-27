
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

// retrieves any object/data (as a string) saved in local storage as a result of user previously interacting with app
const saved_data = localStorage.getItem("form_submissions")
// recovers object type of the saved object in local storage; will use to populate placeholder values if it exists
const recovered_saved_data = JSON.parse(saved_data)

userName.addEventListener("input", () => {
    /**
     * when input data changes, if an object exists in local storage,
     * input placeholder values will update with values of the object
     * for the corresponding inputs/properties
     */
    if(saved_data) {
        userName.placeholder = recovered_saved_data.username
        userEmail.placeholder = recovered_saved_data.email
        userPassword.placeholder = recovered_saved_data.password
        userConfirmPassword.placeholder = recovered_saved_data.confirm_password
    }

})

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
     * note: in previous exercise i used an array and pushed object to array, which might have been
     * redundant--in any case, i am only storing one object at a time in local storage here,
     * so i realized i can just bypass the array
     */
    
    localStorage.setItem("form_submissions", JSON.stringify(submitted_form))

    // input values cleared
    userName.value = ""
    userEmail.value = ""
    userPassword.value = ""
    userConfirmPassword = ""

})
