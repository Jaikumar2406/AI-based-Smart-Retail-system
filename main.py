from fastapi import FastAPI, UploadFile, File
from fashion import predict_image
from database.curd import get_product_by_name,get_all_products,update_product_price
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {"status": "Backend running"}

@app.post("/predict")
async def predict_product(file: UploadFile = File(...)):
    image_bytes = await file.read()

    pred_class, confidence = predict_image(image_bytes)

    product = get_product_by_name(pred_class)

    if not product:
        return {
            "predicted_class": pred_class,
            "confidence": round(confidence, 4),
            "message": "Product not found in database"
        }

    return {
        "predicted_class": pred_class,
        "confidence": round(confidence, 4),
        "product": {
            "name": product.product_name,
            "category": product.category,
            "barcode": product.barcode,
            "price": product.price
        }
    }


@app.get("/seller/products")
def seller_view_products():
    products = get_all_products()
    return [
        {
            "id": p.id,
            "product_name": p.product_name,
            "price": p.price
        }
        for p in products
    ]


class PriceUpdate(BaseModel):
    product_id: int
    new_price: int


@app.put("/seller/update-price")
def seller_update_price(data: PriceUpdate):
    update_product_price(data.product_id, data.new_price)
    return {"message": "Price updated successfully"}