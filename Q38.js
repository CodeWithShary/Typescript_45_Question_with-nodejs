/*Cities: Write a function called describe_city() that accepts the name of a city and its
country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the
parameter for the country a default value. Call your function for three different cities, at
least one of which is not in the default country. */
function describe_city(cityName, countyName = `Default Country`) {
    return `${cityName} is in ${countyName}`;
}
console.log(describe_city(`Karachi`, `Pakistan`));
console.log(describe_city(`Dehli`, `India`));
console.log(describe_city(`Dehli`));
export {};
