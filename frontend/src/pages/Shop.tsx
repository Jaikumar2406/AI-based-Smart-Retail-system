import { useState, useRef, ChangeEvent } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, Upload, X, ShoppingBag, Star } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

// Import sample fashion images
import fashion1 from "@/assets/fashion-orange.jpg";
import fashion3 from "@/assets/fashion-yellow.jpg";
import tshirt from "@/assets/istockphoto-483960103-612x612.jpg";
import coat from "@/assets/s-l400.jpg";
import shirt from "@/assets/images.jpg";
import bag from "@/assets/bag.jpg";
import sneaker from "@/assets/Sneaker.jpg";

const sampleFashionItems = [
  { id: 1, name: "Summer Dress", price: "$49.99", image: fashion1, rating: 4.5 },
  { id: 2, name: "Classic T-Shirt", price: "$24.99", image: tshirt, rating: 4.8 },
  { id: 3, name: "Elegant Coat", price: "$89.99", image: coat, rating: 4.9 },
  { id: 4, name: "Casual Shirt", price: "$39.99", image: shirt, rating: 4.6 },
  { id: 5, name: "Designer Handbag", price: "$59.99", image: bag, rating: 4.7 },
  { id: 6, name: "Sporty Sneakers", price: "$79.99", image: sneaker, rating: 4.8 },
];

interface Product {
  name: string;
  category: string;
  barcode: string;
  price: number;
}

interface PredictionResult {
  predicted_class: string;
  confidence: number;
  product?: Product;
  message?: string;
}

const Shop = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [prediction, setPrediction] = useState<PredictionResult | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Check if file is an image
    if (!file.type.match('image.*')) {
      toast({
        title: "Invalid file type",
        description: "Please upload an image file (JPEG, PNG, etc.)",
        variant: "destructive",
      });
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setSelectedImage(reader.result as string);
      setPrediction(null);
    };
    reader.readAsDataURL(file);
  };

  const handlePredict = async () => {
    if (!selectedImage) return;
    
    setIsLoading(true);
    try {
      // Convert base64 to blob
      const base64Data = selectedImage.split(',')[1];
      const byteString = atob(base64Data);
      const mimeString = selectedImage.split(':')[1].split(';')[0];
      
      const arrayBuffer = new ArrayBuffer(byteString.length);
      const intArray = new Uint8Array(arrayBuffer);
      
      for (let i = 0; i < byteString.length; i++) {
        intArray[i] = byteString.charCodeAt(i);
      }
      
      const blob = new Blob([intArray], { type: mimeString });
      const formData = new FormData();
      formData.append('file', blob, 'upload.jpg');

      const response = await fetch('https://ai-based-smart-retail-system.onrender.com/predict', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.detail || 'Failed to get prediction');
      }

      const result = await response.json();
      setPrediction({
        predicted_class: result.predicted_class,
        confidence: result.confidence,
        product: result.product,
        message: result.message
      });
      
      toast({
        title: "Prediction successful!",
        description: `Detected: ${result.predicted_class} (${(result.confidence * 100).toFixed(2)}% confidence)`,
      });
    } catch (error: any) {
      console.error('Error predicting:', error);
      toast({
        title: "Prediction Error",
        description: error.message || "Failed to get prediction",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const removeImage = () => {
    setSelectedImage(null);
    setPrediction(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const renderPredictionResult = () => {
    if (!prediction) return null;
    
    return (
      <Card className="mt-6 w-full max-w-md">
        <CardHeader>
          <CardTitle>Prediction Result</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground">Class</p>
              <p className="font-medium capitalize">{prediction.predicted_class}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Confidence</p>
              <p className="font-medium">{(prediction.confidence * 100).toFixed(2)}%</p>
            </div>
            {prediction.product && (
              <div>
                <p className="text-sm text-muted-foreground">Product Details</p>
                <div className="mt-2 space-y-1">
                  <p>Name: {prediction.product.name}</p>
                  <p>Category: {prediction.product.category}</p>
                  <p>Price: {prediction.product.price}</p>
                </div>
              </div>
            )}
            {prediction.message && (
              <p className="text-sm text-yellow-600">{prediction.message}</p>
            )}
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="px-6 lg:px-12 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h1 className="font-display text-xl font-bold text-foreground">TrendZone</h1>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="/" className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors">Home</a>
            <a href="/shop" className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors">Shop</a>
            <a href="/contact" className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors">Contact</a>
            <a href="/about" className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors">About Us</a>
          </div>
        </div>
      </nav>

      <main className="px-4 sm:px-6 py-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-display font-bold mb-3">Fashion Classifier</h1>
            <p className="text-muted-foreground max-w-xl mx-auto text-sm">
              Upload an image of a clothing item and our AI will classify it for you.
            </p>
          </div>

          {/* Sample Fashion Items */}
          <div className="mb-10">
            <h2 className="text-xl font-bold mb-4 flex items-center justify-center gap-2">
              <ShoppingBag className="h-5 w-5" />
              Featured Items
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
              {sampleFashionItems.map((item) => (
                <div 
                  key={item.id} 
                  className="group relative overflow-hidden rounded-lg border border-border bg-card h-full flex flex-col hover:shadow-md transition-shadow"
                  onClick={() => {
                    setSelectedImage(item.image);
                    setPrediction(null);
                  }}
                >
                  <div className="relative pt-[100%] w-full overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="absolute inset-0 h-full w-full object-cover transition-all duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-foreground">{item.name}</h3>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-lg font-bold text-primary">{item.price}</span>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm text-muted-foreground">{item.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upload Section */}
          <div className="bg-card rounded-xl border border-border p-6 mb-8">
            <div className="text-center mb-6">
              <h2 className="text-xl font-bold mb-2">Try It Yourself</h2>
              <p className="text-muted-foreground text-sm">
                Upload your own image or click on any item above to try our fashion classifier.
              </p>
            </div>

            <div className="flex flex-col items-center">
              {selectedImage ? (
                <div className="relative w-full max-w-md">
                  <img
                    src={selectedImage}
                    alt="Preview"
                    className="w-full h-64 object-contain rounded-lg border border-border"
                  />
                  <button
                    onClick={removeImage}
                    className="absolute -top-2 -right-2 bg-background rounded-full p-1 shadow-md hover:bg-muted transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              ) : (
                <div 
                  className="border-2 border-dashed border-muted-foreground/30 rounded-lg p-8 w-full max-w-md text-center cursor-pointer hover:border-primary/50 transition-colors"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <div className="flex flex-col items-center justify-center space-y-2">
                    <Upload className="h-10 w-10 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium text-foreground">Click to upload</span> or drag and drop
                    </p>
                    <p className="text-xs text-muted-foreground">
                      JPEG, PNG up to 5MB
                    </p>
                  </div>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageUpload}
                  />
                </div>
              )}

              <div className="mt-6 flex gap-4 w-full max-w-md">
                <Button
                  variant="outline"
                  onClick={() => {
                    setSelectedImage(null);
                    setPrediction(null);
                    if (fileInputRef.current) {
                      fileInputRef.current.value = '';
                    }
                  }}
                  disabled={!selectedImage}
                  className="flex-1"
                >
                  Clear
                </Button>
                <Button
                  onClick={handlePredict}
                  disabled={!selectedImage || isLoading}
                  className={`flex-1 transition-colors ${!selectedImage ? 'opacity-50 cursor-not-allowed' : 'hover:bg-primary/90'}`}
                  size="lg"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Predicting...
                    </div>
                  ) : (
                    'Predict'
                  )}
                </Button>
              </div>

              {renderPredictionResult()}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Shop;
