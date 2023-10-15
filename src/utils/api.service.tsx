import axios, { AxiosInstance, CreateAxiosDefaults } from "axios";
import { clearLocalStorage, getUser, setUser } from "./local-storage.service";
import Router from "next/router";
import { User } from "@/models/user";

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 120 * 1000,
  headers: {
    'Accept': 'application/json',
    'Content-Type': ' application/json'
  }
} as CreateAxiosDefaults);

axiosInstance.interceptors.request.use((config) => {
  let userSession: User = getUser();
  if (config.headers.hasOwnProperty('Skip-Headers')) {
      delete config.headers['Skip-Headers'];
  } else {
      if (!userSession || !userSession.token) {
          clearLocalStorage();
          Router.push(`/onboarding/signup`);
          return Promise.reject({error: 'Token not found!'});
      }
      config.headers.Authorization = `Bearer ${userSession.token}`;
      delete config.headers['Skip-Headers'];
  }
  return config;
},
(error) => {
  // Handle request errors here

  return Promise.reject(error);
});

axiosInstance.interceptors.response.use((response) => {
  return response.data;
})

class ApiService {
  static callPost(url: string, payload: any, headers: any = {}, options = {}) {
    return axiosInstance.post(url, payload, {
      headers: {
        ...headers
      },
      ...options
    });
  }

  static callGet(url: string, params: any, headers: any = {}) {
    return axiosInstance.get(url, {
      headers: {
        ...headers
      },
      params: params
    });
  }

  static callPut(url: string, payload: any, headers: any = {}) {
    return axiosInstance.put(url, payload, {
      headers: {
        ...headers
      }
    });
  }

  static callPatch(url: string, payload: any, headers: any = {}) {
    return axiosInstance.patch(url, payload, {
      headers: {
        ...headers
      }
    });
  }

  static callDelete(url: string, params: any, headers: any = {}) {
    return axiosInstance.delete(url, {
      headers: {
        ...headers
      },
      params: params
    });
  }
}

export default ApiService;