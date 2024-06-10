import { TaskUpdateManyWithoutPrioritiesInput } from "./TaskUpdateManyWithoutPrioritiesInput";

export type PriorityUpdateInput = {
  priorityLevel?: string | null;
  tasks?: TaskUpdateManyWithoutPrioritiesInput;
};
