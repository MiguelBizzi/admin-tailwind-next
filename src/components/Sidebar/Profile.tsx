import { LogOut } from "lucide-react";

export const Profile = () => {
    return (
        <div className="grid grid-cols-profile items-center gap-3">
            <img
                src="https://github.com/miguelbizzi.png"
                alt=""
                className="h-10 w-10 rounded-full"
            />

            <div className="flex flex-col truncate">
                <span className="text-sm font-semibold text-zinc-700">
                    Miguel Bizzi
                </span>
                <span className="text-sm truncate text-zinc-500">
                    migueloliveirabizzi@gmail.com
                </span>
            </div>
            <button
                type="button"
                className="ml-auto p-2 rounded-md hover:bg-zinc-50"
            >
                <LogOut className="h-5 w-5 text-zinc-500" />
            </button>
        </div>
    );
};
