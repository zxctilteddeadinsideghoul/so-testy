import {useState} from "react";
import {AuthSignInForm} from "./Forms/SignIn";
import {AuthSignUpForm} from "./Forms/SignUp";

/**
 * Auth page representation
 * @returns {JSX.Element} Page
 */
export const Auth = () => {
    const [isSignIn, setIsSighIn] = useState(true);
    const [emailInput, setEmailInput] = useState("");

    return (
        <>
            {isSignIn ? (
                <AuthSignInForm switchToSignUp={() => setIsSighIn(false)}
                                saveEmailInput={(e) => setEmailInput(e.target.value)}
                                currentEmailInput={emailInput}
                />
            ) : (
                <AuthSignUpForm switchToSignIn={() => setIsSighIn(true)}
                                saveEmailInput={(e) => setEmailInput(e.target.value)}
                                currentEmailInput={emailInput}
                />
            )}
        </>
    );
};