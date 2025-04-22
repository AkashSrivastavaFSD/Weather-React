import React, { useState, useEffect } from "react";

const Weather = () => {
  // States to keep track of city name, weather data, any errors, and mobile responsiveness
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);
  // API key and base URL for fetching weather data
  const apiKey = "32062ef41e3a7e0b5b528fd8af3934ee";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;

  // useEffect to update mobile view when the window size changes (resizing behavior)
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // This function is triggered when the user clicks the search button
  const handleSearch = async () => {
    // Don't proceed if the input field is empty
    if (!city.trim()) {
      alert("Please enter city");
      return;
    }

    try {
      // Make an API call to get weather data for the entered city
      const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);

      // If the city is not found (404 status), show an error
      if (response.status === 404) {
        setError(true);
        setWeatherData(null);
      } else {
        const data = await response.json(); // Parse the response data into JSON

        let icon = "./images/clear.png"; // Default to clear weather icon
        const condition = data.weather[0].main; // Extract the main weather condition

        // Assign different icons based on weather conditions
        if (condition === "Clouds") {
          icon = "./images/clouds.png";
        } else if (condition === "Clear") {
          icon = "./images/clear.png";
        } else if (condition === "Rain") {
          icon = "./images/rain.png";
        } else if (condition === "Mist") {
          icon = "./images/mist.png";
        } else if (condition === "Drizzle") {
          icon = "./images/drizzle.png";
        } else if (condition === "Snow") {
          icon = "./images/snow.png";
        } else {
          icon = "./images/clear.png"; // Fallback icon if no match is found
        }

        // Store the weather data in state for rendering
        setWeatherData({
          name: data.name, // City name
          temp: Math.round(data.main.temp), // Current temperature (rounded)
          humidity: data.main.humidity, // Humidity percentage
          wind: data.wind.speed, // Wind speed
          icon: icon, // Weather icon based on condition
        });

        setError(false);
      }
    } catch (error) {
      console.error("Error fetching weather:", error);
    }
  };

  // This function is triggered when the user clicks the reset button and clear input field and weather data.
  const handleClear = () => {
    setCity("");
    setWeatherData(null);
    setError(false);
  };

  return (
    <div
      style={{
        margin: 0,
        padding: 0,
        fontFamily: "Times New Roman, Times, serif",
        borderRadius: 10,
        backgroundColor: "#00DBDE",
        backgroundImage: "linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%)",
        width: "100%",
        minHeight: "100vh",
        boxSizing: "border-box",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        paddingTop: "40px",
      }}
    >
      <div
        style={{
          width: isMobile ? "95%" : "400px", // Adjust width for mobile screens
          backgroundColor: "#00DBDE",
          backgroundImage: "linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%)",
          borderRadius: "20px",
          padding: isMobile ? "25px 7px" : "30px 25px", // Adjust padding for mobile
          textAlign: "center",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "10px",
          }}
        >
          <input
            type="text"
            placeholder="Enter Your City"
            value={city}
            onChange={(e) => setCity(e.target.value)} // Update the city state when the user types
            spellCheck="false"
            style={{
              border: 0,
              outline: 0,
              background: "#ebfffc",
              color: "#555",
              padding: "10px 25px",
              height: "60px",
              borderRadius: "30px",
              flex: 1,
              fontSize: "18px",
              minWidth: 0,
            }}
          />

          <button
            onClick={handleSearch}
            style={{
              border: 0,
              outline: 0,
              background: "#ebfffc",
              borderRadius: "50%",
              width: "60px",
              height: "60px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src="./images/find.png" alt="Find" style={{ width: "16px" }} />
          </button>

          <button
            onClick={handleClear}
            style={{
              marginLeft: "5px",
              border: 0,
              outline: 0,
              background: "#ebfffc",
              borderRadius: "50%",
              width: "60px",
              height: "60px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src="./images/reset.png"
              alt="Clear"
              style={{ width: "20px" }}
            />
          </button>
        </div>

        {/* Display error message if city is invalid */}
        {error && (
          <div
            style={{
              textAlign: "left",
              marginLeft: "10px",
              fontSize: "14px",
              marginTop: "10px",
            }}
          >
            <p>Invalid City Name</p>
          </div>
        )}

        {weatherData && (
          <div>
            <img
              src={weatherData.icon} // Display the  weather condition's icon
              alt="Weather"
              style={{
                width: "170px",
                marginTop: "30px",
              }}
            />
            <h1
              style={{
                fontSize: "80px",
                fontWeight: 500,
              }}
            >
              {weatherData.temp}°C
            </h1>
            <h2
              style={{
                fontSize: "45px",
                fontWeight: 400,
                marginTop: "-10px",
              }}
            >
              {weatherData.name}
            </h2>

            {/* Show humidity and wind speed data */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0 20px",
                marginTop: "50px",
                gap: "20px",
                flexWrap: "wrap",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  textAlign: "left",
                  flex: 1,
                  minWidth: "120px",
                }}
              >
                <img
                  src="./images/humidity.png"
                  alt="Humidity"
                  style={{
                    width: "40px",
                    marginRight: "10px",
                  }}
                />
                <div>
                  <p
                    style={{
                      fontSize: "28px",
                      marginTop: "-6px",
                    }}
                  >
                    {weatherData.humidity}% {/* Display humidity */}
                  </p>
                  <p>Humidity</p>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  textAlign: "left",
                  flex: 1,
                  minWidth: "120px",
                }}
              >
                <img
                  src="./images/wind.png"
                  alt="Wind"
                  style={{
                    width: "40px",
                    marginRight: "10px",
                  }}
                />
                <div>
                  <p
                    style={{
                      fontSize: "28px",
                      marginTop: "-6px",
                    }}
                  >
                    {weatherData.wind} km/h {/* Display wind speed */}
                  </p>
                  <p>Wind Speed</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;
