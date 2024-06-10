import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TaskListRelationFilter } from "../task/TaskListRelationFilter";

export type PriorityWhereInput = {
  id?: StringFilter;
  priorityLevel?: StringNullableFilter;
  tasks?: TaskListRelationFilter;
};
