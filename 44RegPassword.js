
// validate password

function validatePassword(password) {
    const regex = /(?=.*[A-Z])(?=.*[a-z])(?=.*[\d])(?=.*[\W_]).{8,}$/;
    return regex.test (password);
}
console.log(validatePassword("Pass123!"));
console.log(validatePassword("Password"));
