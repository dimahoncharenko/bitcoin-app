import { ENV_VARS } from "@/shared/constants/env.const";
import axios from "axios";

export type Comment = {
  postId: number;
  id: string;
  name: string;
  email: string;
  body: string;
};

class CommentsService {
  async getCommentsByPostId(postId: string): Promise<Comment[]> {
    const response = await axios.get(
      ENV_VARS.DATA_API + `/comments?postId=${postId}`
    );
    return response.data;
  }
}

export const commentsService = new CommentsService();
