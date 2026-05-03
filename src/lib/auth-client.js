import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({

    baseURL: "http://qurbani-eid-hat.vercel.app"
})
export const { signIn, signup, signOut, useSession } = createAuthClient ()
