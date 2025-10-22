type PropTypes = {
  category?: "Below 40%" | "40% to 65%" | "65% to 80%" | "80% and above";
  value?: string;
};

export default function     WorkforceCard({ category , value}: PropTypes) {
  return (
    <div className="block w-fit overflow-hidden text-[#52575C] bg-[#E5E4EA] rounded-sm text-sm text-center border border-[#C8C6CE]">
      <div className="px-5 py-1">{category}</div>
      <div className="bg-app-bg px-5 py-1">{value}</div>
    </div>
  );
}
