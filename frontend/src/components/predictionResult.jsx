
function PredictionResult({ image, prediction, inferenceTime, nutrients }) {
  return (
    <div className="mt-6 flex flex-col items-center">
      {image && (
        <div className="mb-4">
          <img src={image} alt="Uploaded" className="rounded-xl shadow-md max-w-xs mx-auto" />
        </div>
      )}
      {prediction && (
        <div className="bg-green-50 rounded-lg p-4 shadow mb-4 w-full text-center">
          <h3 className="text-xl font-semibold text-green-700 mb-2">Food Prediction</h3>
          <div className="text-lg font-bold text-gray-900 mb-1">{prediction}</div>
          {inferenceTime && <p className="text-sm text-gray-500"> Predicted in : {inferenceTime} ms</p>}
        </div>
      )}
      {nutrients && nutrients.length > 0 && (
        <div className="bg-amber-50 rounded-lg p-4 shadow w-full mt-2">
          <h3 className="text-lg font-semibold text-amber-700 mb-2">Nutritional Profile</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-green-200 rounded-lg">
              <thead>
                <tr>
                  <th className="px-3 py-2 border-b border-green-200 text-left text-sm font-semibold text-green-800">Name</th>
                  <th className="px-3 py-2 border-b border-green-200 text-left text-sm font-semibold text-green-800">Amount</th>
                  <th className="px-3 py-2 border-b border-green-200 text-left text-sm font-semibold text-green-800">Unit</th>
                </tr>
              </thead>
              <tbody>
                {nutrients.map((nutrient, idx) => (
                  <tr key={idx} className="hover:bg-green-100">
                    <td className="px-3 py-2 border-b border-green-100 text-gray-700">{nutrient.nutrientName}</td>
                    <td className="px-3 py-2 border-b border-green-100 text-gray-700">{nutrient.value}</td>
                    <td className="px-3 py-2 border-b border-green-100 text-gray-700">{nutrient.unitName}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

export default PredictionResult;