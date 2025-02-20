import { ENV_VARS } from "@/shared/constants/env.const";
import axios from "axios";

export type Post = {
  id: number;
  title: string;
  body: string;
};

class PostsService {
  async getAllPosts(): Promise<Post[]> {
    const response = await axios.get(ENV_VARS.DATA_API + "/posts");
    return response.data;
  }
}

export const postsService = new PostsService();
