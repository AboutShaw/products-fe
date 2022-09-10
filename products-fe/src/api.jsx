import axios from "axios";

const marketplaceApi = axios.create({
    baseURL: 'https://nc-marketplace.herokuapp.com/api'
  });


const getItems = (category_name) => {    
    return marketplaceApi.get(`/items`, {params: {category_name}})
        .then((response) => {
            return response.data
        })
};

const searchItems = (search) => {    
    return marketplaceApi.get(`/items`, {params: {search}})
        .then((response) => {
            return response.data
        })
};

export { getItems, searchItems,  marketplaceApi };
