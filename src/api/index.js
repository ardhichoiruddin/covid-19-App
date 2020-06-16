import axios from 'axios';

// Fetch Covid Data
export const fetchData = async(changeCountry) =>{
    const url ='https://covid19.mathdro.id/api';

    try{

        const { data : { confirmed, recovered, deaths, lastUpdate } } = await axios.get(`${url}/countries/${changeCountry}`);
        return { confirmed, recovered, deaths, lastUpdate };
        
       
    }catch(error){
        console.log(error)
    }
}


// Fetch News Data
export const FetchNews = async(changeCountry) =>{
    const url = 'https://newsapi.org/v2/top-headlines?language=en';
    const apiKey = '0f428063994d44b488fe222c96848b6b';
    
    try{

        const { data : { articles } }  = await axios.get(`${url}&country=${changeCountry}&category=health&apiKey=${apiKey}`);
        return articles;
                   

    }catch(error){

    }
   
}


export const FetchCountry = async() =>{
    const url ='https://covid19.mathdro.id/api';

    try{

        const { data : { countries } } = await axios.get(`${url}/countries/`);
        return countries;

    }catch(error){
      
    }

}