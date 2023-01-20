import { FC, HTMLProps, ReactNode } from "react"

export interface IInputProps extends HTMLProps<HTMLInputElement> {
  labelProps?: HTMLProps<HTMLLabelElement>;
   labelPlacement?: "before" | "after" | "none";
   labelText?: ReactNode | string;
   labelClassName?: string;
   Logo?: FC;
   logoProps?: HTMLProps<HTMLSpanElement>;

}