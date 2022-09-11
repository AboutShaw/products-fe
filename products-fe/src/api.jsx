import axios from "axios";

const productsApi = axios.create({
    baseURL: 'http://localhost:9090/api'
  });


const getProducts = () => {    
    return productsApi.get(`/products`, {params: {order, filter, limit}})
        .then((response) => {
            return response.data
        })
};

export { getProducts,  productsApi };
