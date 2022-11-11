import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const CountryContext = createContext({});

const CountryContextProvider = ({ children }) => {
  const [countryData, setCountryData] = useState([]);
  const [regionData, setRegionData] = useState([]);
  const [filterCountryData, setFilterCountryData] = useState([]);
  useEffect(() => {
    axios
      .get("https://restcountries.com/v2/all?fields=name,region,flag")
      .then((res) => setCountryData(res.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    let temp = [];
    countryData.forEach((country) => {
      if (!temp.includes(country.region)) {
        temp.push(country.region);
      }
    });
    setRegionData(temp);
    setFilterCountryData(countryData);
  }, [countryData]);

  const regionHandler = (selectedRegion) => {
    if (selectedRegion === "All") {
      setFilterCountryData(countryData);
    } else {
      var tempFilterCountryData = countryData.filter(
        (country) => country.region === selectedRegion
      );
      setFilterCountryData(tempFilterCountryData);
    }
  };

  const value = {
    countryData,
    regionData,
    regionHandler,
    filterCountryData,
  };
  return (
    <CountryContext.Provider value={value}>{children}</CountryContext.Provider>
  );
};

export default CountryContextProvider;
