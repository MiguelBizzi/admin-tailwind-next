import { SettingsTabs } from "@/components/SettingsTabs";
import Image from "next/image";
import * as Input from "@/components/Input";
import * as FileInput from "@/components/Form/FileInput";
import { Mail, UploadCloud, User } from "lucide-react";

export default function Home() {
    return (
        <>
            <h1 className="text-3xl font-medium text-zinc-900">Settings</h1>

            <SettingsTabs />

            <div className="mt-6 flex flex-col ">
                <div className="flex justify-between items-center pb-6 border-b border-zinc-200">
                    <div className="space-y-1">
                        <h2 className="text-lg font-medium text-zinc-900">
                            Personal info
                        </h2>
                        <span className="text-sm text-zinc-500">
                            Update yout photo and personal details here.
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <button
                            type="button"
                            className="rounded-lg px-4 py-2 text-sm font-semibold shadow-sm border border-zinc-300 text-zinc-700 hover:bg-zinc-50 transition-colors duration-100"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            form="setting-form"
                            className="rounded-lg px-4 py-2 text-sm font-semibold shadow-sm bg-violet-600 text-white hover:bg-violet-700 transition-colors duration-100"
                        >
                            Save
                        </button>
                    </div>
                </div>

                <form
                    id="setting-form"
                    className="mt-6 flex flex-col w-full gap-5 divide-y divide-zinc-200"
                >
                    {/* First Name */}
                    <div className="grid grid-cols-form gap-3">
                        <label
                            htmlFor="firstName"
                            className="text-sm font-medium text-zinc-700"
                        >
                            Name
                        </label>
                        <div className="grid gap-6 grid-cols-2">
                            <Input.Root>
                                <Input.Control
                                    id="firstName"
                                    defaultValue="Miguel"
                                />
                            </Input.Root>

                            <Input.Root>
                                <Input.Control defaultValue="Bizzi" />
                            </Input.Root>
                        </div>
                    </div>

                    {/* Email */}
                    <div className="grid grid-cols-form gap-3 pt-5">
                        <label
                            htmlFor="email"
                            className="text-sm font-medium text-zinc-700"
                        >
                            Email address
                        </label>
                        <Input.Root>
                            <Input.Prefix>
                                <Mail className="h-5 w-5 text-zinc-500" />
                            </Input.Prefix>
                            <Input.Control
                                id="email"
                                type="email"
                                defaultValue="migueloliveirabizzi@gmail.com"
                            />
                        </Input.Root>
                    </div>

                    {/* Your Photo */}
                    <div className="grid grid-cols-form gap-3 pt-5">
                        <label
                            htmlFor="photo-file"
                            className="text-sm font-medium text-zinc-700 "
                        >
                            Your photo
                            <span className="block mt-0.5 text-sm font-normal text-zinc-500">
                                This will be displayed on your profile.
                            </span>
                        </label>
                        <FileInput.Root className="flex items-start gap-5">
                            <FileInput.ImagePreview />
                            <FileInput.Trigger />
                            <FileInput.Control accept="image/*" />
                        </FileInput.Root>
                    </div>

                    {/* Role */}
                    <div className="grid grid-cols-form gap-3 pt-5">
                        <label
                            htmlFor="role"
                            className="text-sm font-medium text-zinc-700"
                        >
                            Role
                        </label>
                        <Input.Root>
                            <Input.Control
                                id="role"
                                defaultValue="Dev. Fullstack"
                            />
                        </Input.Root>
                    </div>

                    {/* Country */}
                    <div className="grid grid-cols-form gap-3 pt-5">
                        <label
                            htmlFor="country"
                            className="text-sm font-medium text-zinc-700"
                        >
                            Country
                        </label>
                        <div></div>
                    </div>

                    {/* Timezone */}
                    <div className="grid grid-cols-form gap-3 pt-5">
                        <label
                            htmlFor="timezone"
                            className="text-sm font-medium text-zinc-700"
                        >
                            Timezone
                        </label>
                        <div></div>
                    </div>

                    {/* Bio */}
                    <div className="grid grid-cols-form gap-3 pt-5">
                        <label
                            htmlFor="bio"
                            className="text-sm font-medium text-zinc-700 "
                        >
                            Bio
                            <span className="block mt-0.5 text-sm font-normal text-zinc-500">
                                Write a short introduction.
                            </span>
                        </label>
                        <div></div>
                    </div>

                    {/* Portifolio */}
                    <div className="grid grid-cols-form gap-3 pt-5">
                        <label
                            htmlFor="portfolio"
                            className="text-sm font-medium text-zinc-700 "
                        >
                            Portfolio projects
                            <span className="block mt-0.5 text-sm font-normal text-zinc-500">
                                Share a few snippets of your work.
                            </span>
                        </label>
                        <FileInput.Root>
                            <FileInput.Trigger />
                            <FileInput.FileList />
                            <FileInput.Control multiple />
                        </FileInput.Root>
                    </div>

                    <div className="flex items-center justify-end gap-2 pt-5">
                        <button
                            type="button"
                            className="rounded-lg px-4 py-2 text-sm font-semibold shadow-sm border border-zinc-300 text-zinc-700 hover:bg-zinc-50 transition-colors duration-100"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="rounded-lg px-4 py-2 text-sm font-semibold shadow-sm bg-violet-600 text-white hover:bg-violet-700 transition-colors duration-100"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}
