import React from "react";
import TopBreeds from "@/components/TopBreeds";
import {
  FaCheckCircle,
  FaLeaf,
  FaHeartbeat,
  FaBalanceScale,
} from "react-icons/fa";

const QurbaniTips = () => {
  return (
    <div className="bg-emerald-800 text-white py-12 px-4  mx-auto mt-5 w-full rounded-2xl">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-400">
            Qurbani Tips
          </h2>
          <p className="text-gray-300 mt-3 max-w-xl mx-auto">
            This is totally helps you 
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
          <div className="bg-sky-800 p-6 rounded-xl shadow hover:shadow-lg transition">
            <FaHeartbeat className="text-3xl text-red-400 mb-4" />
            <h3 className="font-bold text-lg mb-2">Physical Fitness</h3>
            <p className="text-gray-300 text-sm">
              Inspect the animal carefully to ensure it is active, has bright eyes, and shows no signs of physical injury.
            </p>
          </div>

          <div className="bg-sky-800 p-6 rounded-xl shadow hover:shadow-lg transition">
            <FaLeaf className="text-3xl text-green-400 mb-4" />
            <h3 className="font-bold text-lg mb-2">Natural Diet</h3>
            <p className="text-gray-300 text-sm">
              Provide the animal with organic fodder and fresh water, avoiding any harmful chemicals or growth injections
            </p>
          </div>

          <div className="bg-sky-800 p-6 rounded-xl shadow hover:shadow-lg transition">
            <FaCheckCircle className="text-3xl text-blue-400 mb-4" />
            <h3 className="font-bold text-lg mb-2">Maturity Check</h3>
            <p className="text-gray-300 text-sm">
              Confirm the animal's eligibility for Qurbani by checking its teeth and age according to religious guidelines.
            </p>
          </div>

          <div className="bg-sky-800 p-6 rounded-xl shadow hover:shadow-lg transition">
            <FaBalanceScale className="text-3xl text-yellow-400 mb-4" />
            <h3 className="font-bold text-lg mb-2">Market Research</h3>
            <p className="text-gray-300 text-sm">
              Compare prices across different sellers to ensure you are getting a reasonable deal based on the animal's weight and quality.
            </p>
          </div>

          <div className="bg-sky-800 p-6 rounded-xl shadow hover:shadow-lg transition ">
            <FaCheckCircle className="text-3xl text-purple-400 mb-4" />
            <h3 className="font-bold text-lg mb-2">Humane Treatment</h3>
            <p className="text-gray-300 text-sm">
              Keep the animal in a stress-free environment and treat it with compassion and kindness before the sacrifice.
            </p>
          </div>

          <div className="bg-sky-800 p-6 rounded-xl shadow hover:shadow-lg transition">
            <FaLeaf className="text-3xl text-teal-400 mb-4" />
            <h3 className="font-bold text-lg mb-2">Post-Sacrifice Hygiene</h3>
            <p className="text-gray-300 text-sm">
              Plan for immediate waste disposal and maintain a clean environment to ensure community health and safety.
            </p>
          </div>
        </div>
      </div>
      <div>
        <TopBreeds/>
    </div>
      
    </div>
    
  );
};

export default QurbaniTips;