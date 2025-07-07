export const uploadAvatar = async (file: File): Promise<string> => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "avatar_upload");
  formData.append("folder", "avatars");

  const res = await fetch(process.env.NEXT_PUBLIC_CLOUDINARY_API!, {
    method: "POST",
    body: formData,
  });
  const data = await res.json();

  if (res.ok) {
    return data.secure_url;
  } else {
    console.error("Cloudinary upload failed", data);
    return "";
  }
};
