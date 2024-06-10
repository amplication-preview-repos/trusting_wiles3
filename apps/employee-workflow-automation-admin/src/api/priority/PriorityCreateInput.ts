import { TaskCreateNestedManyWithoutPrioritiesInput } from "./TaskCreateNestedManyWithoutPrioritiesInput";

export type PriorityCreateInput = {
  priorityLevel?: string | null;
  tasks?: TaskCreateNestedManyWithoutPrioritiesInput;
};
