type Props = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  spacing?: "sm" | "md" | "lg";
};

const spacingMap = {
  sm: "py-16 md:py-20",
  md: "py-24 md:py-32",
  lg: "py-28 md:py-36",
} as const;

export default function Section({
  children,
  className = "",
  id,
  spacing = "lg",
}: Props) {
  return (
    <section
      id={id}
      className={`${spacingMap[spacing]} ${className}`.trim()}
    >
      {children}
    </section>
  );
}
