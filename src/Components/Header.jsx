import { useNavigate } from 'react-router-dom';

// Header Component
const Header = () => {
    const navigate = useNavigate();

    return (
        <header className="p-6 flex justify-between items-center bg-white shadow-md">
            <h1 className="text-2xl font-bold text-indigo-700">So Testy</h1>
            <div className="flex gap-4">
                <button className="px-4 py-2 bg-indigo-600 text-white font-medium rounded-md shadow-sm hover:bg-indigo-700 transition duration-300"
                onClick={() => navigate("/auth")}
                >
                    Sign In
                </button>
            </div>
        </header>
    );
};

export default Header;
