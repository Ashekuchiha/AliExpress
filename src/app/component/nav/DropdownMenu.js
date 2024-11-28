// import React from "react";

// const DropdownMenu = ({ categories }) => {
//   return (
//     <div className="relative inline-block group">
//       <button
//         className="bg-white px-4 py-2 text-sm font-medium text-gray-700 border rounded shadow group-hover:bg-gray-100"
//       >
//         All Categories
//       </button>

//       {/* Dropdown */}
//       <div
//         className="absolute left-0 mt-2 w-64 bg-white border rounded-lg shadow-lg z-50 overflow-y-auto max-h-80 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
//       >
//         <ul className="py-2">
//           {categories.map((category, index) => (
//             <button
//               key={index}
//               className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
//             >
//               {category.icon && <category.icon className="mr-3 text-lg" />}
//               {category.name}
//             </button>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default DropdownMenu;

// import React, { useState } from "react";
// import SubCategory from "./SubCategory";

// const DropdownMenu = ({ categories, RenderComponent }) => {
//   const [hoveredCategory, setHoveredCategory] = useState(null);

//   return (
//     <div className="relative inline-block group">
//       <button
//         className="bg-white px-4 py-2 text-sm font-medium text-gray-700 border rounded shadow group-hover:bg-gray-100"
//       >
//         All Categories
//       </button>

//       {/* Dropdown */}
//       <div
//         className="absolute left-0 mt-2 w-64 bg-white border rounded-lg shadow-lg z-50 overflow-y-auto max-h-80 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
//       >
//         <ul className="py-2">
//           {categories.map((category, index) => (
//             <button
//               key={index}
//               className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
//               onMouseEnter={() => setHoveredCategory(category)}
//               onMouseLeave={() => setHoveredCategory(null)}
//             >
//               {category.icon && <category.icon className="mr-3 text-lg" />}
//               {category.name}
//               {hoveredCategory && (
//           <SubCategory  head={category.name}/>
//       )}
//             </button>

            
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default DropdownMenu;

// import React, { useState } from "react";
// import SubCategory from "./SubCategory";

// const DropdownMenu = ({ categories }) => {
//   const [hoveredCategory, setHoveredCategory] = useState(null);

//   return (
//     <div className="relative inline-block group">
//       {/* Dropdown Toggle */}
//       <button
//         className="bg-white px-4 py-2 text-sm font-medium text-gray-700 border rounded shadow group-hover:bg-gray-100"
//       >
//         All Categories
//       </button>

//       {/* Dropdown Menu */}
//       <div
//         className="absolute left-0 mt-2 w-64 bg-white border rounded-lg shadow-lg z-50 overflow-y-auto max-h-80 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
//       >
//         <ul className="py-2">
//           {categories.map((category, index) => (
//             <li
//               key={index}
//               className="relative flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
//               onMouseEnter={() => setHoveredCategory(category)}
//               onMouseLeave={() => setHoveredCategory(null)}
//             >
//               {/* Category Icon */}
//               {category.icon && <category.icon className="mr-3 text-lg" />}
//               {category.name}

//               {/* Subcategories */}
//               {hoveredCategory === category && (
//                   <SubCategory head={category.name} items={category.subcategories} />
//               )}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default DropdownMenu;
// 'use client'
// import React, { useState } from "react";
// import SubCategory from "./SubCategory";
// import { AlignJustify, ChevronDown } from "lucide-react";

// const DropdownMenu = ({ categories }) => {
//   const [hoveredCategory, setHoveredCategory] = useState(null);

//   return (
//     <div className=" bg-slate-200 relative flex group self-center text-lg rounded-lg w-64 pl-4 hover:bg-slate-200">
//       <AlignJustify/>
//       {/* <button className="bg-white px-4 py-2 text-sm font-medium text-gray-700 border rounded shadow group-hover:bg-gray-100"> */}
//       <button className="group-hover:bg-slate-200 pl-2 mr-10 w-full scale-110">
//         All Categories
//       </button>
//       <ChevronDown className="ml-7"/>
//       {/* Dropdown Menu */}
//       <div className="absolute left-0 top-6 w-full bg-slate-200 border rounded-lg shadow-lg z-50 overflow-y-auto max-h-80 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
//         <ul className="py-2">
//           {categories.map((category, index) => (
//             <li
//               key={index}
//               className="relative flex items-center px-4 py-2 text-sm text-gray-700 hover:font-bold cursor-pointer"
//               onMouseEnter={() => setHoveredCategory(category)}
//               onMouseLeave={() => setHoveredCategory(null)}
//             >
//               {/* Category Icon */}
//               {category.icon && <category.icon className="mr-3 text-lg" />}
//               {category.name}
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Submenu */}
//       {hoveredCategory && (
//           <SubCategory
//             head={hoveredCategory.name}
//             items={hoveredCategory.subcategories}
//           />
//       )}
//     </div>
//   );
// };

// export default DropdownMenu;

// 'use client';
// import React, { useState } from "react";
// import SubCategory from "./SubCategory";
// import { AlignJustify, ChevronDown } from "lucide-react";

// const DropdownMenu = ({ categories = [] }) => {
//   const [hoveredCategory, setHoveredCategory] = useState(null);

//   return (
//     <div className="relative flex group self-center text-lg w-64 bg-slate-100 rounded-full  transition-all">
//       {/* Menu Icon */}
//       <AlignJustify className="ml-4 text-gray-700 self-center" />
//       {/* Dropdown Button */}
//       <button
//         className="flex-1 text-left pl-2 py-2 font-medium group-hover: bg-slate-100"
//         aria-haspopup="true"
//         aria-expanded={hoveredCategory ? "true" : "false"}
//       >
//         All Categories
//       </button>
//       <ChevronDown className="mr-4 text-gray-700 self-center" />
//       {/* Dropdown Menu */}
//       <div
//         className={`absolute left-0 top-12 w-full  bg-slate-100 border rounded-lg shadow-lg z-50 overflow-y-auto max-h-80 
//         transition-opacity duration-200 ${hoveredCategory ? "opacity-100" : "opacity-0"} group-hover:opacity-100`}
//       >
//         <ul className="py-2">
//           {categories.map((category, index) => (
//             <li
//               key={index}
//               className="relative flex items-center px-4 py-2 text-sm text-gray-700 hover:font-bold cursor-pointer hover:bg-gray-100"
//               onMouseEnter={() => setHoveredCategory(category)}
//               onMouseLeave={() => setHoveredCategory(null)}
//             >
//               {category.icon && <category.icon className="mr-3 text-lg" />}
//               {category.name}
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Submenu */}
//       {hoveredCategory && (
//         <SubCategory
//           head={hoveredCategory.name}
//           items={hoveredCategory.subcategories}
//         />
//       )}
//     </div>
//   );
// };

// export default DropdownMenu;


'use client';
import React, { useState } from "react";
import SubCategory from "./SubCategory";
import { AlignJustify, ChevronDown } from "lucide-react";

const DropdownMenu = ({ categories = [] }) => {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  return (
    <div
      className="relative flex group self-center text-lg w-64 bg-slate-100  transition-all rounded-full hover:rounded-t-full"
      onMouseLeave={() => setHoveredCategory(null)} // Close dropdown and submenu when leaving the wrapper
    >
      {/* Menu Icon */}
      <AlignJustify className="ml-4 text-gray-700 self-center" />

      {/* Dropdown Button */}
      <button
        className="flex-1 text-left pl-2 py-2 font-medium group-hover:bg-slate-100 "
        aria-haspopup="true"
        aria-expanded={hoveredCategory ? "true" : "false"}
      >
        All Categories
      </button>

      <ChevronDown className="mr-4 text-gray-700 self-center" />

      {/* Dropdown Menu */}
      <div
        className={`absolute left-0 top-[2.5rem] w-full bg-slate-100  rounded-lg shadow-lg z-50 overflow-y-auto max-h-80 
        transition-opacity duration-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible`}
      >
        <ul className="py-2">
          {categories.map((category, index) => (
            <li
              key={index}
              className="relative flex items-center px-4 py-2 text-sm text-gray-700 hover:font-bold cursor-pointer hover:bg-gray-100"
              onMouseEnter={() => setHoveredCategory(category)}
            >
              {category.icon && <category.icon className="mr-3 text-lg" />}
              {category.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Submenu */}
      {hoveredCategory && (
        <div
          className="absolute top-12 left-full  bg-slate-100 border rounded-lg shadow-lg z-50"
          onMouseEnter={() => setHoveredCategory(hoveredCategory)} // Keep submenu open
          onMouseLeave={() => setHoveredCategory(null)} // Close submenu when mouse leaves
        >
          <SubCategory
            head={hoveredCategory.name}
            items={hoveredCategory.subcategories}
          />
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
