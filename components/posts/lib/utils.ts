import { axiosDataInstance } from "@/shared/config/axios";
import { ENV_VARS } from "@/shared/constants/env.const";
import { Post } from "@/shared/lib/posts/utils";

export const getPosts = async () => {
  const response = await axiosDataInstance.get<Post[]>(
    ENV_VARS.DATA_API + "/posts"
  );
  return response.data;
};

export const handleFetchPostsError = (err: unknown) => {
  console.error("Error fetching posts:", err);
};
