import { TaskWhereUniqueInput } from "../task/TaskWhereUniqueInput";

export type CommentUpdateInput = {
  author?: string | null;
  content?: string | null;
  task?: TaskWhereUniqueInput | null;
};
