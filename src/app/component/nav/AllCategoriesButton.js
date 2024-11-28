import React, { useState } from 'react';
import { Menu } from 'lucide-react';

const categories = [
  {
    label: 'Phones & Telecommunications',
    icon: '📱', // Replace with actual icons if needed
    subcategories: [
      {
        title: 'Mobile Phones',
        items: [
          'Used Phones',
          'iPhone',
          'Smartphone Android',
          'Smartphone 5g',
          'Rugged Smartphones'
        ],
      },
      {
        title: 'Phones Accessories',
        items: [
          'Phone Cases',
          'Power Banks',
          'Holders & Stands',
          'Mobile Phone Chargers'
        ],
      },
      {
        title: 'More Ways to Shop',
        items: [
          'Top Selling'
        ],
      },
    ],
  },
  {
    label: 'Home & Garden',
    icon: '🏡',
    subcategories: [
      {
        title: 'Furniture',
        items: ['Sofas', 'Chairs', 'Tables'],
      },
      {
        title: 'Decor',
        items: ['Wall Art', 'Rugs', 'Lighting'],
      },
    ],
  },
];

const AllCategoriesButton = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <div className="relative w-64">
      {/* Dropdown Button */}
      <button className="flex w-full items-center bg-gray-100 px-4 py-2 text-left text-gray-700 rounded-lg shadow hover:bg-gray-200">
        <span className="mr-2">☰</span>
        <span>All Categories</span>
      </button>

      {/* Dropdown Container */}
      <div className="absolute left-0 top-full mt-2 flex w-full bg-white shadow-lg z-50">
        {/* Left Sidebar */}
        <div className="w-64 border-r border-gray-200 bg-gray-50">
          {categories.map((category, index) => (
            <div
              key={index}
              onMouseEnter={() => setActiveCategory(category.label)}
              className={`flex items-center px-4 py-3 cursor-pointer hover:bg-gray-100 ${
                activeCategory === category.label ? 'bg-gray-100' : ''
              }`}
            >
              <span className="mr-3">{category.icon}</span>
              <span>{category.label}</span>
              <Menu className="ml-auto h-4 w-4 text-gray-500" />
            </div>
          ))}
        </div>

        {/* Submenu */}
        {activeCategory && (
          <div className="w-[30rem] p-4 bg-white">
            {categories
              .find((cat) => cat.label === activeCategory)
              ?.subcategories.map((subcategory, idx) => (
                <div key={idx} className="mb-4">
                  <h4 className="text-sm font-bold text-gray-700 mb-2">{subcategory.title}</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {subcategory.items.map((item, itemIdx) => (
                      <span
                        key={itemIdx}
                        className="cursor-pointer text-sm text-gray-600 hover:text-gray-900"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllCategoriesButton;