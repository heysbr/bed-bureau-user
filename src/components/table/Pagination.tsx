import ArrowBtn from "@/assets/icons/table-arrow.svg";
import Image from "next/image";

type PaginationProps = {
  setPage: (page: number | ((prev: number) => number)) => void;
  page: number;
  totalPages: number;
};

export default function Pagination({ setPage, page, totalPages }: PaginationProps) {
  return (
    <>
      {totalPages > 1 && (
        <div className="flex justify-end m-5 space-x-2">
          {/* Previous Butoon */}
          <button onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page === 1}
            className="px-3 py-1 cursor-pointer rounded border border-[#E8E8E8] disabled:opacity-50"
          >
            <Image src={ArrowBtn} alt="next" className="rotate-180" />
          </button>

          {/* Numbers Button */}
          {Array.from({ length: totalPages }, (_, idx) => (
            <button key={idx} onClick={() => setPage(idx + 1)}
              className={`px-3 py-1 rounded cursor-pointer ${
                page === idx + 1
                  ? "bg-app-primary text-white"
                  : "border-[#E8E8E8] border"
              }`}
            >
              {idx + 1}
            </button>
          ))}

          {/* Next Button */}
          <button onClick={() => setPage((p) => Math.min(totalPages, p + 1))} disabled={page === totalPages}
            className="px-3 py-1 cursor-pointer rounded border border-[#E8E8E8] disabled:opacity-50 transition-all duration-300"
          >
            <Image src={ArrowBtn} alt="next" />
          </button>
        </div>
      )}
    </>
  );
}
