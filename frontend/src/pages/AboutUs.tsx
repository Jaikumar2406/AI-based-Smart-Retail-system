import { Check, Leaf, Shield, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import storyBg from "@/assets/fashion-story-bg.jpg";
import teamPhoto from "@/assets/team-photo.jpg";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation - Same as Index */}
      <nav className="px-6 lg:px-12 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h1 className="font-display text-xl font-bold text-foreground">TrendZone</h1>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="/" className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors">Home</a>
            <a href="/#shop" className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors">Shop</a>
            <a href="/contact" className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors">Contact</a>
            <a href="/about" className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors">About Us</a>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-muted rounded-full transition-colors">
              <Leaf className="w-5 h-5 text-foreground" />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-96">
        <div className="absolute inset-0">
          <img 
            src={storyBg} 
            alt="Fashion Story" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/60"></div>
        </div>
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center max-w-3xl px-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-white">Our Story</h1>
            <p className="text-lg text-blue-100">Redefining fashion with sustainability and style</p>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="relative py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 sm:px-12 lg:px-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 lg:p-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">Our Journey</h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
            </div>
            
            <div className="prose prose-lg text-gray-600 max-w-3xl mx-auto">
              <p className="mb-6">
                At TrendZone, we believe in creating timeless pieces that not only look good but also do good for our planet. 
                Our journey began with a simple idea: to craft fashion that lasts, with minimal environmental impact and maximum style.
              </p>
              
              <p className="mb-6">
                Every piece in our collection is thoughtfully designed with eco-friendly materials and ethical manufacturing processes. 
                We're committed to reducing waste and promoting sustainable practices throughout our supply chain, because looking 
                good should never come at the cost of our planet.
              </p>
              
              <p className="mb-8">
                What started as a small team of passionate individuals has grown into a movement of conscious consumers and designers 
                who believe in making a difference. Together, we're redefining what it means to be fashionable in today's world.
              </p>
              
              <div className="flex justify-center">
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  Learn More About Our Mission
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="px-6 lg:px-12 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Our Mission */}
          <section className="mb-24">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-display font-bold mb-6">Our Mission</h2>
                <p className="text-muted-foreground mb-6">
                  At TrendZone, we believe that fashion should be both stylish and sustainable. Our mission is to provide 
                  high-quality, ethically-made clothing that doesn't compromise on design or the planet.
                </p>
                <p className="text-muted-foreground mb-8">
                  Founded in 2020, we've been on a journey to transform the fashion industry by prioritizing 
                  sustainability, fair labor practices, and timeless design.
                </p>
                <Button>Learn More About Our Process</Button>
              </div>
              <div className="relative rounded-lg overflow-hidden h-80">
                <img 
                  src={teamPhoto} 
                  alt="Our Team" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </section>

          {/* Our Values */}
          <section className="mb-24">
            <h2 className="text-3xl font-display font-bold text-center mb-16">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-card rounded-lg">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2">Sustainability</h3>
                <p className="text-muted-foreground">We use eco-friendly materials and processes to minimize our environmental impact.</p>
              </div>
              
              <div className="text-center p-6 bg-card rounded-lg">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2">Quality</h3>
                <p className="text-muted-foreground">Every piece is crafted with attention to detail and built to last.</p>
              </div>
              
              <div className="text-center p-6 bg-card rounded-lg">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2">Convenience</h3>
                <p className="text-muted-foreground">Fast shipping and easy returns to make your shopping experience seamless.</p>
              </div>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}
