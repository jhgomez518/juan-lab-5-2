
Reflections Questions:

1. How did event.preventDefault() help in handling form submission?
   
  I used event.preventDefault() on my submit button's event listener. This allowed me to override HTML's default behavior for this element, thereby allowing me to implement my own logic for it. I was then able to perform final-check validations whenever the user clicked on the submit button. 
  
1. What is the difference between using HTML5 validation attributes and JavaScript-based validation? Why might you use both?
   
  HTML5' validation attributes, despite their usefulness, are less complex than their JS-based counterparts. A custom pattern for a password requirement, for example, would be more JS' forte than HTML5's. Also, JS can be leveraged to give users a friendly "nudge" on the UI whenever validation attributes are not met--in this way both HTML5 and JS can work together to ensure all validation constraints are met.
  
1. Explain how you used localStorage to persist and retrieve the username. What are the limitations of localStorage for storing sensitive data?

  For this form, I use localStorage methods to store a user's inputted information for my form as an object-turned-string. Then I retrieve the string and revert the data back to object form (if said object exists) and used the values to pre-populate the placeholder values whenever the page refreshed. The way I designed it, only one user would be remembered at a time (the latest user/submitter).Limitations of localStorage include bad actors who may want to steal your personal information.
  
1. Describe a challenge you faced in implementing the real-time validation and how you solved it.
   
  One challenge I faced was figuring out how to add and validate a "pattern" attribute to my password/confirm password inputs.
  I think I found the solution here: https://www.w3schools.com/howto/howto_js_password_validation.asp
  This would be a LOT to go into and for the sake of time I decided to move on to other assignments and turn in what I had. I will return to that link and deep dive into validating password patterns in the future (this problem will no doubt return). That said, it was cool that I found this documentation because through it I found out about type="password" which, after implementing in my form, now gives my password/confirm-password fields a greater level of security, which in turn makes my UX a more secure and trustworthy one for my users.
  
1. How did you ensure that custom error messages were user-friendly and displayed at the appropriate times?
   
  Testing, testing, testing! Constantly testing is the quickest and most effective way to intuit what the UX would be like, and to tweak accordingly. Testing after every single added functionality allows me to keep track of what's working and to quickly be able to pinpoint what's not. Regarding the UX: one notable omission from my form that would have made it 10x better is if I added a "show password" option for the user--will look into this next time (passwords are like a whole thing apparently).