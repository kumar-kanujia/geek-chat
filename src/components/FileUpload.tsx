import React, { FC } from "react";
import Image from "next/image";
import { UploadDropzone } from "@/utils/uploadthing";
import { BsX } from "react-icons/bs";

interface FileUploadProps {
  onChange: (url?: string) => void;
  value: string;
}

const FileUpload: FC<FileUploadProps> = function ({ onChange, value }) {
  const fileType = value.split(".").pop();

  if (value && fileType !== "pdf") {
    return (
      <div className="relative h-20 w-20">
        <Image fill src={value} alt="Upload" className="rounded-full" />
        <button
          onClick={() => onChange("")}
          className="bg-rose-500 text-white p-1 rounded-full absolute top-0 right-0 shadow-sm"
          type="button"
        >
          <BsX className="h-4 w-4" />
        </button>
      </div>
    );
  }

  return (
    <UploadDropzone
      endpoint={"serverImage"}
      onClientUploadComplete={(res) => {
        onChange(res?.[0].url);
      }}
      onUploadError={(err) => {
        console.error(err);
      }}
    />
  );
};

export default FileUpload;
