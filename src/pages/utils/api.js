import axios from 'axios';

export const fetchDataFromApi =async(url)=>{
    try {
        const {data} = await axios.get("http://localhost:5000" + url);
        return data;
    } catch (error) {
        console.log(error);
        return error
    }
}

export const postData = async(url,formData)=>{
    const {res} = await axios.post("http://localhost:5000" +url , formData)
    return res;
}