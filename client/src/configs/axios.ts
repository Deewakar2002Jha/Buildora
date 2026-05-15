import axios from 'axios';

let baseEnv = import.meta.env.VITE_BASEURL?.replace(/\/+$/, "") || window.location.origin;
if (baseEnv.endsWith('/api')) {
    baseEnv = baseEnv.slice(0, -4);
}

const api = axios.create({
    baseURL: `${baseEnv}/api`,
    withCredentials: true
});

export default api