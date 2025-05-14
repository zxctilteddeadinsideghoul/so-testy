import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

/**
 * WelcomeLayout for 'Auth' page
 * @returns {JSX.Element} Page
 */
export const AuthLayout = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate("/");
    };

    return (
        <>
            <div className="flex justify-center items-center min-h-screen bg-gray-50 relative">
                <button
                    className="absolute top-4 right-4 z-10 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                    onClick={handleBack}
                >
                    Back
                </button>
                <div className="w-full max-w-lg bg-white rounded-3xl shadow-[0px_0px_20px_0px_rgba(0,_0,_0,_0.1)] p-8">
                    <div className="flex flex-col items-center my-3">
                        {/*<Logo className="h-30 w-55 mb-6" />*/}
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    );
};