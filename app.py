from gradcam import save_gradcam
from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing import image
import numpy as np
import os

app = Flask(__name__)
CORS(app)

UPLOAD_FOLDER = "uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

HEATMAP_FOLDER = "heatmaps"
os.makedirs(HEATMAP_FOLDER, exist_ok=True)

# Load trained model
model = load_model("model/pneumonia_model.h5")
print("\n===== MODEL LAYERS =====")

for layer in model.layers:
    print(layer.name)

@app.route("/")
def home():
    return jsonify({"message": "Backend Connected Successfully"})

@app.route("/heatmaps/<filename>")
def heatmaps(filename):
    return send_from_directory("heatmaps", filename)


@app.route("/predict", methods=["POST"])
def predict():

    print("=== Predict API Called ===")

    if "file" not in request.files:
        print("No file uploaded")
        return jsonify({"error": "No file uploaded"}), 400

    file = request.files["file"]
    print("Received file:", file.filename)

    filepath = os.path.join(UPLOAD_FOLDER, file.filename)
    file.save(filepath)
    print("Saved at:", filepath)

    img = image.load_img(filepath, target_size=(224, 224))
    img = image.img_to_array(img)
    img = img / 255.0
    img = np.expand_dims(img, axis=0)

    prediction = model.predict(img)
    #heatmap_path = save_gradcam(filepath, model)
   
    heatmap_path = ""

    confidence = float(prediction[0][0])

    if confidence > 0.5:
        result = "PNEUMONIA"
    else:
        result = "NORMAL"
        confidence = 1 - confidence

    print("Prediction:", result)
    print("Confidence:", confidence)

    return jsonify({
    "prediction": result,
    "confidence": round(confidence * 100, 2),
    "heatmap": ""
})

if __name__ == "__main__":
    app.run(debug=False)