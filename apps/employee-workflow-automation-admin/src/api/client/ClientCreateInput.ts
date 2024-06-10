import { TaskCreateNestedManyWithoutClientsInput } from "./TaskCreateNestedManyWithoutClientsInput";

export type ClientCreateInput = {
  currentStage?: string | null;
  name?: string | null;
  tasks?: TaskCreateNestedManyWithoutClientsInput;
};
