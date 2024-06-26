/*City Names: Write a function called city_country() that takes in the name of a city and
its country. The function should return a string formatted like this:
"Lahore, Pakistan"
Call your function with at least three city-country pairs, and print the value
that’s returned*/
function city_country(cityName, countyName) {
    console.log(`${cityName},${countyName}`);
}
let CityCountry = city_country(`karachi`, `pakistan`);
console.log(CityCountry);
city_country(`Texas`, `Ameica`);
city_country(`CapeTown`, `South Africa`);
city_country(`Dhaka`, `Bangladesh`);
export {};
