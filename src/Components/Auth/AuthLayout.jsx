import { Outlet } from "react-router-dom";
// import { Logo } from "../Logo/Logo";

/**
 * WelcomeLayout for 'Auth' page
 * @returns {JSX.Element} Page
 */
export const AuthLayout = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-50">
            <div className="w-full max-w-lg bg-white rounded-3xl shadow-[0px_0px_20px_0px_rgba(0,_0,_0,_0.1)] p-8">
                <div className="flex flex-col items-center my-3">
                    {/*<Logo className="h-30 w-55 mb-6" />*/}
                    <Outlet />
                </div>
            </div>
        </div>
    );
};