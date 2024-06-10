import { Task } from "../task/Task";

export type Comment = {
  author: string | null;
  content: string | null;
  createdAt: Date;
  id: string;
  task?: Task | null;
  updatedAt: Date;
};
