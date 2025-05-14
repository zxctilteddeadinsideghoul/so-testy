/**
 * Action to sign in
 * @returns {void}
 */
export function signInAction() {

}

export function login(email, password) {
    fetch("https://staticstorm.ru/api/login", {
        method: "POST",
        body: JSON.stringify({
                username: email,
                password: password
            }
        )
    }).then(res => {
        return res.json()
    }).then(data => {
        localStorage.setItem("token", data["access_token"])
    })
}