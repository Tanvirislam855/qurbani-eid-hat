import React from "react";

const TopBreeds = () => {
  return (
    <div className="w-full rounded-3xl mx-auto px-4 py-12 bg-indigo-900 mt-5">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-white">
          Top Breeds for Qurbani
        </h2>
        <p className="text-gray-300 mt-3 max-w-2xl mx-auto">
          Explore the tips with your mentor
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        <div className="card bg-white text-black shadow-xl border border-gray-200 p-5">
          <h3 className="text-xl font-bold mb-2 text-black/90">
            Black Bengal Goat:
          </h3>
          <p className="text-sm text-black/70">
            A premium local breed famous for its superior meat quality and high demand across Bangladesh.
          </p>
        </div>

        <div className="card bg-white text-black shadow-xl border border-gray-200 p-5">
          <h3 className="text-xl font-bold mb-2 text-black/90">Sahiwal Cow</h3>
          <p className="text-sm text-black/70">
            Renowned for its robust build and excellent disease resistance, making it a top choice for both sacrifice and farming.
          </p>
        </div>

        <div className="card bg-white text-black shadow-xl border border-gray-200 p-5">
          <h3 className="text-xl font-bold mb-2 text-black/90">
            Jamunapari Goat
          </h3>
          <p className="text-sm text-black/70">
            A majestic breed recognized for its significant height and calm nature, offering high-yield meat production.
          </p>
        </div>

        <div className="card bg-white text-black shadow-xl border border-gray-200 p-5">
          <h3 className="text-xl font-bold mb-2 text-black/90">Deshi Cow</h3>
          <p className="text-sm text-black/70">
            The quintessential Bangladeshi breed, prized for its strength, organic growth, and perfect adaptation to the local climate.
          </p>
        </div>

        <div className="card bg-white text-black shadow-xl border border-gray-200 p-5">
          <h3 className="text-xl font-bold mb-2 text-black/90">Boer Goat</h3>
          <p className="text-sm text-black/70">
            An elite imported variety known for its rapid weight gain and world-class meat texture.
          </p>
        </div>

        <div className="card bg-white text-black shadow-xl border border-gray-200 p-5">
          <h3 className="text-xl font-bold mb-2 text-black/90">
            River Buffalo
          </h3>
          <p className="text-sm text-black/70">
            A powerful and heavy breed frequently chosen for its rich meat and significant presence in rural markets.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopBreeds;