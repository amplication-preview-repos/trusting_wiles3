import { Task } from "../task/Task";

export type Client = {
  createdAt: Date;
  currentStage: string | null;
  id: string;
  name: string | null;
  tasks?: Array<Task>;
  updatedAt: Date;
};
