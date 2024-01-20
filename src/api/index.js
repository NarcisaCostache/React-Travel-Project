import axios from 'axios';
  
  
export const getPlacesData= async (type, sw, ne) => {
    try {
        const {data: {data}}=await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
            params: {
              bl_latitude: sw.lat,
              bl_longitude: sw.lng,
              tr_latitude: ne.lat,
              tr_longitude: ne.lng,
            },

            headers: {
              'X-RapidAPI-Key': '3e62706e53msh449daa43ac2fdb3p1fca86jsncdd265c4ba51',
              'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
          });
        return data;

    }catch (error){
        console.log(error);

    }
};