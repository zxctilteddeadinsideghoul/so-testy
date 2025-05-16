import { useState } from 'react';

export default function TestSubmitMenu({test}) {
    const [tests, setTests] = useState(test);

    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [showResults, setShowResults] = useState(false);
    const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
    const [isEditing, setIsEditing] = useState(false);
    const [selectedTestId, setSelectedTestId] = useState(null);
    const [newTest, setNewTest] = useState({
        question: '',
        options: ['', '', '', ''],
        correctAnswer: ''
    });
    const [missingAnswers, setMissingAnswers] = useState([]);

    const handleAnswerChange = (questionId, answer) => {
        setSelectedAnswers(prev => ({
            ...prev,
            [questionId]: answer
        }));
        setMissingAnswers(prev => prev.filter(id => id !== questionId));
    };

    const handleSubmit = () => {
        console.log("submited")
    };


    const toggleEditMode = () => {
        setIsEditing(!isEditing);
        setSelectedTestId(null);
        setNewTest({ question: '', options: ['', '', '', ''], correctAnswer: '' });
    };

    const startEditingTest = (testId) => {
        const testToEdit = tests.find(test => test.id === testId);
        setSelectedTestId(testId);
        setNewTest({
            question: testToEdit.question,
            options: [...testToEdit.options],
            correctAnswer: testToEdit.correctAnswer
        });
    };

    const saveEditedTest = () => {
        const updatedTests = tests.map(test => {
            if (test.id === selectedTestId) {
                return {
                    ...test,
                    question: newTest.question,
                    options: newTest.options,
                    correctAnswer: newTest.correctAnswer
                };
            }
            return test;
        });
        setTests(updatedTests);
        setSelectedTestId(null);
    };

    const deleteTest = (testId) => {
        const updatedTests = tests.filter(test => test.id !== testId);
        setTests(updatedTests);
        if (selectedTestId === testId) {
            setSelectedTestId(null);
            setNewTest({ question: '', options: ['', '', '', ''], correctAnswer: '' });
        }
    };

    const addNewTest = () => {
        const newTestId = tests.length > 0 ? Math.max(...tests.map(t => t.id)) + 1 : 1;
        const newTestWithId = {
            id: newTestId,
            ...newTest
        };
        setTests([...tests, newTestWithId]);
        setNewTest({ question: '', options: ['', '', '', ''], correctAnswer: '' });
        setSelectedTestId(null);
    };

    const cancelEdit = () => {
        setSelectedTestId(null);
        setNewTest({ question: '', options: ['', '', '', ''], correctAnswer: '' });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="bg-gradient-to-r from-indigo-600 to-blue-600 p-6 text-white flex justify-between items-center">
                    <h1 className="text-3xl font-bold">So Testy</h1>
                    <button
                        onClick={toggleEditMode}
                        className={`px-4 py-2 rounded-lg transition-colors ${
                            isEditing
                                ? 'bg-yellow-600 hover:bg-yellow-700'
                                : 'bg-blue-600 hover:bg-blue-700'
                        }`}
                    >
                        {isEditing ? 'Завершить редактирование' : 'Редактировать'}
                    </button>
                </div>

                <div className="p-6">
                    {isEditing ? (
                        <div className="mb-8">
                            <h2 className="text-xl font-semibold text-gray-800 mb-4">Добавить новый тест</h2>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Вопрос</label>
                                    <input
                                        type="text"
                                        value={newTest.question}
                                        onChange={(e) => setNewTest({...newTest, question: e.target.value})}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Варианты ответов (4 штуки)</label>
                                    {newTest.options.map((option, index) => (
                                        <input
                                            key={index}
                                            type="text"
                                            value={option}
                                            onChange={(e) => {
                                                const newOptions = [...newTest.options];
                                                newOptions[index] = e.target.value;
                                                setNewTest({...newTest, options: newOptions});
                                            }}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    ))}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Правильный ответ</label>
                                    <select
                                        value={newTest.correctAnswer}
                                        onChange={(e) => setNewTest({...newTest, correctAnswer: e.target.value})}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    >
                                        <option value="">Выберите вариант</option>
                                        {newTest.options.map((option, index) => (
                                            <option key={index} value={option}>{option}</option>
                                        ))}
                                    </select>
                                </div>

                                <div className="flex space-x-3">
                                    <button
                                        onClick={addNewTest}
                                        className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors"
                                    >
                                        Добавить тест
                                    </button>
                                    <button
                                        onClick={cancelEdit}
                                        className="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-700 font-medium rounded-lg transition-colors"
                                    >
                                        Отмена
                                    </button>
                                </div>
                            </div>
                        </div>
                    ) : null}

                    {tests.map(test => (
                        <div key={test.id} className="mb-8 border-b border-gray-200 pb-6 last:border-0">
                            <div className="flex justify-between items-start mb-4">
                                <h2 className="text-xl font-semibold text-gray-800">
                                    {test.question}
                                    {showResults && missingAnswers.includes(test.id) && (
                                        <span className="ml-2 text-red-500 text-sm font-medium">
                      ❌ Не выбран ответ
                    </span>
                                    )}
                                </h2>
                                {isEditing && (
                                    <div className="flex space-x-2">
                                        <button
                                            onClick={() => startEditingTest(test.id)}
                                            className="p-1 text-blue-600 hover:bg-blue-100 rounded-full transition-colors"
                                            title="Редактировать"
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                            </svg>
                                        </button>
                                        <button
                                            onClick={() => deleteTest(test.id)}
                                            className="p-1 text-red-600 hover:bg-red-100 rounded-full transition-colors"
                                            title="Удалить"
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg>
                                        </button>
                                    </div>
                                )}
                            </div>

                            {selectedTestId === test.id ? (
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Вопрос</label>
                                        <input
                                            type="text"
                                            value={newTest.question}
                                            onChange={(e) => setNewTest({...newTest, question: e.target.value})}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Варианты ответов (4 штуки)</label>
                                        {newTest.options.map((option, index) => (
                                            <input
                                                key={index}
                                                type="text"
                                                value={option}
                                                onChange={(e) => {
                                                    const newOptions = [...newTest.options];
                                                    newOptions[index] = e.target.value;
                                                    setNewTest({...newTest, options: newOptions});
                                                }}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-lg mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        ))}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Правильный ответ</label>
                                        <select
                                            value={newTest.correctAnswer}
                                            onChange={(e) => setNewTest({...newTest, correctAnswer: e.target.value})}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        >
                                            <option value="">Выберите вариант</option>
                                            {newTest.options.map((option, index) => (
                                                <option key={index} value={option}>{option}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="flex space-x-3">
                                        <button
                                            onClick={saveEditedTest}
                                            className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors"
                                        >
                                            Сохранить
                                        </button>
                                        <button
                                            onClick={cancelEdit}
                                            className="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-700 font-medium rounded-lg transition-colors"
                                        >
                                            Отмена
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <div className="space-y-3">
                                    {test.options.map((option, index) => {
                                        const userAnswer = selectedAnswers[test.id];
                                        const isCorrect = showResults && option === test.correctAnswer;
                                        const isWrong = showResults && userAnswer === option && option !== test.correctAnswer;
                                        const isMissing = showResults && userAnswer === undefined;

                                        return (
                                            <label
                                                key={index}
                                                className={`flex items-center p-3 rounded-lg cursor-pointer transition-all ${
                                                    isCorrect
                                                        ? 'bg-green-100 border border-green-500'
                                                        : isWrong || isMissing
                                                            ? 'bg-red-100 border border-red-500'
                                                            : 'bg-gray-50 hover:bg-gray-100'
                                                }`}
                                            >
                                                <div className="flex items-center w-full justify-between">
                                                    <div className="flex items-center">
                                                        <input
                                                            type="radio"
                                                            name={`question-${test.id}`}
                                                            value={option}
                                                            checked={userAnswer === option}
                                                            onChange={() => handleAnswerChange(test.id, option)}
                                                            disabled={showResults}
                                                            className="w-5 h-5 text-blue-600 focus:ring-blue-500"
                                                        />
                                                        <span className={`ml-3 text-gray-700 ${
                                                            isCorrect ? 'font-medium text-green-800' :
                                                                (isWrong || isMissing) ? 'font-medium text-red-800' : ''
                                                        }`}>
                              {option}
                            </span>
                                                    </div>

                                                    {(isCorrect || isWrong || isMissing) && (
                                                        <div className="ml-4">
                                                            {isCorrect ? (
                                                                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                                </svg>
                                                            ) : (
                                                                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                                                </svg>
                                                            )}
                                                        </div>
                                                    )}
                                                </div>
                                            </label>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    ))}

                    {!showResults && !isEditing ? (
                        <button
                            onClick={handleSubmit}
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                        >
                            Submit
                        </button>
                    ) : null}
                </div>
            </div>
        </div>
    );
}