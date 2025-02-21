import { Comment } from "@/shared/lib/comments/utils";

export const commentsArePresent = (
  comments: Comment[] | null | undefined
): comments is Comment[] => {
  if (comments == null) return false;

  return comments.length > 0;
};
