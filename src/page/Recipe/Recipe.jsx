import React from 'react';
import { FaClock } from 'react-icons/fa';
import { FiEdit2, FiTrash } from 'react-icons/fi';
import img1 from '../../assets/header/img1.jpg';
import img2 from '../../assets/header/img2.png';
import Navigate from '../../Navigate';
import { Link } from 'react-router-dom';


const Recipe = () => {
  const recipeData = [
    {
      image: img1,
      mealType: 'Breakfast',
      title: 'Tropical Protein',
      time: '40 min',
      borderColor: 'border-l-green-700',
    },
    {
      image: img2,
      mealType: 'Lunch & Dinner',
      title: 'Basil -Lee pasta',
      time: '40 min',
      borderColor: 'border-l-gray-400',
    },
    {
      image: img1,
      mealType: 'Lunch & Dinner',
      title: 'Stir fried Noodles with veggies',
      time: '40 min',
      borderColor: 'border-l-orange-300',
    },
    {
      image: img2,
      mealType: 'Lunch',
      title: 'Chicken Caesar Salad with Grilled Romaine',
      time: '40 min',
      borderColor: 'border-l-orange-300',
    },
    {
      image: img1,
      mealType: 'Breakfast',
      title: 'Tropical Protein',
      time: '40 min',
      borderColor: 'border-l-green-700',
    },
  ];

  return (
   <div className='h-screen p-1'>
     <div className="flex justify-between">
          <div className="flex ">
            <Navigate title={"Customers"}></Navigate>
            <h1 className=" pl-2 font-semibold text-xl">{`(110)`}</h1>
          </div>
          <div>
            <Link to={'/dashboard/recipe/addRecipe'}><button
            className="bg-[#495F48] px-5 py-2 text-white rounded"
            // onClick={() => setOpenAddModal(true)}
          >
            + Subscription
          </button></Link>
          </div>
        </div>
     <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {recipeData.map((item, index) => (
        <div
          key={index}
          className={`flex w-full max-w-sm bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border-l-4 ${item.borderColor}`}
        >
          <img src={item.image} alt={item.title} className="w-1/3 object-cover" />
          <div className="flex flex-col justify-between p-4 w-2/3">
            <div>
              <p className="text-sm text-gray-500">{item.mealType}</p>
              <h2 className="font-semibold">{item.title}</h2>
            </div>
            <div className="flex items-center justify-between mt-4 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <FaClock /> {item.time}
              </div>
              <div className="flex gap-2 text-gray-600">
                <FiEdit2 className="cursor-pointer hover:text-blue-500" />
                <FiTrash className="cursor-pointer hover:text-red-500" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
   </div>
  );
};

export default Recipe;
