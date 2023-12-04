type paginateProps = {
  variant: "dark" | "light";
};

export const Pagination = ({ variant }: paginateProps) => {
  return (
    <div className="w-full flex justify-center items-center p-4 bg-transparent">
      <span
        className={`font-bold text-4xl rounded-full w-16 h-16 flex items-center justify-center grotesk border-2 hover:backdrop-brightness-95 transition duration-300 ${
          variant === "dark"
            ? "border-fontcolor-100 text-fontcolor-100"
            : "border-fontcolor-50 text-fontcolor-50"
        }`}
      >
        1
      </span>
    </div>
  );
};
