import { Link } from "react-router-dom";

function DetailPage() {
  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center p-6">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl text-center">
        <h1 className="text-3xl font-bold text-green-700 mb-4">Gaya Hidup Sehat</h1>
        <img
          src="/public/hidupsehat.jpg"
          alt="Hidup Sehat"
          className="rounded-lg shadow mb-6 w-full"
        />
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Gaya hidup sehat adalah pola hidup yang mendukung keseimbangan fisik, mental, dan emosional.
          Ini mencakup kebiasaan makan makanan bergizi, rutin berolahraga, tidur cukup, mengelola stres,
          dan menghindari kebiasaan buruk seperti merokok dan konsumsi alkohol. Dengan gaya hidup sehat,
          kita dapat meningkatkan kualitas hidup dan mencegah berbagai penyakit.
        </p>

        <Link
          to="/"
          className="inline-block px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
        >
          ← Kembali ke Kalkulator BMI
        </Link>
      </div>
    </div>
  );
}

export default DetailPage;
