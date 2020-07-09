$(document).ready(() => {
  // Getting references to our form and input
  const signUpForm = $("form.signup");
  const emailInput = $("input#email");
  const passwordInput = $("input#userPass");
  const usernameInput = $("input#userName");
  
  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("click", event => {
    event.preventDefault();

    console.log("sign up");
    
    const userData = {    

      email: emailInput.val().trim(),
      password: passwordInput.val().trim(),
      username: usernameInput.val().trim()
    };
    if (!userData.email || !userData.password) {
      return;
    }
    console.log(userData),
    // If we have an email and password, run the signUpUser function
    signUpUser(userData.email, userData.password, userData.username);
    emailInput.val("");
    passwordInput.val("");
    usernameInput.val("");
  });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(email, password, username) {
    console.log("signing up");

    $.post("/rpg-api/signup", {
      username: username,
      email: email,
      password: password
    }).catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});
