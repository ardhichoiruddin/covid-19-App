
export const CountryTransform = (country, countryData) =>{
    const countryOption = countryData.find(cntry => cntry.value === country.toUpperCase());
    const { name } = {...countryOption};
    return name;
}