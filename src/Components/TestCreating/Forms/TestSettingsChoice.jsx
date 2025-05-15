import React, { useState } from "react";
import { buildCurl } from "../Actions/Request";

export default function TestSettingsChoice() {
	const [selectedSubject, setSelectedSubject] = useState("English");
	const [customTopic, setCustomTopic] = useState("");
	const [selectedDifficulty, setSelectedDifficulty] = useState("");
	const [questionsCount, setQuestionsCount] = useState(5);
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [testResult, setTestResult] = useState(null);
	const [error, setError] = useState(null);

	const subjects = [
		"English",
		"Math",
		"Science",
		"History",
		"Literature",
		"Programming",
		"Geography",
		"Economics",
		"Philosophy",
	];

	const difficultyLevels = {
		English: ["A1", "A2", "B1", "B2", "C1", "C2"],
		default: ["Easy", "Medium", "Hard"],
	};

	const placeholders = {
		English: "e.g. Past tenses, Vocabulary, Reading comprehension",
		Math: "e.g. Algebra, Calculus, Geometry",
		Science: "e.g. Biology, Chemistry, Physics",
		History: "e.g. World Wars, Ancient Civilizations, Modern History",
		Literature: "e.g. Shakespeare, Poetry Analysis, Literary Devices",
		Programming: "e.g. JavaScript, Python, Algorithms",
		Geography: "e.g. Climate Zones, Map Reading, Cultural Regions",
		Economics: "e.g. Microeconomics, Macroeconomics, Financial Markets",
		Philosophy: "e.g. Ethics, Metaphysics, Political Philosophy",
	};

	const handleRequest = async () => {
		const prompt = `Create a test with the following parameters:
      Subject: ${selectedSubject}
      Topic: ${customTopic}
      Difficulty: ${selectedDifficulty}
      Number of questions: ${questionsCount}
      
      The format of each question should include:
      - The question itself
      - Answer options (if required)
      
      The test should match the specified difficulty level and be relevant to the given topic.`;

		const API_KEY =
			"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";
		const API_URL = "https://openrouter.ai/api/v1/chat/completions ";

		try {
			setIsLoading(true);
			setError(null);

			const response = await fetch(API_URL, {
				method: "POST",
				headers: {
					Authorization: `Bearer ${API_KEY}`,
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					model: "qwen/qwen-2.5-72b-instruct:free",
					messages: [
						{
							role: "user",
							content: prompt,
						},
					],
				}),
			});

			if (!response.ok) {
				throw new Error(`Network error: ${response.status}`);
			}

			const data = await response.json();

			// Assuming the AI response is in data.choices[0].message.content
			setTestResult(data.choices[0].message.content);
			setIsSubmitted(true);
			console.log(response);
			return data;
		} catch (error) {
			console.error("Error occurred:", error);
			setError(`Failed to load test. ${error.message}`);
			return null;
		} finally {
			setIsLoading(false);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (
			selectedSubject &&
			customTopic.trim() &&
			selectedDifficulty &&
			questionsCount >= 2
		) {
			setIsSubmitted(true);
			{
				// Debug
				console.log("Selected Subject:", selectedSubject);
				console.log("Topic:", customTopic);
				console.log("Difficulty:", selectedDifficulty);
				console.log("Number of Tests:", questionsCount);
			}

			handleRequest();
			if (!isLoading) {
				console.log("not loading anymore");
				console.log(testResult);
			}
		}
	};

	const getDifficultyOptions = () => {
		return difficultyLevels[selectedSubject] || difficultyLevels.default;
	};

	return (
		<div className="min-h-screen bg-gradient-to-br from-indigo-900 to-blue-800 flex items-center justify-center p-4">
			<div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 transform transition-all duration-300 hover:scale-105">
				<h1 className="text-3xl font-bold text-indigo-700 mb-2">
					Select Test Parameters
				</h1>
				<p className="text-gray-600 mb-8">
					Choose subject, topic, and difficulty level for automated test
					generation
				</p>

				<form onSubmit={handleSubmit} className="space-y-6">
					<div>
						<label
							htmlFor="subject"
							className="block text-sm font-medium text-gray-700 mb-2"
						>
							Select Subject
						</label>
						<div className="relative">
							<select
								id="subject"
								value={selectedSubject}
								onChange={(e) => {
									setSelectedSubject(e.target.value);
									setCustomTopic("");
									setSelectedDifficulty("");
								}}
								className="block w-full pl-4 pr-10 py-3 text-base border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 rounded-lg appearance-none bg-gray-50"
								required
							>
								<option value="" disabled>
									Select a subject
								</option>
								{subjects.map((subject) => (
									<option key={subject} value={subject}>
										{subject}
									</option>
								))}
							</select>
							<div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
								<svg
									className="h-5 w-5 text-gray-400"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path
										fillRule="evenodd"
										d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
										clipRule="evenodd"
									/>
								</svg>
							</div>
						</div>
					</div>

					<div>
						<label
							htmlFor="custom-topic"
							className="block text-sm font-medium text-gray-700 mb-2"
						>
							Enter Custom Topic
						</label>
						<input
							type="text"
							id="custom-topic"
							value={customTopic}
							onChange={(e) => setCustomTopic(e.target.value)}
							placeholder={placeholders[selectedSubject]}
							className="block w-full pl-4 pr-4 py-3 text-base border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 rounded-lg bg-gray-50"
							required
						/>
					</div>

					<div>
						<label className="block text-sm font-medium text-gray-700 mb-2">
							Difficulty Level
						</label>
						<div className="grid grid-cols-3 gap-3">
							{getDifficultyOptions().map((level) => {
								const colors = {
									A1: "bg-green-600",
									A2: "bg-yellow-600",
									B1: "bg-blue-500",
									B2: "bg-indigo-700",
									C1: "bg-purple-600",
									C2: "bg-pink-600",
									Easy: "bg-green-600",
									Medium: "bg-yellow-600",
									Hard: "bg-red-600",
								};

								return (
									<button
										key={level}
										type="button"
										onClick={() => setSelectedDifficulty(level)}
										className={`px-4 py-2 text-sm font-medium text-white rounded-lg transition-all transform hover:scale-105 focus:outline-none ${
											selectedDifficulty === level
												? `${colors[level]} shadow-lg`
												: "bg-gray-200 text-gray-700 hover:bg-gray-300"
										}`}
									>
										{level}
									</button>
								);
							})}
						</div>
					</div>

					<div>
						<label
							htmlFor="questions-count"
							className="block text-sm font-medium text-gray-700 mb-2"
						>
							Number of Questions (2-20)
						</label>
						<div className="flex items-center space-x-4">
							<input
								type="range"
								id="questions-count"
								min="2"
								max="20"
								value={questionsCount}
								onChange={(e) => setQuestionsCount(parseInt(e.target.value))}
								className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
							/>
							<span className="w-12 text-center font-medium text-gray-700">
								{questionsCount}
							</span>
						</div>
						<div className="mt-1 text-xs text-gray-500">
							Generate between 2 to 20 tests for this topic
						</div>
					</div>

					<button
						type="submit"
						disabled={
							!selectedSubject ||
							!customTopic.trim() ||
							!selectedDifficulty ||
							questionsCount < 2
						}
						className={`w-full py-3 px-4 rounded-lg text-white font-medium transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
							selectedSubject &&
							customTopic.trim() &&
							selectedDifficulty &&
							questionsCount >= 2
								? "bg-blue-500 hover:bg-indigo-700"
								: "bg-gray-400 cursor-not-allowed"
						}`}
					>
						Start Test
					</button>
				</form>

				{isSubmitted && (
					<div className="mt-6 p-4 bg-blue-50 rounded-lg text-blue-800 text-center animate-fadeIn">
						<p className="font-medium">Test started! You selected:</p>
						<p className="mt-1">
							Subject: <span className="font-bold">{selectedSubject}</span>
						</p>
						<p className="mt-1">
							Topic: <span className="font-bold">{customTopic}</span>
						</p>
						<p className="mt-1">
							Difficulty:{" "}
							<span className="font-bold">{selectedDifficulty}</span>
						</p>
						<p className="mt-1">
							Number of Tests:{" "}
							<span className="font-bold">{questionsCount}</span>
						</p>
					</div>
				)}
			</div>
		</div>
	);
}
