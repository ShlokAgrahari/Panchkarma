
import React, { useState, useRef, useEffect } from 'react';
import * as tf from '@tensorflow/tfjs';
import '@tensorflow/tfjs-backend-webgl';
import food_classes_og from "../utils/food_classes.json";
import ImageUploader from '../components/imageUploader';
import PredictionResult from '../components/predictionResult';
import { fetchNutrition } from '../utils/nutritionApi';

const MODEL_PATH = '/models/food101/model.json';


const Nutritionist = () => {
  const [image, setImage] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [nutrients, setNutrients] = useState([]);
  const [inferenceTime, setInferenceTime] = useState(null);
  const [modelLoading, setModelLoading] = useState(true);
  const [modelError, setModelError] = useState(null);
  const modelRef = useRef(null);

  useEffect(() => {
    async function loadModel() {
      setModelLoading(true);
      setModelError(null);
      try {
        modelRef.current = await tf.loadGraphModel(MODEL_PATH);
      } catch (err) {
        console.error(err);
        setModelError('Failed to load model. Please check your model files and path.');
      } finally {
        setModelLoading(false);
      }
    }
    loadModel();
  }, []);

  const handleUpload = async (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file || !modelRef.current) return;
    const imgURL = URL.createObjectURL(file);
    setImage(imgURL);

    const img = new window.Image();
    img.src = imgURL;
    img.onload = async () => {
      const tensor = tf.browser.fromPixels(img)
        .resizeBilinear([224, 224])
        .toFloat()
        .expandDims();
      const start = performance.now();
      const predTensor = modelRef.current.predict(tensor);
      const end = performance.now();
      setInferenceTime(Math.round(end - start));
      const predArr = predTensor.dataSync();
      const bestIdx = predArr.indexOf(Math.max(...predArr));
      const foodName = Object.keys(food_classes_og).find(
        key => food_classes_og[key] === bestIdx
      );
      const prettyName = foodName ? foodName.replace(/_/g, ' ') : 'Unknown';
      setPrediction(prettyName);
        if (prettyName && prettyName !== 'Unknown') {
        const nutrition = await fetchNutrition(prettyName);
        setNutrients(nutrition);
      } else {
        setNutrients([]);
      }
    };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-green-50 w-full flex flex-col items-center justify-center py-12 px-4">
      <div className="bg-white rounded-xl shadow-lg border border-gray-200 max-w-xl w-full p-8">
  <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">Food & Nutrition Insight</h2>
        {modelLoading && <p className="text-lg text-gray-600 text-center">Loading model...</p>}
        {modelError && <p className="text-lg text-red-500 text-center">{modelError}</p>}
        {!modelLoading && !modelError && <ImageUploader onUpload={handleUpload} />}
        <PredictionResult image={image} prediction={prediction} inferenceTime={inferenceTime} nutrients={nutrients} />
      </div>
    </div>
  );
};

export default Nutritionist;
