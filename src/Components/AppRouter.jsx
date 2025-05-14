import {BrowserRouter, Route, Routes} from "react-router";
import WelcomePage from "./WelcomePage.jsx";
import {Auth} from "./Auth/Auth.jsx";
import WelcomeLayout from "./WelcomeLayout.jsx";
import {AuthLayout} from "./Auth/AuthLayout.jsx";
import {TestCreatingLayout} from "./TestCreating/TestCreatingLayout.jsx";
import {TestCreating} from "./TestCreating/TestCreating.jsx";

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

                {/** Routes for TestCreating */}
                <Route path="/create" element={<TestCreatingLayout />}>
                    <Route index element={<TestCreating/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;