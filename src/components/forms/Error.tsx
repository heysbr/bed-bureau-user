// export default function Error({ message, classname, active }: { message: string, classname ?: string, active?: boolean }) {
//   return (
//     <div className="text-xs m-2 text-red-500">{message}</div>
//   )
// }

export default function Error({
  message,
  classname,
  active,
}: {
  message: string;
  classname?: string;
  active?: boolean;
}) {
  return (
    <div
      className={`
        text-xs m-2 text-red-500 transition-all duration-300 ease-out 
      ${active ? "h-0" : "h-fit"}
      `}
    >
      {message}
    </div>
  );
}

