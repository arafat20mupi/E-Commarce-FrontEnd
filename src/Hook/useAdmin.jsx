import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import useAxiosPublic from "./useAxiosPublic";

const useAdmin = () => {
    const { user } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    const [role, setRole] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!user?.uid) {
            setLoading(false);
            return;
        }

        axiosPublic.get('/api/users')
            .then(res => {
                const currentUser = res.data.users.find(u => u.uid === user.uid);
                setRole(currentUser ? currentUser.role : "user"); // Default to "user" if not found
            })
            .catch(err => {
                console.error("Error fetching users:", err);
                setRole("user"); // Default to "user" in case of error
            })
            .finally(() => setLoading(false));
    }, [user?.uid, axiosPublic]);

    return { role, loading };
};

export default useAdmin;
