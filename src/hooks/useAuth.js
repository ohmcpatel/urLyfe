import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();

export function useAuth() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribeFromAuthStateChanged = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return unsubscribeFromAuthStateChanged;
  }, []);

  return {
    user,
  };
}
