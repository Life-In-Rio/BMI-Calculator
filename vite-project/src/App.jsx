import { useState } from "react";

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
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Kalkulator BMI</h1>

      <input
        type="number"
        placeholder="Berat (kg)"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        style={{ margin: "10px", padding: "8px" }}
      />
      <input
        type="number"
        placeholder="Tinggi (cm)"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
        style={{ margin: "10px", padding: "8px" }}
      />
      <input
        type="number"
        placeholder="Umur"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        style={{ margin: "10px", padding: "8px" }}
      />
      <select
        value={gender}
        onChange={(e) => setGender(e.target.value)}
        style={{ margin: "10px", padding: "8px" }}
      >
        <option value="">Pilih Gender</option>
        <option value="Laki-laki">Laki-laki</option>
        <option value="Perempuan">Perempuan</option>
      </select>
      <br />
      <button onClick={calculateBMI} style={{ padding: "10px 20px" }}>
        Hitung
      </button>

      {bmi && (
        <div style={{ marginTop: "20px" }}>
          <p><strong>BMI:</strong> {bmi}</p>
          <p><strong>Kategori:</strong> {category}</p>
          <p><strong>Umur:</strong> {age}</p>
          <p><strong>Gender:</strong> {gender}</p>
        </div>
      )}
    </div>
  );
}

export default App;
