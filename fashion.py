import numpy as np
from tensorflow.keras.utils import load_img, img_to_array
from tensorflow.keras.models import load_model
from io import BytesIO
from PIL import Image

model = load_model("fashion.h5")

class_name = [
    'Angle boot', 'Bag', 'Coat', 'Dress', 'Pullover',
    'Sandal', 'Shirt', 'Sneaker', 'T-shirt', 'Trouser'
]

def predict_image(
    image_bytes,
    img_size=(128, 128),
    normalize=True
):
    """
    Predict single class from image bytes (FastAPI compatible)
    """

    img = Image.open(BytesIO(image_bytes)).convert("RGB")
    img = img.resize(img_size)

    img_array = img_to_array(img)

    if normalize:
        img_array = img_array / 255.0

    img_array = np.expand_dims(img_array, axis=0)

    preds = model.predict(img_array, verbose=0)
    pred_index = np.argmax(preds)
    confidence = float(preds[0][pred_index])
    pred_class = class_name[pred_index]

    return pred_class, confidence
