## 📌 Project Overview
This project is an AI-powered Smart Retail system designed for the fashion domain.  
It automatically identifies fashion products from images and provides real-time product details.

The system is built for **two types of users**:
- **Seller (Admin)**
- **Customer (User)**

The main objective is to reduce manual product identification in retail stores and enhance the customer shopping experience using AI and Computer Vision.

---

## 👥 User Roles

### 👤 Customer (User)
The customer can:
- Upload or capture an image of a fashion product
- Get instant product classification
- View prediction confidence
- See product details such as:
  - Product name
  - Category
  - Price
- Experience a clean and premium user interface

⚠️ Customers **cannot** modify product information.

---

### 🧑‍💼 Seller (Admin)
The seller has special access to:
- Add new products to the database
- Update product prices
- Update product details
- Manage product inventory

⚠️ Only the seller is authorized to change or update product prices.

---

## ⚙️ How the System Works

1. User uploads an image of a fashion product  
2. The image is processed by a trained deep learning model  
3. The model predicts the product class with a confidence score  
4. Backend fetches product details from the database  
5. The final result is displayed in a smart retail interface  

---

## 🧠 Technology Stack

- **Python**
- **Deep Learning & Computer Vision**
- **Transfer Learning (CNN models)**
- **FastAPI** – Backend API
- **Database** – Product information storage
- **LLM Integration** – UI and navigation intelligence
- **Three.js** – Premium 3D UI enhancements

---

## 📦 API Response Example

```json
{
  "predicted_class": "Hoodie",
  "confidence": 0.9724,
  "product": {
    "name": "Premium Hoodie",
    "category": "Upper Wear",
    "barcode": "HD12345",
    "price": 1999
  }
}
```


<img width="1919" height="978" alt="Screenshot 2026-01-20 221213" src="https://github.com/user-attachments/assets/2ee7589f-e778-48cb-aea5-a2241598c676" />


<img width="1915" height="976" alt="Screenshot 2026-01-20 223043" src="https://github.com/user-attachments/assets/d7ecf9ec-03f3-4b17-a631-834a793b5471" />

## Backend
<img width="1915" height="957" alt="Screenshot 2026-01-20 221240" src="https://github.com/user-attachments/assets/9fb3808c-74e5-499d-ac41-2fb5db626149" />
<img width="1919" height="976" alt="Screenshot 2026-01-20 223148" src="https://github.com/user-attachments/assets/8f6a2eb5-9d74-46bc-8f4d-fd1b1b56cc87" />


