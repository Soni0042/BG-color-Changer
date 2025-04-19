
import { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState("white");

  const colors = [
    { name: "Red", text: "white" },
    { name: "Blue", text: "white" },
    { name: "Green", text: "white" },
    { name: "Orange", text: "black" },
    { name: "Black", text: "white" },
    { name: "White", text: "black" },
    { name: "Brown", text: "white" },
    { name: "Pink", text: "black" },
    { name: "Violet", text: "white" },
    { name: "Lavender", text: "black" },
  ];

  return (
    <div
      className="w-full h-screen duration-300 transition-all"
      style={{ backgroundColor: color }}
    >
      <div className="fixed bottom-12 inset-x-0 flex justify-center px-4">
        <div className="flex flex-wrap justify-center gap-4 px-6 py-5 rounded-2xl backdrop-blur-md bg-white/20 border border-white/30 shadow-xl max-w-3xl w-full">
          
          {/* Color Buttons */}
          {colors.map(({ name, text }) => (
            <button
              key={name}
              onClick={() => setColor(name.toLowerCase())}
              className="px-5 py-2 rounded-full font-semibold capitalize transition-transform duration-200 hover:scale-110 hover:shadow-md"
              style={{
                backgroundColor: name.toLowerCase(),
                color: text,
              }}
            >
              {name}
            </button>
          ))}

          {/* 🎨 Color Picker */}
          <label className="flex items-center gap-2 px-5 py-2 rounded-full bg-white/30 text-black shadow-md hover:scale-105 transition-transform duration-200 cursor-pointer">
            🎨 Custom
            <input
              type="color"
              onChange={(e) => setColor(e.target.value)}
              className="w-6 h-6 p-0 border-none bg-transparent cursor-pointer"
            />
          </label>
        </div>
      </div>
    </div>
  );
}

export default App;


