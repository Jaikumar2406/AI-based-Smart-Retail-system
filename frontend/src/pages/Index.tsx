import { Search, ShoppingBag, Play, ArrowRight, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Import fashion images
import fashionOrange from "@/assets/fashion-orange.jpg";
import fashionGreen from "@/assets/fashion-green.jpg";
import fashionYellow from "@/assets/fashion-yellow.jpg";
import fashionWhite from "@/assets/fashion-white.jpg";
import fashionTeal from "@/assets/fashion-teal.jpg";
import fashionGreenPortrait from "@/assets/fashion-green-portrait.jpg";
import storyBg from "@/assets/fashion-story-bg.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="px-6 lg:px-12 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="font-display text-xl font-bold text-foreground hover:opacity-80 transition-opacity">TrendZone</Link>
          
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors">Home</Link>
            <Link to="/shop" className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors">Shop</Link>
            <Link to="/contact" className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors">Contact</Link>
            <Link to="/about" className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors">About Us</Link>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-muted rounded-full transition-colors">
              <Search className="w-5 h-5 text-foreground" />
            </button>
            <button className="p-2 hover:bg-muted rounded-full transition-colors">
              <ShoppingBag className="w-5 h-5 text-foreground" />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="px-6 lg:px-12 pb-16">
        <div className="max-w-7xl mx-auto">
          {/* Hero Header */}
          <div className="text-center mb-8 relative">
            {/* Rotating Badge */}
            <div className="absolute left-4 lg:left-0 top-0 flex items-center gap-3">
              <div className="relative w-16 h-16">
                <svg className="w-full h-full animate-spin-slow" viewBox="0 0 100 100">
                  <defs>
                    <path id="circle" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                  </defs>
                  <text className="text-[10px] fill-foreground font-medium uppercase tracking-[0.3em]">
                    <textPath href="#circle">
                      LEARN ABOUT US • TRENDZONE VIBES •
                    </textPath>
                  </text>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-8 h-8 bg-foreground rounded-full flex items-center justify-center">
                    <Play className="w-3 h-3 text-background fill-background ml-0.5" />
                  </div>
                </div>
              </div>
            </div>

            {/* Avatar Group */}
            <div className="absolute right-4 lg:right-0 top-2 flex items-center">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-yellow overflow-hidden border-2 border-background">
                  <img src={fashionYellow} alt="" className="w-full h-full object-cover" />
                </div>
                <div className="w-10 h-10 rounded-full bg-green overflow-hidden border-2 border-background">
                  <img src={fashionGreen} alt="" className="w-full h-full object-cover" />
                </div>
                <div className="w-10 h-10 rounded-full bg-orange overflow-hidden border-2 border-background">
                  <img src={fashionOrange} alt="" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="w-10 h-10 rounded-full bg-foreground flex items-center justify-center text-background text-sm font-bold ml-1">
                +
              </div>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight pt-20 lg:pt-0">
              Elevate Your Style With
              <br />
              <span className="text-foreground">Bold Fashion</span>
            </h1>
          </div>

          {/* Fashion Image Grid */}
          <div className="grid grid-cols-12 gap-4 lg:gap-6 mb-8">
            {/* Orange - Left tall */}
            <div className="col-span-6 md:col-span-3 row-span-2">
              <div className="h-full bg-orange rounded-3xl overflow-hidden animate-fade-up">
                <img 
                  src={fashionOrange} 
                  alt="Bold orange fashion" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Green - Tall center-left */}
            <div className="col-span-6 md:col-span-2 row-span-2">
              <div className="h-full bg-green rounded-3xl overflow-hidden animate-fade-up animation-delay-100">
                <img 
                  src={fashionGreen} 
                  alt="Elegant green fashion" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Yellow - Center portrait */}
            <div className="col-span-6 md:col-span-2 row-span-2 relative">
              <div className="h-full bg-yellow rounded-3xl overflow-hidden animate-fade-up animation-delay-200">
                <img 
                  src={fashionYellow} 
                  alt="Vibrant yellow fashion" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Sun icon badge */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-background rounded-full flex items-center justify-center shadow-soft">
                <Sun className="w-4 h-4 text-yellow" />
              </div>
            </div>

            {/* White outfit - Center-right */}
            <div className="col-span-6 md:col-span-2 row-span-2">
              <div className="h-full bg-[#e8f4f8] rounded-3xl overflow-hidden animate-fade-up animation-delay-300">
                <img 
                  src={fashionWhite} 
                  alt="Minimal white fashion" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Teal - Top right */}
            <div className="col-span-12 md:col-span-3">
              <div className="h-48 md:h-full bg-teal rounded-3xl overflow-hidden animate-fade-up animation-delay-400">
                <img 
                  src={fashionTeal} 
                  alt="Playful teal fashion" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* Green portrait - Bottom right */}
            <div className="col-span-12 md:col-span-3">
              <div className="h-48 md:h-full bg-green rounded-3xl overflow-hidden animate-fade-up animation-delay-400">
                <img 
                  src={fashionGreenPortrait} 
                  alt="Green portrait fashion" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center mb-16">
            <Button variant="teal" size="lg" className="gap-2">
              Explore Collections
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Our Story Section */}
          <div className="relative rounded-3xl overflow-hidden mb-16 border-2 border-red-500 min-h-[500px]">
            {/* Background Image with Blue Overlay */}
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-blue-900/60 mix-blend-multiply"></div>
              <img 
                src={storyBg} 
                alt="Fashion Story" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  console.error('Error loading image:', e);
                  const target = e.target as HTMLImageElement;
                  target.style.border = '2px solid red';
                }}
              />
            </div>
            
            {/* Content */}
            <div className="relative max-w-3xl mx-auto text-center py-20 px-6 sm:py-24 sm:px-12 lg:py-32 lg:px-16">
              <h2 className="text-3xl font-display font-bold text-white sm:text-4xl mb-6">
                Our Story
              </h2>
              <p className="text-lg text-blue-100 leading-relaxed mb-8">
                Redefining fashion with sustainability and style. At TrendZone, we believe in creating timeless pieces that not only look good but also do good for our planet. Our journey began with a simple idea: to craft fashion that lasts, with minimal environmental impact and maximum style.
              </p>
              <p className="text-lg text-blue-100 leading-relaxed mb-8">
                Every piece in our collection is thoughtfully designed with eco-friendly materials and ethical manufacturing processes. We're committed to reducing waste and promoting sustainable practices throughout our supply chain, because looking good should never come at the cost of our planet.
              </p>
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                Learn More About Our Mission
              </Button>
            </div>
          </div>

          {/* Removed testimonial and trends section as per request */}
        </div>
      </main>
    </div>
  );
};

export default Index;
