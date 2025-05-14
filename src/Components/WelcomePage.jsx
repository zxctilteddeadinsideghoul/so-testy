// WelcomePage Component (unchanged from previous implementation)
const WelcomePage = () => {
    return (
        <main className="flex-grow h-full w-full px-4 py-8">
            {/* Hero Section with Image Placeholder */}
            <section className="relative h-64 md:h-80 bg-cover bg-center mb-12 w-full"
                     style={{backgroundImage: `url('https://placehold.co/1200x400/007BFF/FFFFFF?text=Welcome+to+So+Testy ')`}}>
                <div className="absolute inset-0 bg-black opacity-30 flex flex-col items-center justify-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white text-center max-w-2xl">
                        Create, Take, and Share Interactive Tests
                    </h2>
                    <p className="mt-4 text-lg text-white text-center max-w-xl">
                        Whether you're a student, teacher, or quiz enthusiast, So Testy makes testing fun and effective.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <div className="container mx-auto">
                <section className="mb-16">
                    <h3 className="text-2xl font-bold text-gray-800 text-center mb-8">Create New Test</h3>
                    <div className="flex flex-wrap justify-center gap-6">
                        <button
                            className="px-8 py-4 bg-yellow-500 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-600 transition duration-300 transform hover:scale-105">
                            Start Creating
                        </button>
                    </div>
                </section>

                {/* Test Examples Section */}
                <section className="mb-16">
                    <h3 className="text-2xl font-bold text-gray-800 text-center mb-8">Popular Test Categories</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Example Card 1 */}
                        <div
                            className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105">
                            <img
                                src="https://placehold.co/400x250/4F46E5/FFFFFF?text=Math+Tests "
                                alt="Math Tests"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h4 className="text-xl font-semibold text-gray-800 mb-2">Math Tests</h4>
                                <p className="text-gray-600">Master math concepts with our interactive quizzes.</p>
                            </div>
                        </div>

                        {/* Example Card 2 */}
                        <div
                            className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105">
                            <img
                                src="https://placehold.co/400x250/10B981/FFFFFF?text=Language+Tests "
                                alt="Language Tests"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h4 className="text-xl font-semibold text-gray-800 mb-2">Language Tests</h4>
                                <p className="text-gray-600">Improve your language skills with fun challenges.</p>
                            </div>
                        </div>

                        {/* Example Card 3 */}
                        <div
                            className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105">
                            <img
                                src="https://placehold.co/400x250/F59E0B/FFFFFF?text=Science+Tests "
                                alt="Science Tests"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h4 className="text-xl font-semibold text-gray-800 mb-2">Science Tests</h4>
                                <p className="text-gray-600">Explore scientific concepts through engaging quizzes.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="mb-16">
                    <h3 className="text-2xl font-bold text-gray-800 text-center mb-8">Why Choose So Testy?</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Feature 1 */}
                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                            <div
                                className="w-16 h-16 mx-auto mb-4 bg-indigo-100 rounded-full flex items-center justify-center">
                                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor"
                                     viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                            </div>
                            <h4 className="text-xl font-semibold text-gray-800 mb-2">Easy Test Creation</h4>
                            <p className="text-gray-600">Create tests in minutes with our intuitive interface.</p>
                        </div>

                        {/* Feature 2 */}
                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                            <div
                                className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor"
                                     viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M13 10V3L4 14h7v7l9-11h-7z"/>
                                </svg>
                            </div>
                            <h4 className="text-xl font-semibold text-gray-800 mb-2">Interactive Quizzes</h4>
                            <p className="text-gray-600">Engage with dynamic questions and instant feedback.</p>
                        </div>

                        {/* Feature 3 */}
                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                            <div
                                className="w-16 h-16 mx-auto mb-4 bg-yellow-100 rounded-full flex items-center justify-center">
                                <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor"
                                     viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                                </svg>
                            </div>
                            <h4 className="text-xl font-semibold text-gray-800 mb-2">Share & Collaborate</h4>
                            <p className="text-gray-600">Share your tests and collaborate with others easily.</p>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default WelcomePage;