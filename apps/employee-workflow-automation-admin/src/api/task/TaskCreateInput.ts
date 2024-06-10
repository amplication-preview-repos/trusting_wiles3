import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { CommentCreateNestedManyWithoutTasksInput } from "./CommentCreateNestedManyWithoutTasksInput";
import { PriorityWhereUniqueInput } from "../priority/PriorityWhereUniqueInput";

export type TaskCreateInput = {
  assignedTo?: string | null;
  client?: ClientWhereUniqueInput | null;
  comments?: CommentCreateNestedManyWithoutTasksInput;
  createdBy?: string | null;
  description?: string | null;
  priority?: PriorityWhereUniqueInput | null;
  status?: string | null;
  title?: string | null;
};
