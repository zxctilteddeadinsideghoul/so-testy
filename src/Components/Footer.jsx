// Footer Component
const Footer = () => {
    return (
        <footer className="p-8 bg-white shadow-inner">
            <div className="w-full mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center mb-6">
                    <div className="mt-4 md:mt-0">
                        <img
                            src="https://placehold.co/200x40/000000/FFFFFF?text=Logo "
                            alt="Logo"
                            className="w-32 h-10 object-contain"
                        />
                    </div>
                </div>
                <div className="border-t border-gray-200 pt-6 text-center text-gray-500 text-sm">
                    <p>© {new Date().getFullYear()} So Testy. All rights reserved.</p>
                    <p className="mt-2">Created with React and Tailwind CSS</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;