import { TaskWhereUniqueInput } from "../task/TaskWhereUniqueInput";

export type CommentCreateInput = {
  author?: string | null;
  content?: string | null;
  task?: TaskWhereUniqueInput | null;
};
