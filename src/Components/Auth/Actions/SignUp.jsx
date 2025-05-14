/**
 * Action to sign up
 * @returns {void}
 */
export function signUpAction() {


}

export function register(email, password) {
    fetch("https://staticstorm.ru/api/register", {
        method: "POST",
        body: JSON.stringify({
            username: email,
            password: password,
            role: "student"
        })
    }).then(res => {
        if (res.status === 200) {
            console.log("register success")
        } else {
            console.log("error register: ", res.status)
        }
    })
}