import React, { useState, useEffect } from "react";

const Weather = () => {
  // State variables
  const [city, setCity] = useState(""); // User input
  const [weatherData, setWeatherData] = useState(null); // Fetched weather data
  const [error, setError] = useState(false); // Error flag
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600); // Responsive check

  // Get API key from .env file
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;

  // Handle screen resize to update isMobile state
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Search weather
  const handleSearch = async () => {
    if (!city.trim()) {
      alert("Please enter city");
      return;
    }

    try {
      const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);
      if (response.status === 404) {
        setError(true);
        setWeatherData(null);
      } else {
        const data = await response.json();

        // Assign icon according to weather condition
        let icon = "./images/clear.png";
        const condition = data.weather[0].main;

        if (condition === "Clouds") icon = "./images/clouds.png";
        else if (condition === "Clear") icon = "./images/clear.png";
        else if (condition === "Rain") icon = "./images/rain.png";
        else if (condition === "Mist") icon = "./images/mist.png";
        else if (condition === "Drizzle") icon = "./images/drizzle.png";
        else if (condition === "Snow") icon = "./images/snow.png";

        // Set data to state
        setWeatherData({
          name: data.name,
          temp: Math.round(data.main.temp),
          humidity: data.main.humidity,
          wind: data.wind.speed,
          icon: icon,
        });

        setError(false);
      }
    } catch (error) {
      console.error("Error fetching weather:", error);
    }
  };

  // Clear city and data
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
          width: isMobile ? "95%" : "400px",
          backgroundColor: "#00DBDE",
          backgroundImage: "linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%)",
          borderRadius: "20px",
          padding: isMobile ? "25px 7px" : "30px 25px",
          textAlign: "center",
          boxSizing: "border-box",
        }}
      >
        {/* Input & Buttons */}
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
            onChange={(e) => setCity(e.target.value)}
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

          {/* Search Button */}
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

          {/* Clear Button */}
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

        {/* Show error */}
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

        {/* Show weather */}
        {weatherData && (
          <div>
            <img
              src={weatherData.icon}
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

            {/* Humidity & Wind */}
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
              {/* Humidity */}
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
                    {weatherData.humidity}%
                  </p>
                  <p>Humidity</p>
                </div>
              </div>

              {/* Wind */}
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
                    {weatherData.wind} km/h
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
