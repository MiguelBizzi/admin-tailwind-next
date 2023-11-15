"use client";

import { User } from "lucide-react";
import React, { useMemo } from "react";
import { useFileInput } from "./Root";

export const ImagePreview = () => {
    const { files } = useFileInput();

    const previewURL = useMemo(() => {
        if (files.length === 0) return null;

        return URL.createObjectURL(files[0]);
    }, [files]);

    if (previewURL === null) {
        return (
            <div className="bg-violet-50 h-16 w-16 flex items-center justify-center rounded-full ">
                <User className="w-8 h-8 text-violet-600" />
            </div>
        );
    }

    return (
        // eslint-disable-next-line @next/next/no-img-element
        <img
            src={previewURL}
            alt="Imagem preview avatar"
            className="h-16 w-16 rounded-full object-cover"
        />
    );
};
