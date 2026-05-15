import { createAuthClient } from "better-auth/react"

let authBaseURL = import.meta.env.VITE_BASEURL?.startsWith('http') 
    ? import.meta.env.VITE_BASEURL 
    : window.location.origin;

authBaseURL = authBaseURL.replace(/\/+$/, "");
if (authBaseURL.endsWith('/api')) {
    authBaseURL = authBaseURL.slice(0, -4);
}

export const authClient = createAuthClient({
    baseURL: `${authBaseURL}/api/auth`,
    fetchOptions: {credentials: 'include'},
})

export const { signIn, signUp, useSession } = authClient;