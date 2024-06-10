import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { CommentListRelationFilter } from "../comment/CommentListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { PriorityWhereUniqueInput } from "../priority/PriorityWhereUniqueInput";

export type TaskWhereInput = {
  assignedTo?: StringNullableFilter;
  client?: ClientWhereUniqueInput;
  comments?: CommentListRelationFilter;
  createdBy?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  priority?: PriorityWhereUniqueInput;
  status?: StringNullableFilter;
  title?: StringNullableFilter;
};
