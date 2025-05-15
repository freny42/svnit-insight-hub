
import { cn } from "@/lib/utils";

interface FacultyCardProps {
  name: string;
  department: string;
  position: string;
  imgSrc: string;
  email?: string;
  className?: string;
}

export function FacultyCard({ name, department, position, imgSrc, email, className }: FacultyCardProps) {
  return (
    <div className={cn(
      "overflow-hidden rounded-xl bg-card border border-border/50 hover-card",
      className
    )}>
      <div className="aspect-square w-full overflow-hidden">
        <img
          src={imgSrc}
          alt={name}
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="p-4 space-y-1">
        <h3 className="font-semibold text-lg">{name}</h3>
        <p className="text-muted-foreground text-sm">{position}</p>
        <p className="text-primary font-medium text-sm">{department}</p>
        {email && (
          <p className="text-muted-foreground text-xs">{email}</p>
        )}
      </div>
    </div>
  );
}
