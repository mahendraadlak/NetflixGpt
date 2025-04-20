export const signInSignUp = (email, password)=>{
    const checkEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
    const checkPassword = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password)
    // const checkName = /([a-zA-Z0-9_\s]+)/.test(name)

    if(!checkEmail) return "Please enter valid email"
    if(!checkPassword) return "Please enter valid password"
//     if (name !== "" && !/([a-zA-Z0-9_\s]+)/.test(name)) {
//     return "Please enter valid name";
//   }
    return null
}