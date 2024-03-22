const password = prompt(
  "please enter a new password (must be 6+ chars please)"
);

// at least 6 chars password
if (password.length >= 6) {
  if (password.indexOf(" ") === -1) {
    alert("valid password");
  } else {
    alert("invalid password, try again");
  }
} else {
  alert("invalid password, try again");
}
// no space no password
