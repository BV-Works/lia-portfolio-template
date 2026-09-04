const CLOUDINARY_BASE = "https://res.cloudinary.com/dwi9l26qx/image/upload";

export const getCloudinaryUrl = (publicId: string, width: number): string => {
  return `${CLOUDINARY_BASE}/w_${width},q_auto,f_auto/${publicId}.webp`;
};
