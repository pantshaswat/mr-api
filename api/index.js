const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const data = [
    {
        "location": {
          "city": "Kathmandu",
          "latitude": 27.7172,
          "longitude": 85.3240,
        },
        "weather": {
          "temperature": 22.5,
          "feels_like": 55.5,
          "condition": "Rainy",
          "risk_factor": 1,
          "precipitation_probability": 30,
          "wind_speed": 12,
          "wind_direction": "NW",
           "atm_pressure": 760,
           "humidity": 35
        },
      },
      {
        "location": {
          "city": "Pokhara",
          "latitude": 28.2096,
          "longitude": 83.9856,
        },
        "weather": {
          "temperature": -5,
          "feels_like": 0,
          "condition": "Snowy",
          "risk_factor": 4,
          "precipitation_probability": 40,
          "wind_speed": 18,
          "wind_direction": "NW",
           "atm_pressure": 770,
           "humidity": 50
        },
      },
      {
        "location": {
          "city": "Mustang",
          "latitude": 28.9985,
          "longitude": 83.8473,
        },
        "weather": {
          "temperature": -10,
          "feels_like": -5,
          "condition": "Snowy",
          "risk_factor": 1,
          "precipitation_probability": 40,
          "wind_speed": 13,
          "wind_direction": "SE",
           "atm_pressure": 765,
           "humidity": 55
        },
      },
      {
        "location": {
          "city": "Dhangahi",
          "latitude": 28.6852,
          "longitude": 80.6216,
        },
        "weather": {
          "temperature": 38,
          "feels_like": 43,
          "condition": "Sunny",
          "risk_factor": 4,
          "precipitation_probability": 20,
          "wind_speed": 19,
          "wind_direction": "NS",
           "atm_pressure": 769,
           "humidity": 30
        },
      },
        {
            "location": {
            "city": "Biratnagar",
            "latitude": 26.4559,
            "longitude": 87.2673,
            },
            "weather": {
            "temperature": 15,
            "feels_like": 12,
            "condition": "Rainy",
            "risk_factor": 2,
            "precipitation_probability": 60,
            "wind_speed": 10,
            "wind_direction": "NE",
             "atm_pressure": 765,
             "humidity": 58
            },
        },
        {
            "location": {
            "city": "Dharan",
            "latitude": 26.8142,
            "longitude": 87.2834,
            },
            "weather": {
            "temperature": 32,
            "feels_like": 37,
            "condition": "Sunny",
            "risk_factor": 3,
            "precipitation_probability": 15,
            "wind_speed": 16,
            "wind_direction": "NE",
             "atm_pressure": 767,
             "humidity": 40
            },
        },
        {
            "location": {
            "city": "Birgunj",
            "latitude": 27.0119,
            "longitude": 84.8769,
            },
            "weather": {
            "temperature": 35,
            "feels_like": 40,
            "condition": "Sunny",
            "risk_factor": 4,
            "precipitation_probability": 25,
            "wind_speed": 17,
            "wind_direction": "NW",
             "atm_pressure": 768,
             "humidity": 35
            },
        },
        {
            "location": {
            "city": "Janakpur",
            "latitude": 26.7271,
            "longitude": 85.9223,
            },
            "weather": {
            "temperature": 37,
            "feels_like": 42,
            "condition": "Sunny",
            "risk_factor": 5,
            "precipitation_probability": 30,
            "wind_speed": 18,
            "wind_direction": "NW",
             "atm_pressure": 770,
             "humidity": 30
            },
        },
       

      
]

app.get('/weather', (req, res) => {
    res.json(data[Math.random() * data.length | 0]);
}   );

app.listen(3000, () => {
    console.log('Server is running on port 3000');
}
);