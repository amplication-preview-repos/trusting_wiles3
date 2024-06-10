import { Task } from "../task/Task";

export type Priority = {
  createdAt: Date;
  id: string;
  priorityLevel: string | null;
  tasks?: Array<Task>;
  updatedAt: Date;
};
