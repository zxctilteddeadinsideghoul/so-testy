import {BrowserRouter, Route, Routes} from "react-router";
import WelcomePage from "./WelcomePage.jsx";
import {Auth} from "./Auth/Auth.jsx";
import WelcomeLayout from "./WelcomeLayout.jsx";
import {AuthLayout} from "./Auth/AuthLayout.jsx";

const AppRouter = () => {
    return (
        <BrowserRouter>
            {/** App routes */}
            <Routes>
                {/** Routes for welcome page */}
                <Route path="/" element={<WelcomeLayout />}>
                    <Route index element={<WelcomePage />} />
                </Route>

                {/** Routes for SignIn, SignUp */}
                <Route path="/auth" element={<AuthLayout />}>
                    <Route index element={<Auth />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;