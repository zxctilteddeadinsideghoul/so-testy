import { useState } from "react";
import TestSettingsChoice from "./Forms/TestSettingsChoice.jsx";
import TestSubmitMenu from "./Forms/TestSubmitMenu.jsx"; // Импортируй, если есть

export const TestCreating = () => {
    const [step, setStep] = useState("settings"); // or "submit"
    const [testData, setTestData] = useState(null);

    const handleTestSubmit = (data) => {
        setTestData(data);
        setStep("submit");
    };

    return (
        <>
            {step === "settings" && <TestSettingsChoice onSubmitSuccess={handleTestSubmit} />}
            {step === "submit" && <TestSubmitMenu test={testData} />}
        </>
    );
};
