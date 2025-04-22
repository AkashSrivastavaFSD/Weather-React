🌤️ LiveWeather - React Weather App
A responsive weather app built with React.js that fetches live weather data from the OpenWeather API. This app provides weather information such as temperature, humidity, and wind speed for any city globally. The interface is clean, intuitive, and designed for both desktop and mobile devices.

🧾 Required Dependencies

The following dependency is installed by default when you run npm install:

-remixicon – For custom icons used in the user interface.

⚠ Don't forget to import RemixIcon's CSS file in your index.js:
Import "remixicon/fonts/remixicon.css";

✨ Features
1 Fetches live weather data from the OpenWeather API.
2 Displays weather details like temperature, humidity, wind speed, and weather condition icons.
3 Automatically adjusts for mobile and desktop screens.
4 Error handling for invalid city inputs.
5 Clear/reset functionality to restart the search.
6 Responsive layout that works across different screen sizes.

🛠️ Tech Stack

1 React.js
2 OpenWeather API (for weather data)
3 Remix Icons (for icons)

📱 How it Works

-The user enters a city name in the search bar.
-The app fetches data from the OpenWeather API and displays the weather information.
-The user can clear/reset the search.
-The app automatically adapts its layout to mobile and desktop views.

📸 Screenshots
![image](https://github.com/user-attachments/assets/98c18ebb-b454-4e05-8be1-fa0f7d4ffefd)
![image](https://github.com/user-attachments/assets/8049c0de-ae48-4563-9468-1511f66268de)
![image](https://github.com/user-attachments/assets/659e14b2-0821-4304-a1c5-98ee5589ca74)




🚀 Live Demo

Click to view the live demo: 

🔧 How to Use / Run Locally

Clone the repository:
git clone https://github.com/your-username/live-weather.git
Install dependencies:
cd live-weather
npm install
Run the app locally:
npm start

📂 File Structure

/src
  └── components
      └── Weather.js
  └── App.js
  └── index.js
  
💡 Inspiration

This project was inspired by my work as a Frontend Developer Intern at Unified Mentor, where I learned to create responsive and interactive UIs. This weather app was designed to provide real-time, accessible weather information for users around the world.

✨ Made with ❤️ by Akash
