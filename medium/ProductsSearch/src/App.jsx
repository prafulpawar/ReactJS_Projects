import React, { useState } from 'react';

function App() {
  const products = [
    { id: 1, name: "Wireless Headphones", description: "High-quality wireless headphones with noise cancellation and long battery life.", price: 99.99, category: "Electronics" },
    { id: 2, name: "Smart Watch", description: "Stylish smartwatch with fitness tracking and heart rate monitoring.", price: 149.99, category: "Wearables" },
    { id: 3, name: "Gaming Laptop", description: "Powerful gaming laptop with high-performance graphics and fast processor.", price: 1299.99, category: "Computers" },
    { id: 4, name: "Wireless Earbuds", description: "Compact and lightweight earbuds with excellent sound quality and touch controls.", price: 59.99, category: "Audio" },
    { id: 5, name: "4K TV", description: "Ultra-high-definition 4K TV with smart features and built-in streaming apps.", price: 499.99, category: "Electronics" },
    { id: 6, name: "Bluetooth Speaker", description: "Portable Bluetooth speaker with crisp sound and long-lasting battery life.", price: 39.99, category: "Audio" },
    { id: 7, name: "Smartphone", description: "Latest smartphone with high-definition camera and fast processing speed.", price: 899.99, category: "Mobile Phones" },
    { id: 8, name: "Digital Camera", description: "Compact digital camera with high-resolution lens and image stabilization.", price: 499.99, category: "Photography" },
    { id: 9, name: "Electric Scooter", description: "Eco-friendly electric scooter with a long-range battery and smooth ride.", price: 499.99, category: "Transportation" },
    { id: 10, name: "Coffee Maker", description: "Automatic coffee maker with programmable settings for a perfect cup every time.", price: 89.99, category: "Home Appliances" },
    { id: 11, name: "Robot Vacuum Cleaner", description: "Advanced robot vacuum with smart navigation and powerful suction.", price: 299.99, category: "Home Appliances" },
    { id: 12, name: "Air Fryer", description: "Healthy air fryer for making crispy and delicious food with little to no oil.", price: 129.99, category: "Home Appliances" },
    { id: 13, name: "Electric Grill", description: "Indoor electric grill for cooking without smoke or mess.", price: 159.99, category: "Home Appliances" },
    { id: 14, name: "Portable Power Bank", description: "Compact power bank with high-capacity battery for charging your devices on the go.", price: 39.99, category: "Accessories" },
    { id: 15, name: "Fitness Tracker", description: "Wearable fitness tracker with step counting, calorie burning tracking, and sleep monitoring.", price: 69.99, category: "Wearables" },
    { id: 16, name: "Smart Thermostat", description: "Smart thermostat for controlling home temperature remotely via an app.", price: 179.99, category: "Home Automation" },
    { id: 17, name: "Electric Toothbrush", description: "High-performance electric toothbrush with multiple brushing modes.", price: 99.99, category: "Health & Beauty" },
    { id: 18, name: "Massage Gun", description: "Portable massage gun with multiple speeds for relaxing muscle tension.", price: 119.99, category: "Health & Beauty" },
    { id: 19, name: "Electric Shaver", description: "Advanced electric shaver with multiple heads and long battery life.", price: 89.99, category: "Health & Beauty" },
    { id: 20, name: "Smart Light Bulb", description: "Smart light bulb that can be controlled through a mobile app and voice assistant.", price: 29.99, category: "Home Automation" },
    { id: 21, name: "Laptop Sleeve", description: "Stylish and protective laptop sleeve to keep your device safe on the go.", price: 19.99, category: "Accessories" },
    { id: 22, name: "Portable Speaker", description: "Compact and waterproof portable speaker with excellent sound quality.", price: 59.99, category: "Audio" },
    { id: 23, name: "Wireless Charger", description: "Convenient wireless charger for fast charging your devices without cables.", price: 29.99, category: "Accessories" },
    { id: 24, name: "Smart Home Camera", description: "HD security camera with night vision and remote monitoring via smartphone.", price: 89.99, category: "Home Automation" },
    { id: 25, name: "Action Camera", description: "Waterproof and durable action camera perfect for capturing adventures.", price: 249.99, category: "Photography" },
    { id: 26, name: "Smart Plug", description: "Smart plug for controlling appliances remotely via smartphone.", price: 19.99, category: "Home Automation" },
    { id: 27, name: "Gaming Monitor", description: "Curved gaming monitor with high refresh rate and low latency.", price: 299.99, category: "Computers" },
    { id: 28, name: "Laptop Stand", description: "Ergonomic laptop stand to reduce neck and back strain.", price: 49.99, category: "Accessories" },
    { id: 29, name: "Wireless Mouse", description: "Ergonomic wireless mouse with smooth tracking and long battery life.", price: 29.99, category: "Accessories" },
    { id: 30, name: "Virtual Reality Headset", description: "Immersive virtual reality headset for gaming and entertainment.", price: 399.99, category: "Electronics" },
    { id: 31, name: "Smart Watch Band", description: "Adjustable and comfortable replacement band for your smartwatch.", price: 19.99, category: "Wearables" },
    { id: 32, name: "Home Theater System", description: "Surround sound home theater system for an immersive movie experience.", price: 499.99, category: "Electronics" },
    { id: 33, name: "Phone Case", description: "Durable and stylish phone case for protecting your smartphone.", price: 14.99, category: "Accessories" },
    { id: 34, name: "Laptop Backpack", description: "Spacious and padded backpack to carry your laptop and essentials.", price: 69.99, category: "Accessories" },
    { id: 35, name: "Bluetooth Headset", description: "Comfortable Bluetooth headset for hands-free calls and music.", price: 49.99, category: "Audio" },
    { id: 36, name: "Electric Kettle", description: "Fast-boiling electric kettle with an auto shut-off feature.", price: 39.99, category: "Home Appliances" },
    { id: 37, name: "Smart Security System", description: "Complete smart security system with cameras and motion sensors.", price: 799.99, category: "Home Automation" },
    { id: 38, name: "Cordless Drill", description: "Powerful cordless drill with multiple speed settings for various tasks.", price: 129.99, category: "Tools" },
    { id: 39, name: "Dumbbell Set", description: "Adjustable dumbbell set for home workouts and fitness training.", price: 179.99, category: "Fitness" },
    { id: 40, name: "Gaming Chair", description: "Ergonomic gaming chair with lumbar support and adjustable armrests.", price: 199.99, category: "Furniture" },
    { id: 41, name: "Smart Thermostat", description: "Efficient smart thermostat to optimize energy usage.", price: 99.99, category: "Home Automation" },
    { id: 42, name: "Solar Power Bank", description: "Eco-friendly power bank with solar charging capabilities.", price: 49.99, category: "Accessories" }
  ];

  const [data, setData] = useState(products);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    const d = event.target.value.toLowerCase();
   
    setInputValue(d);

    setData(
      products.filter(({ name, description }) => 
        [name, description].some(field => field.toLowerCase().includes(d))
      )
    );
  };

  return (
    <div className="flex flex-col items-center bg-red-300 min-h-screen py-2">
      <div className="flex justify-center mt-10 items-center gap-2">
        <h1>Products Search:</h1>
        <input
          value={inputValue}
          onChange={handleInputChange}
          className="pt-2 pb-2 pl-2 rounded-xl"
          type="text"
          placeholder="Search products..."
        />
      </div>

      <div className="flex flex-wrap justify-center gap-4 mt-10 p-5">
        {data.map((items, index) => (
          <div key={items.id} className="border-2 p-2 w-48">
            <div className="flex flex-col gap-2 mt-2 rounded-xl p-2">
              <h1>Name: {items.name}</h1>
              <h1>Price: {items.price}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
