import { useState } from "react";
import { Link } from "react-router-dom";

function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState("");

  const calculateBMI = () => {
    const h = Number(height) / 100;
    const w = Number(weight);
    const result = w / (h * h);
    setBmi(result.toFixed(2));

    if (result < 18.5) setCategory("Kurus");
    else if (result < 24.9) setCategory("Normal");
    else if (result < 29.9) setCategory("Gemuk");
    else setCategory("Obesitas");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 to-blue-200 flex flex-col items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md text-center">
        <h1 className="text-3xl font-bold mb-6 text-blue-700">Kalkulator BMI</h1>

        <input
          type="number"
          placeholder="Berat (kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className="w-full mb-4 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="number"
          placeholder="Tinggi (cm)"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          className="w-full mb-4 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="number"
          placeholder="Umur"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="w-full mb-4 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          className="w-full mb-4 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="">Pilih Gender</option>
          <option value="Laki-laki">Laki-laki</option>
          <option value="Perempuan">Perempuan</option>
        </select>

        <button
          onClick={calculateBMI}
          className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
        >
          Hitung
        </button>

        {bmi && (
          <div className="mt-6 text-left bg-blue-50 p-4 rounded-md">
            <p className="font-semibold">BMI: <span className="text-blue-700">{bmi}</span></p>
            <p className="font-semibold">Kategori: <span className="text-blue-700">{category}</span></p>
            <p className="font-semibold">Umur: <span className="text-blue-700">{age}</span></p>
            <p className="font-semibold">Gender: <span className="text-blue-700">{gender}</span></p>
          </div>
        )}

        <Link to="/detail" className="text-blue-600 underline mt-6 inline-block">
          Lihat Tips Hidup Sehat
        </Link>
      </div>
    </div>
  );
}

export default App;
