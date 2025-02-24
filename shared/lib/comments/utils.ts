import { axiosDataInstance } from "@/shared/config/axios";

export type Comment = {
  postId: number;
  id: string;
  name: string;
  email: string;
  body: string;
};

class CommentsService {
  async getCommentsByPostId(postId: string): Promise<Comment[]> {
    const response = await axiosDataInstance.get(`/comments?postId=${postId}`);
    return response.data;
  }
}

export const commentsService = new CommentsService();
