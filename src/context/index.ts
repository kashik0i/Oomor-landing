import {useContext} from 'react';
import {AuthContext} from "@/context/AuthContext.ts";

// Custom hook to use the auth context
export const useAuth = () => useContext(AuthContext);