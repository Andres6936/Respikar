import type {User} from "~/types/User";
import {useOutletContext} from "react-router";

export type ContextAuth = {
    user: User | null,
    setUser: (user: User) => void,
}

export function useAuth() {
    return useOutletContext<ContextAuth>();
}