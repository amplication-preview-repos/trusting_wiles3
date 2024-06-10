import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { CommentUpdateManyWithoutTasksInput } from "./CommentUpdateManyWithoutTasksInput";
import { PriorityWhereUniqueInput } from "../priority/PriorityWhereUniqueInput";

export type TaskUpdateInput = {
  assignedTo?: string | null;
  client?: ClientWhereUniqueInput | null;
  comments?: CommentUpdateManyWithoutTasksInput;
  createdBy?: string | null;
  description?: string | null;
  priority?: PriorityWhereUniqueInput | null;
  status?: string | null;
  title?: string | null;
};
