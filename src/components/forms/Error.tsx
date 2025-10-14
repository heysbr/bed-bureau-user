// export default function Error({ message, classname, active }: { message: string, classname ?: string, active?: boolean }) {
//   return (
//     <div className="text-xs m-2 text-red-500">{message}</div>
//   )
// }

export default function Error({
  message,
  classname,
  active = true,
}: {
  message: string;
  classname?: string;
  active?: boolean;
}) {
  return (
    <div
      className={`
        text-xs m-2 text-red-500 transition-all duration-300 ease-out
        ${active ? "opacity-100 " : "opacity-0 "}
        ${classname || ""}
      `}
    >
      {message}
    </div>
  );
}
