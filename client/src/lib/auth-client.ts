import { createAuthClient } from "better-auth/react"

export const authClient = createAuthClient({
    baseURL: import.meta.env.VITE_BASEURL?.startsWith('http') 
        ? `${import.meta.env.VITE_BASEURL}/auth` 
        : `${window.location.origin}/api/auth`,
    fetchOptions: {credentials: 'include'},
})

export const { signIn, signUp, useSession } = authClient;