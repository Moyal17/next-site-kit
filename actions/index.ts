import axios from 'axios';
import { get } from 'local-storage';

type headersType = {
  headers: {
    'Access-Control-Allow-Methods': string;
    Authorization?: string;
  }
}

const token = get('site-auth') || null;

export const client = axios.create({
  baseURL: 'http://localhost:8080'
});

export const clientConfig: headersType = {
  headers: {
    'Access-Control-Allow-Methods': 'OPTIONS, GET, POST, PATCH, PUT'
  }
};

if (token) {
  clientConfig.headers.Authorization = token as string;
}

client.interceptors.request.use((request) => {
  // console.log('interceptors request: ', request);
  return request;
}, (error) => {
  console.log('interceptors request error: ', error.message);
  return Promise.reject(error);
});

client.interceptors.response.use((response) => {
  console.log('interceptors response: ', response.data);
  return response.data;
}, (error) => {
  console.log('interceptors response error: ', error.message);
  console.log(`code: ${error.response.status}, data: ${error.response.data}`);
  return Promise.reject(error);
});


export const apiMethods = {
  articles: {
    getArticles (query: string) {
      const api = '/public/articles/categories';
      return client.get(query ? (api + query) : api, clientConfig);
    },
    getArticle: (uri: string) => client.get(`/public/articles/${uri}`, clientConfig),
    getArticlesByCategory: (uri: string) => client.get(`/public/articles/category/${uri}`, clientConfig),
  },
  pages: {
    getPage: (uri: string) => client.get(`/public/pages/${uri}`, clientConfig),
  },
  categories: {
    getCategories (query: string) {
      const api = '/public/categories';
      return client.get(query ? (api + query) : api, clientConfig);
    },
    getCategory: (uri: string) => client.get(`/public/categories/${uri}`, clientConfig),
  }
};
