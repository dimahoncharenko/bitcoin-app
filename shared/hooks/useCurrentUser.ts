import { useEffect, useState } from "react";

import { tokenService } from "../lib/token/utils";
import { axiosAuthInstance } from "../config/axios";

export const useCurrentUser = () => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    (async () => {
      try {
        const token = await tokenService.getToken();
        if (!token) return;

        const res = await axiosAuthInstance.get("/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        });

        setUser(res.data);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  return { user };
};
