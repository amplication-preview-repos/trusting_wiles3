import { TaskUpdateManyWithoutClientsInput } from "./TaskUpdateManyWithoutClientsInput";

export type ClientUpdateInput = {
  currentStage?: string | null;
  name?: string | null;
  tasks?: TaskUpdateManyWithoutClientsInput;
};
