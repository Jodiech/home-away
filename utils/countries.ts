import countries from "world-countries";

export const formattedCountries = countries.map((item) => {
  return {
    code: item.cca2,
    name: item.name.common,
    flag: item.flag,
    location: item.latlng,
    region: item.region,
  };
});
//set up helper function to find country based on country code
export const findCountryByCode = (code: string) => {
  return formattedCountries.find((item) => item.code === code);
};
