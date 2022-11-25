import { FormEventHandler } from "react";

export type {todoSchema, Props}

interface todoSchema{
    id: number;
    todo: string;
    isDone: boolean;
}

interface Props{
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    addTodo:(e:React.FormEvent)=> void ;
  }

  