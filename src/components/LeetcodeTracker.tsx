import React, { useState } from 'react';

interface LeetcodeProblem {
  problemId: string;
  dateSubmitted: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
}

const LeetcodeTracker: React.FC = () => {
  const [problemId, setProblemId] = useState<string>('');
  const [dateSubmitted, setDateSubmitted] = useState<string>('');
  const [difficulty, setDifficulty] = useState<'Easy' | 'Medium' | 'Hard'>('Easy');
  const [submittedProblems, setSubmittedProblems] = useState<LeetcodeProblem[]>([]);

  const handleAddProblem = () => {
    if (problemId && dateSubmitted) {
      const newProblem: LeetcodeProblem = {
        problemId,
        dateSubmitted,
        difficulty,
      };

      setSubmittedProblems((prevState) => [...prevState, newProblem]);

      // Reset input fields after adding the problem
      setProblemId('');
      setDateSubmitted('');
      setDifficulty('Easy');
    } else {
      alert('Please provide all details');
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl text-black font-bold text-center mb-6">Leetcode Problem Tracker</h1>

      <div className="space-y-6">
        <div className="flex flex-col space-y-2">
          <label htmlFor="problemId" className="font-medium text-gray-700">Problem ID:</label>
          <input
            id="problemId"
            type="text"
            value={problemId}
            onChange={(e) => setProblemId(e.target.value)}
            placeholder="e.g., 1"
            className="p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="dateSubmitted" className="font-medium text-gray-700">Date Submitted:</label>
          <input
            id="dateSubmitted"
            type="date"
            value={dateSubmitted}
            onChange={(e) => setDateSubmitted(e.target.value)}
            className="p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="difficulty" className="font-medium text-gray-700">Difficulty:</label>
          <select
            id="difficulty"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value as 'Easy' | 'Medium' | 'Hard')}
            className="p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>

        <button
          onClick={handleAddProblem}
          className="w-full p-3 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Add Problem
        </button>
      </div>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold text-gray-700">Submitted Problems</h2>
        <ul className="space-y-4 mt-4">
          {submittedProblems.map((problem, index) => (
            <li key={index} className="p-4 border border-gray-300 rounded-md shadow-sm">
              <div><strong>Problem ID:</strong> {problem.problemId}</div>
              <div><strong>Date Submitted:</strong> {problem.dateSubmitted}</div>
              <div><strong>Difficulty:</strong> {problem.difficulty}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LeetcodeTracker;
