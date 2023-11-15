import React, { ComponentProps } from "react";

export interface TextAreaProps extends ComponentProps<"textarea"> {}

export const TextArea = (props: TextAreaProps) => {
    return (
        <textarea
            className="min-h-[120px] resize-y w-full rounded-lg border border-zinc-300 px-3 py-2 shadow-sm"
            {...props}
        />
    );
};
