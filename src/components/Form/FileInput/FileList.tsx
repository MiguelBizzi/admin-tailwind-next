"use client";

import React, { ComponentProps } from "react";
import { useFileInput } from "./Root";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { FileItem } from "./FileItem";

export type FileListProps = ComponentProps<"input">;

export const FileList = (props: FileListProps) => {
    const [parent] = useAutoAnimate();
    const { files } = useFileInput();

    return (
        <div className="mt-4 space-y-3" ref={parent}>
            {files.map((file) => {
                return (
                    <FileItem
                        key={file.name}
                        name={file.name}
                        size={file.size}
                        state="complete"
                    />
                );
            })}
        </div>
    );
};
