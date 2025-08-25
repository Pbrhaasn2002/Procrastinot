import React from "react";
import FlashcardQuiz from "../components/Flashcards/FlashcardQuiz";

const Flashcards = () => {
  return (
    <div className="pt-24 bg-primary min-h-screen text-white">
      <h1 className="text-3xl font-bold text-center mb-6">Flashcard Quiz</h1>
      <FlashcardQuiz />
    </div>
  );
};

export default Flashcards;
