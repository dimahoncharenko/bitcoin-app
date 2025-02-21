import axios from "axios";
import { useEffect, useState } from "react";

import { ENV_VARS } from "../constants/env.const";
import { tokenService } from "../lib/token/utils";

export const useCurrentUser = () => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    (async () => {
      try {
        const token = await tokenService.getToken();
        if (!token) return;

        const res = await axios.get(ENV_VARS.AUTH_API + "/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        });

        console.log("USER: ", res.data);
        setUser(res.data);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  return { user };
};
