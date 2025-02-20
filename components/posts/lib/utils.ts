import { ENV_VARS } from "@/shared/constants/env.const";
import { Post } from "@/shared/lib/posts/utils";
import axios from "axios";

export const getPosts = async () => {
  const response = await axios.get<Post[]>(ENV_VARS.DATA_API + "/posts");
  return response.data;
};

export const handleFetchPostsError = (err: unknown) => {
  console.error("Error fetching posts:", err);
};
