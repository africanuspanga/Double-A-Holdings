import Image from "next/image";
import { cn } from "@/lib/utils";

interface AngularImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  priority?: boolean;
  variant?: "right" | "left" | "both";
  fill?: boolean;
  width?: number;
  height?: number;
}

export function AngularImage({
  src,
  alt,
  className,
  containerClassName,
  priority,
  variant = "right",
  fill,
  width,
  height,
}: AngularImageProps) {
  const clipMap = {
    right: "polygon(0 0, 100% 0, 100% 100%, 8% 100%)",
    left: "polygon(8% 0, 100% 0, 100% 100%, 0 100%)",
    both: "polygon(6% 0, 100% 0, 94% 100%, 0 100%)",
  };

  return (
    <div className={cn("relative overflow-hidden", containerClassName)}>
      <Image
        src={src}
        alt={alt}
        fill={fill}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        priority={priority}
        className={cn("object-cover", className)}
        style={{ clipPath: clipMap[variant] }}
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </div>
  );
}
