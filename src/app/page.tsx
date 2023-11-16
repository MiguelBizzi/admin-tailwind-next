import { SettingsTabs } from "@/components/SettingsTabs";
import * as Input from "@/components/Input";
import * as FileInput from "@/components/Form/FileInput";
import { Bold, Italic, Link, List, ListOrdered, Mail } from "lucide-react";
import { Select } from "@/components/Form/Select";
import { SelectItem } from "@/components/Form/Select/Selectitem";
import { TextArea } from "@/components/Form/Textarea";
import { Button } from "@/components/Button";

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
                        <Button type="button" variant="outline">
                            Cancel
                        </Button>
                        <Button
                            type="submit"
                            form="setting-form"
                            variant="primary"
                        >
                            Save
                        </Button>
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
                        <Select placeholder="Select a country...">
                            <SelectItem value="br" text="Brazil" />
                            <SelectItem value="us" text="United States" />
                            <SelectItem value="ca" text="Canada" />
                            <SelectItem value="fr" text="France" />
                            <SelectItem value="jp" text="Japan" />
                            <SelectItem value="de" text="Germany" />
                            <SelectItem value="au" text="Australia" />
                            <SelectItem value="gb" text="United Kingdom" />
                        </Select>
                    </div>

                    {/* Timezone */}
                    <div className="grid grid-cols-form gap-3 pt-5">
                        <label
                            htmlFor="timezone"
                            className="text-sm font-medium text-zinc-700"
                        >
                            Timezone
                        </label>
                        <Select placeholder="Select a timezone...">
                            <SelectItem
                                value="BRT"
                                text="Brasília Time (BRT)"
                            />
                            <SelectItem
                                value="GMT"
                                text="Greenwich Mean Time (GMT)"
                            />
                            <SelectItem
                                value="EST"
                                text="Eastern Standard Time (EST)"
                            />
                            <SelectItem
                                value="CST"
                                text="Central Standard Time (CST)"
                            />
                            <SelectItem
                                value="MST"
                                text="Mountain Standard Time (MST)"
                            />
                            <SelectItem
                                value="PST"
                                text="Pacific Standard Time (PST)"
                            />
                            <SelectItem
                                value="CET"
                                text="Central European Time (CET)"
                            />
                            <SelectItem
                                value="JST"
                                text="Japan Standard Time (JST)"
                            />
                            <SelectItem
                                value="AEDT"
                                text="Australian Eastern Daylight Time (AEDT)"
                            />
                        </Select>
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
                        <div className="space-y-3">
                            <div className="grid gap-3 grid-cols-2">
                                <Select placeholder="" defaultValue="normal">
                                    <SelectItem
                                        value="normal"
                                        defaultChecked
                                        text="Normal text"
                                    />
                                    <SelectItem value="md" text="Markdown" />
                                </Select>
                                <div className="flex items-center gap-1">
                                    <Button type="button" variant="ghost">
                                        <Bold
                                            className="h-4 w-4 text-zinc-500"
                                            strokeWidth={3}
                                        />
                                    </Button>
                                    <Button type="button" variant="ghost">
                                        <Italic
                                            className="h-4 w-4 text-zinc-500"
                                            strokeWidth={3}
                                        />
                                    </Button>
                                    <Button type="button" variant="ghost">
                                        <Link
                                            className="h-4 w-4 text-zinc-500"
                                            strokeWidth={3}
                                        />
                                    </Button>
                                    <Button type="button" variant="ghost">
                                        <List
                                            className="h-4 w-4 text-zinc-500"
                                            strokeWidth={3}
                                        />
                                    </Button>
                                    <Button type="button" variant="ghost">
                                        <ListOrdered
                                            className="h-4 w-4 text-zinc-500"
                                            strokeWidth={3}
                                        />
                                    </Button>
                                </div>
                            </div>
                            <TextArea
                                id="bio"
                                defaultValue="I'm a Fullstack Developer based in Minas Gerais, Brazil. I specialise in Javascript development."
                            />
                        </div>
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
                        <Button type="button" variant="outline">
                            Cancel
                        </Button>
                        <Button
                            type="submit"
                            form="setting-form"
                            variant="primary"
                        >
                            Save
                        </Button>
                    </div>
                </form>
            </div>
        </>
    );
}
