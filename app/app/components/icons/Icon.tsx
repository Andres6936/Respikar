import type {MouseEventHandler} from "react";

export interface Icon {
    size?: number;
    className?: string;
    onClick?: MouseEventHandler<HTMLDivElement>
}