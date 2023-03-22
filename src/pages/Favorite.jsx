import React from "react";

export default function Favorites() {
  return (
    <>
        <h1 className="text-center text-4xl font-bold mt-10 ">My Account</h1> 
      <div className="m-20 flex space-x-20">

        <div className="w-[30%] border-2 border-black  font-semibold mt-10 text-sm">
          <p className="hover:text-white hover:bg-black border-b-2 p-4 border-black">
            My Account
          </p>
          <p className="hover:text-white hover:bg-black border-b-2 p-4 border-black">
            My Orders
          </p>
          <p className="hover:text-white hover:bg-black border-b-2 p-4 border-black">
            My Downloadable products
          </p>
          <p className="hover:text-white hover:bg-black border-b-2 p-4 border-black">
            My Wish List
          </p>
          <p className="hover:text-white hover:bg-black border-b-2 p-4 border-black">
            Address Book
          </p>
          <p className="hover:text-white hover:bg-black border-b-2 p-4 border-black">
            Account Information
          </p>
          <p className="hover:text-white hover:bg-black border-b-2 p-4 border-black">
            Stored Payment Methods
          </p>
          <p className="hover:text-white hover:bg-black border-b-2 p-4 border-black">
            My Product Reviews
          </p>
          <p className="hover:text-white hover:bg-black border-b-2 p-4 border-black">
            New letter subscription
          </p>
          <p className="hover:text-white hover:bg-black  p-4 ">Logout</p>
        </div>

        <div className="w-full">
        <div className="flex space-x-40 border-2 border-gray-300 mt-10 w-[90%] shadow-md h-fit justify-around">
        <div>
            <h1 className="font-bold font-serif my-6 text-2xl">Account Information</h1>
            <p className="my-4 text-xl font-bold">Contact Information</p>
            <p className="text-md">Deeksha Bhargava</p>
            <p className="text-md mb-6">1886693195010923@facebook.com</p>
    
            <button className="p-2 w-14 rounded bg-yellow-400 mr-2 my-4 font-semibold">Edit</button>
            <button className="p-2 bg-black text-white rounded my-4 font-semibold">Change Password</button>
        </div>
        <div className="py-16">
            <h1 className="my-4 text-xl font-bold">Newsletters</h1>
            <p className="mb-4">You aren't subscribed to our newsletter.</p>
            <button className="p-2 w-14 rounded bg-yellow-400 mr-2 font-semibold">Edit</button>
        </div>
        
        
      </div>
        <div className="flex space-x-40 border-2 px-6 border-gray-300 mt-10 w-[90%] shadow-md h-fit justify-around">
        <div>
          <div className="flex space-x-8">
            <h1 className="font-bold font-serif my-6 text-2xl">Address Book</h1>
            <button className="p-2 bg-yellow-400 rounded my-4 font-semibold">Manage Address</button>
          </div>
            
            <p className="my-4 text-xl font-bold">Default Billing Address</p>
            <p className="text-md">You have not set a default billing address.</p>
            
    
           
            <button className="p-2 bg-black text-white rounded my-4 font-semibold">Edit Address</button>
        </div>
        <div className="py-16">
            <h1 className="my-4 text-xl font-bold">Default Shipping Address</h1>
            <p className="mb-4">You have not set a default shipping address.</p>
            <button className="p-2 rounded bg-yellow-400 mr-2 font-semibold">Edit Address</button>
        </div>
        
        
      </div>

        </div>
      
      </div>

     
    </>
  );
}
