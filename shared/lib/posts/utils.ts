import { axiosDataInstance } from "@/shared/config/axios";

export type Post = {
  id: number;
  title: string;
  body: string;
};

class PostsService {
  async getAllPosts(): Promise<Post[]> {
    const response = await axiosDataInstance.get("/posts");
    return response.data;
  }

  async getPostById(id: string): Promise<Post> {
    const response = await axiosDataInstance.get(`/posts/${id}`);
    return response.data;
  }
}

export const postsService = new PostsService();
