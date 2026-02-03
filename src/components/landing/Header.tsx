"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Search,
  MapPin,
  Heart,
  ShoppingCart,
  User,
  Phone,
  ChevronDown,
  Menu,
  X,
  Flame,
  LayoutGrid,
} from "lucide-react";

const mainNavItems = [
  { label: "Deals", icon: Flame, highlight: true },
  { label: "Home", hasDropdown: true },
  { label: "About" },
  { label: "Shop", hasDropdown: true },
  { label: "Vendors", hasDropdown: true },
  { label: "Mega menu", hasDropdown: true },
  { label: "Blog", hasDropdown: true },
  { label: "Pages", hasDropdown: true },
  { label: "Contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className='w-full bg-white sticky top-0 z-50 shadow-sm'>
      {/* Top Header */}
      <div className='border-b border-border'>
        <div className='container mx-auto px-4'>
          <div className='flex items-center justify-between h-20'>
            {/* Logo */}
            <Link href='/' className='flex items-center gap-2 shrink-0'>
              <div className='w-12 h-12 relative flex items-center justify-center'>
                <Image
                  src='/logo.svg'
                  alt='Nest Logo'
                  fill
                  className='object-contain'
                  onError={(e) => {
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                      parent.innerHTML = '<span class="text-3xl">🛒</span>';
                    }
                  }}
                />
              </div>
              <div className='flex flex-col'>
                <span
                  className='text-2xl font-bold text-nest-green'
                  style={{ fontFamily: "var(--font-outfit)" }}>
                  Nest
                </span>
                <span className='text-[10px] text-nest-text -mt-1 tracking-wide'>
                  MART & GROCERY
                </span>
              </div>
            </Link>

            {/* Search Bar */}
            <div className='hidden md:flex flex-1 max-w-2xl mx-8'>
              <div className='flex w-full border border-border rounded-md overflow-hidden'>
                {/* Category Dropdown */}
                <button className='flex items-center gap-2 px-4 py-2 bg-white border-r border-border text-sm text-nest-heading font-medium whitespace-nowrap hover:bg-gray-50 transition-colors'>
                  All Categories
                  <ChevronDown className='w-4 h-4 text-nest-text' />
                </button>
                {/* Search Input */}
                <div className='flex-1 flex items-center'>
                  <Input
                    type='text'
                    placeholder='Search for items...'
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className='border-0 shadow-none focus-visible:ring-0 h-11 text-sm'
                  />
                </div>
                {/* Search Button */}
                <button className='px-4 hover:bg-gray-50 transition-colors'>
                  <Search className='w-5 h-5 text-nest-text' />
                </button>
              </div>
            </div>

            {/* Right Actions */}
            <div className='flex items-center gap-4'>
              {/* Location */}
              <button className='hidden lg:flex items-center gap-2 text-sm text-nest-heading'>
                <MapPin className='w-4 h-4 text-nest-text' />
                <span>Your Location</span>
                <ChevronDown className='w-4 h-4 text-nest-text' />
              </button>

              {/* Compare */}
              <button className='hidden lg:flex items-center gap-1 text-sm text-nest-heading hover:text-nest-green transition-colors'>
                <div className='relative'>
                  <svg
                    className='w-5 h-5'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'>
                    <path d='M9 3L9 21M15 3L15 21M3 9L21 9M3 15L21 15' />
                  </svg>
                  <span className='absolute -top-1 -right-1 w-4 h-4 bg-nest-green rounded-full text-[10px] text-white flex items-center justify-center'>
                    3
                  </span>
                </div>
                <span className='ml-1'>Compare</span>
              </button>

              {/* Wishlist */}
              <button className='hidden lg:flex items-center gap-1 text-sm text-nest-heading hover:text-nest-green transition-colors'>
                <div className='relative'>
                  <Heart className='w-5 h-5' />
                  <span className='absolute -top-1 -right-1 w-4 h-4 bg-nest-green rounded-full text-[10px] text-white flex items-center justify-center'>
                    6
                  </span>
                </div>
                <span className='ml-1'>Wishlist</span>
              </button>

              {/* Cart */}
              <button className='flex items-center gap-1 text-sm text-nest-heading hover:text-nest-green transition-colors'>
                <div className='relative'>
                  <ShoppingCart className='w-5 h-5' />
                  <span className='absolute -top-1 -right-1 w-4 h-4 bg-nest-green rounded-full text-[10px] text-white flex items-center justify-center'>
                    2
                  </span>
                </div>
                <span className='hidden lg:inline ml-1'>Cart</span>
              </button>

              {/* Account */}
              <button className='hidden lg:flex items-center gap-1 text-sm text-nest-heading hover:text-nest-green transition-colors'>
                <User className='w-5 h-5' />
                <span>Account</span>
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className='lg:hidden p-2 hover:bg-gray-100 rounded-md transition-colors'>
                {mobileMenuOpen ? (
                  <X className='w-6 h-6' />
                ) : (
                  <Menu className='w-6 h-6' />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Header - Navigation */}
      <div className='bg-white border-b border-border'>
        <div className='container mx-auto px-4'>
          <div className='flex items-center justify-between h-14'>
            {/* Categories Button */}
            <Button className='hidden lg:flex items-center gap-2 bg-nest-green hover:bg-nest-green-dark text-white rounded-md h-10 px-4'>
              <LayoutGrid className='w-4 h-4' />
              <span>Trending Categories</span>
              <ChevronDown className='w-4 h-4' />
            </Button>

            {/* Main Navigation */}
            <nav className='hidden lg:flex items-center gap-1'>
              {mainNavItems.map((item, index) => (
                <Link
                  key={index}
                  href='#'
                  className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors ${
                    item.highlight
                      ? "text-nest-green"
                      : "text-nest-heading hover:text-nest-green"
                  }`}>
                  {item.icon && <item.icon className='w-4 h-4' />}
                  {item.label}
                  {item.hasDropdown && (
                    <ChevronDown className='w-3 h-3 text-nest-text' />
                  )}
                </Link>
              ))}
            </nav>

            {/* Support Hotline */}
            <div className='hidden lg:flex items-center gap-3'>
              <div className='w-10 h-10 rounded-full bg-nest-green-light flex items-center justify-center'>
                <Phone className='w-5 h-5 text-nest-green' />
              </div>
              <div className='flex flex-col'>
                <span className='text-lg font-bold text-nest-green'>
                  1900 - 888
                </span>
                <span className='text-xs text-nest-text'>
                  24/7 Support Center
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className='lg:hidden bg-white border-b border-border'>
          <div className='container mx-auto px-4 py-4'>
            {/* Mobile Search */}
            <div className='flex border border-border rounded-md overflow-hidden mb-4'>
              <Input
                type='text'
                placeholder='Search for items...'
                className='border-0 shadow-none focus-visible:ring-0 h-11'
              />
              <button className='px-4 bg-nest-green text-white'>
                <Search className='w-5 h-5' />
              </button>
            </div>

            {/* Mobile Navigation */}
            <nav className='flex flex-col gap-1'>
              {mainNavItems.map((item, index) => (
                <Link
                  key={index}
                  href='#'
                  className={`flex items-center justify-between px-4 py-3 text-sm font-medium rounded-md transition-colors ${
                    item.highlight
                      ? "text-nest-green bg-nest-green-light"
                      : "text-nest-heading hover:bg-gray-50"
                  }`}>
                  <span className='flex items-center gap-2'>
                    {item.icon && <item.icon className='w-4 h-4' />}
                    {item.label}
                  </span>
                  {item.hasDropdown && (
                    <ChevronDown className='w-4 h-4 text-nest-text' />
                  )}
                </Link>
              ))}
            </nav>

            {/* Mobile Actions */}
            <div className='flex items-center justify-between mt-4 pt-4 border-t border-border'>
              <button className='flex items-center gap-2 text-sm text-nest-heading'>
                <MapPin className='w-4 h-4' />
                Your Location
              </button>
              <div className='flex items-center gap-4'>
                <button className='relative'>
                  <Heart className='w-5 h-5 text-nest-heading' />
                  <span className='absolute -top-1 -right-1 w-4 h-4 bg-nest-green rounded-full text-[10px] text-white flex items-center justify-center'>
                    6
                  </span>
                </button>
                <button className='relative'>
                  <User className='w-5 h-5 text-nest-heading' />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
