import { login } from "../Actions/SignIn";
import {memo, useState} from "react";


/**
 * Sign in form
 * @returns {JSX.Element} Form
 */
export const AuthSignInForm = memo(({ switchToSignUp, saveEmailInput, currentEmailInput}) => {
    const [password, setPassword] = useState("");


    return (
        <>
            <form className="w-78">
                <div className="mb-5">
                    <label
                        className="block text-gray-600 font-medium text-xl mb-2"
                        htmlFor="email"
                    >
                        Электронная почта
                    </label>
                    <input
                        required
                        type="email"
                        id="email"
                        autoComplete="current-email"
                        placeholder="mail@example.com"
                        value={currentEmailInput}
                        onChange={saveEmailInput}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>
                <div className="mb-5">
                    <label
                        required
                        className="block text-gray-600  text-xl font-medium mb-2"
                        htmlFor="password"
                    >
                        Пароль
                    </label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Пароль"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        autoComplete="current-password"
                        onChange={(e) => {setPassword(e.target.value)}}
                    />
                </div>
                <div className="flex items-center mb-5">
                    <input
                        type="checkbox"
                        id="stay_signed_in"
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-400"
                    />
                    <label
                        htmlFor="stay_signed_in"
                        className="ml-2 text-md text-gray-700"
                    >
                        Не выходить
                    </label>
                </div>
                <div className="flex flex-col space-y-4">
                    <button
                        type="button"
                        className="w-full bg-white text-lg font-medium text-gray-600 py-2 rounded-lg ring-1 ring-zinc-400 hover:ring-zinc-300 transition"
                        onClick={switchToSignUp}
                    >
                        Зарегистрироваться
                    </button>
                    <button
                        type="button"
                        className="w-full bg-general_blue text-lg font-medium stroke-current text-white py-2 rounded-lg"
                        onClick={() => {
                            login(currentEmailInput, password)
                        }}
                    >
                        Войти
                    </button>
                </div>
            </form>
        </>
    );
});