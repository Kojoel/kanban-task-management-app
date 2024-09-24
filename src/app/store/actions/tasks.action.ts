import { createAction, props } from "@ngrx/store";
import { Task } from "zone.js/lib/zone-impl";

export const setCompleteTask = createAction('[ViewTaskModal] Set Completed Tasks', props<{ subtask: Task[] }>());