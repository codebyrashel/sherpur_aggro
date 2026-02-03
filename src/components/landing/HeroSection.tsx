"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import {
  ChevronDown,
  ChevronRight,
  Mail,
  Milk,
  Shirt,
  Bone,
  Package,
  Apple,
  Wine,
  Fish,
  Utensils,
  Carrot,
  Sandwich,
  Cat,
  Plus,
  Cake,
  Cherry,
  Grape,
  Salad,
  Cookie,
  Leaf,
  Coffee,
  ShoppingBasket,
  Citrus,
  IceCream,
  type LucideIcon,
} from "lucide-react";

// Category data for the sidebar
const categories = [
  { icon: Milk, label: "Milks and Dairies", color: "#FEEFEA" },
  { icon: Shirt, label: "Clothing & beauty", color: "#FEF1F1" },
  { icon: Bone, label: "Pet Foods & Toy", color: "#F2FCE4" },
  { icon: Package, label: "Baking material", color: "#FFFCEB" },
  { icon: Apple, label: "Fresh Fruit", color: "#FEEFEA" },
  { icon: Wine, label: "Wines & Drinks", color: "#ECFFEC" },
  { icon: Fish, label: "Fresh Seafood", color: "#F2FCE4" },
  { icon: Utensils, label: "Fast food", color: "#FEEFEA" },
  { icon: Carrot, label: "Vegetables", color: "#FFFCEB" },
  { icon: Sandwich, label: "Bread and Juice", color: "#FEEFEA" },
  { icon: Cat, label: "Pet Foods & Toy", color: "#F2FCE4" },
];

// Category item for Featured Categories section
const featuredCategories: {
  name: string;
  items: number;
  color: string;
  icon: LucideIcon;
}[] = [
  { name: "Cake & Milk", items: 26, color: "#FEEFEA", icon: Cake },
  { name: "Organic Kiwi", items: 28, color: "#FEF1F1", icon: Citrus },
  { name: "Peach", items: 14, color: "#F2FCE4", icon: Cherry },
  { name: "Red Apple", items: 54, color: "#FFFCEB", icon: Apple },
  { name: "Snack", items: 56, color: "#FEEFEA", icon: Cookie },
  { name: "Vegetables", items: 72, color: "#ECFFEC", icon: Salad },
  { name: "Strawberry", items: 36, color: "#FEF1F1", icon: Cherry },
  { name: "Black plum", items: 123, color: "#F2FCE4", icon: Grape },
  { name: "Custard apple", items: 34, color: "#FFFCEB", icon: IceCream },
  { name: "Coffee & Tea", items: 89, color: "#FEEFEA", icon: Coffee },
];

export function HeroSection() {
  const [email, setEmail] = useState("");
  const [activeTab, setActiveTab] = useState("Pet Foods");

  return (
    <section className='w-full bg-background'>
      {/* Main Hero Area */}
      <div className='container mx-auto px-4 py-6'>
        <div className='flex gap-6'>
          {/* Categories Sidebar */}
          <aside className='hidden lg:block w-[250px] shrink-0'>
            <Card className='p-0 overflow-hidden rounded-2xl border-border shadow-sm'>
              {categories.map((category, index) => (
                <button
                  key={index}
                  className='w-full flex items-center gap-3 px-4 py-3 hover:bg-secondary/50 transition-colors text-left group'>
                  <span
                    className='w-8 h-8 rounded-full flex items-center justify-center'
                    style={{ backgroundColor: category.color }}>
                    <category.icon className='w-4 h-4 text-nest-heading' />
                  </span>
                  <span className='text-sm font-medium text-nest-heading group-hover:text-nest-green transition-colors'>
                    {category.label}
                  </span>
                </button>
              ))}
              <button className='w-full flex items-center gap-3 px-4 py-3 text-nest-green font-medium'>
                <Plus className='w-4 h-4' />
                <span className='text-sm'>Show more...</span>
              </button>
            </Card>
          </aside>

          {/* Main Hero Banner */}
          <div className='flex-1 flex flex-col lg:flex-row gap-6'>
            {/* Main Large Banner */}
            <div className='flex-1 relative min-h-[400px] lg:min-h-[450px] rounded-3xl overflow-hidden bg-linear-to-br from-[#DEF9EC] via-[#E8F5E9] to-[#C8E6C9]'>
              {/* Background Pattern */}
              <div className='absolute inset-0 opacity-20'>
                <div className='absolute top-10 left-10 w-32 h-32 rounded-full border-2 border-nest-green' />
                <div className='absolute bottom-20 left-20 w-24 h-24 rounded-full border-2 border-nest-green' />
                <div className='absolute top-32 right-40 w-16 h-16 rounded-full border-2 border-nest-green' />
              </div>

              {/* Content */}
              <div className='absolute inset-0 flex flex-col lg:flex-row items-center justify-between p-8 lg:p-12'>
                <div className='flex-1 max-w-md z-10'>
                  <h1 className='text-3xl lg:text-5xl font-bold text-nest-heading leading-tight mb-4'>
                    Don&apos;t miss amazing
                    <br />
                    <span className='text-nest-green'>grocery deals</span>
                  </h1>
                  <p className='text-nest-text mb-6 text-lg'>
                    Sign up for the daily newsletter
                  </p>

                  {/* Newsletter Form */}
                  <div className='flex max-w-sm bg-white rounded-full overflow-hidden shadow-lg p-1'>
                    <div className='flex items-center gap-2 pl-4 flex-1'>
                      <Mail className='w-5 h-5 text-nest-text' />
                      <Input
                        type='email'
                        placeholder='Your email address'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='border-0 shadow-none focus-visible:ring-0 bg-transparent text-sm h-10'
                      />
                    </div>
                    <Button className='rounded-full px-6 h-10 bg-nest-green hover:bg-nest-green-dark text-white font-medium'>
                      Subscribe
                    </Button>
                  </div>

                  {/* Pagination Dots */}
                  <div className='flex gap-2 mt-8'>
                    <span className='w-8 h-2 rounded-full bg-nest-green' />
                    <span className='w-2 h-2 rounded-full bg-gray-300' />
                    <span className='w-2 h-2 rounded-full bg-gray-300' />
                  </div>
                </div>

                {/* Hero Image - Using Icons */}
                <div className='relative w-64 h-64 lg:w-80 lg:h-80 mt-6 lg:mt-0'>
                  <div className='w-full h-full relative rounded-full bg-white/40 backdrop-blur-sm overflow-hidden flex items-center justify-center shadow-2xl'>
                    <div className='flex flex-col items-center gap-4'>
                      <div className='w-24 h-24 rounded-full bg-nest-green/20 flex items-center justify-center'>
                        <Leaf className='w-12 h-12 text-nest-green' />
                      </div>
                      <div className='flex gap-3'>
                        <div className='w-12 h-12 rounded-full bg-[#FEEFEA] flex items-center justify-center'>
                          <Apple className='w-6 h-6 text-red-500' />
                        </div>
                        <div className='w-12 h-12 rounded-full bg-[#FFF8E1] flex items-center justify-center'>
                          <Carrot className='w-6 h-6 text-orange-500' />
                        </div>
                        <div className='w-12 h-12 rounded-full bg-[#F2FCE4] flex items-center justify-center'>
                          <Salad className='w-6 h-6 text-green-600' />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side Promo Cards */}
            <div className='w-full lg:w-[240px] flex flex-row lg:flex-col gap-4'>
              {/* Top Promo Card */}
              <Card className='flex-1 p-4 rounded-2xl bg-linear-to-br from-[#DEF9EC] to-[#C8E6C9] border-0 overflow-hidden relative group'>
                <div className='relative z-10'>
                  <h3 className='text-lg font-bold text-nest-heading leading-snug'>
                    Everyday Fresh &<br />
                    Clean with Our
                    <br />
                    Products
                  </h3>
                  <Button
                    variant='default'
                    size='sm'
                    className='mt-4 rounded-md bg-nest-green hover:bg-nest-green-dark text-white text-xs'>
                    Shop Now
                    <ChevronRight className='w-3 h-3 ml-1' />
                  </Button>
                </div>
                <div className='absolute bottom-2 right-2 w-16 h-16 rounded-full bg-white/50 flex items-center justify-center group-hover:scale-110 transition-transform'>
                  <Salad className='w-8 h-8 text-green-600' />
                </div>
              </Card>

              {/* Bottom Promo Card */}
              <Card className='flex-1 p-4 rounded-2xl bg-linear-to-br from-[#FFF8E1] to-[#FFE0B2] border-0 overflow-hidden relative group'>
                <div className='relative z-10'>
                  <h3 className='text-lg font-bold text-nest-heading leading-snug'>
                    The best Organic
                    <br />
                    Products Online
                  </h3>
                  <Button
                    variant='default'
                    size='sm'
                    className='mt-4 rounded-md bg-nest-green hover:bg-nest-green-dark text-white text-xs'>
                    Shop Now
                    <ChevronRight className='w-3 h-3 ml-1' />
                  </Button>
                </div>
                <div className='absolute bottom-2 right-2 w-16 h-16 rounded-full bg-white/50 flex items-center justify-center group-hover:scale-110 transition-transform'>
                  <Wine className='w-8 h-8 text-orange-500' />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Categories Section */}
      <div className='container mx-auto px-4 py-8'>
        <div className='flex items-center justify-between mb-6'>
          <div className='flex items-center gap-8'>
            <h2 className='text-2xl font-bold text-nest-heading'>
              Featured Categories
            </h2>
            <nav className='hidden md:flex items-center gap-4'>
              {["Cake & Milk", "Coffes & Teas", "Pet Foods", "Vegetables"].map(
                (tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`text-sm font-medium transition-colors ${
                      activeTab === tab
                        ? "text-nest-green"
                        : "text-nest-text hover:text-nest-green"
                    }`}>
                    {tab}
                  </button>
                ),
              )}
            </nav>
          </div>
          <div className='flex items-center gap-2'>
            <Button
              variant='outline'
              size='icon'
              className='rounded-full w-10 h-10 border-border'>
              <ChevronDown className='w-4 h-4 rotate-90' />
            </Button>
            <Button
              variant='outline'
              size='icon'
              className='rounded-full w-10 h-10 border-border'>
              <ChevronDown className='w-4 h-4 -rotate-90' />
            </Button>
          </div>
        </div>

        {/* Categories Grid */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-4'>
          {featuredCategories.map((category, index) => (
            <Card
              key={index}
              className='p-4 rounded-2xl border-2 border-transparent hover:border-nest-green transition-all cursor-pointer group'
              style={{ backgroundColor: category.color }}>
              <div className='w-full aspect-square relative mb-3 flex items-center justify-center'>
                <div className='w-12 h-12 rounded-full bg-white/60 flex items-center justify-center group-hover:scale-110 transition-transform'>
                  <category.icon className='w-6 h-6 text-nest-green' />
                </div>
              </div>
              <h3 className='text-sm font-bold text-nest-heading text-center leading-tight'>
                {category.name}
              </h3>
              <p className='text-xs text-nest-text text-center mt-1'>
                {category.items} items
              </p>
            </Card>
          ))}
        </div>
      </div>

      {/* Bottom Promotional Banners */}
      <div className='container mx-auto px-4 py-8'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {/* Banner 1 - Blue/Green */}
          <Card className='p-6 rounded-3xl bg-linear-to-r from-[#E3F2FD] to-[#BBDEFB] border-0 relative overflow-hidden min-h-[200px] group'>
            <div className='relative z-10'>
              <h3 className='text-xl font-bold text-nest-heading leading-snug mb-2'>
                Everyday Fresh &<br />
                Clean with Our
                <br />
                Products
              </h3>
              <Button
                variant='default'
                size='sm'
                className='mt-2 rounded-md bg-nest-green hover:bg-nest-green-dark text-white text-sm'>
                Shop Now
                <ChevronRight className='w-4 h-4 ml-1' />
              </Button>
            </div>
            <div className='absolute bottom-4 right-4 w-20 h-20 rounded-full bg-white/50 flex items-center justify-center group-hover:scale-105 transition-transform'>
              <Carrot className='w-10 h-10 text-orange-500' />
            </div>
          </Card>

          {/* Banner 2 - Pink */}
          <Card className='p-6 rounded-3xl bg-linear-to-r from-[#FCE4EC] to-[#F8BBD9] border-0 relative overflow-hidden min-h-[200px] group'>
            <div className='relative z-10'>
              <h3 className='text-xl font-bold text-nest-heading leading-snug mb-2'>
                Make your Breakfast
                <br />
                Healthy and Easy
              </h3>
              <Button
                variant='default'
                size='sm'
                className='mt-2 rounded-md bg-nest-green hover:bg-nest-green-dark text-white text-sm'>
                Shop Now
                <ChevronRight className='w-4 h-4 ml-1' />
              </Button>
            </div>
            <div className='absolute bottom-4 right-4 w-20 h-20 rounded-full bg-white/50 flex items-center justify-center group-hover:scale-105 transition-transform'>
              <Milk className='w-10 h-10 text-pink-400' />
            </div>
          </Card>

          {/* Banner 3 - Green */}
          <Card className='p-6 rounded-3xl bg-linear-to-r from-[#E8F5E9] to-[#C8E6C9] border-0 relative overflow-hidden min-h-[200px] group'>
            <div className='relative z-10'>
              <h3 className='text-xl font-bold text-nest-heading leading-snug mb-2'>
                The best Organic
                <br />
                Products Online
              </h3>
              <Button
                variant='default'
                size='sm'
                className='mt-2 rounded-md bg-nest-green hover:bg-nest-green-dark text-white text-sm'>
                Shop Now
                <ChevronRight className='w-4 h-4 ml-1' />
              </Button>
            </div>
            <div className='absolute bottom-4 right-4 w-20 h-20 rounded-full bg-white/50 flex items-center justify-center group-hover:scale-105 transition-transform'>
              <ShoppingBasket className='w-10 h-10 text-nest-green' />
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
