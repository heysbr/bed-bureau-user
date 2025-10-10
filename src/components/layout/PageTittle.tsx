export default function PageTitle({
  className,
  title,
}: {
  className?: string;
  title: string;
}) {
  return <div className={`text-2xl font-semibold ${className}`}>{title}</div>;
}
