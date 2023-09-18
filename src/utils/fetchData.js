export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '8069d9d7a2msh424d85dc5ebbf8ap1a7fc1jsn4978052310df',/*f*/
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};


export const fetchData = async (url, options) => {

    const response = await fetch(url, options);
    const data = await response.json();
    return data;
}