import { MentorList } from "@/components/mentor-list";
import { StatisticCard } from "@/components/statistic-card";

export function RightSidebar() {
  return (
    <div className="w-[400px] p-4 sm:p-6 overflow-y-auto scrollbar-hide">
      <div className="bg-white rounded-2xl border border-gray-100">
        <StatisticCard />
        <div>
          <MentorList />
        </div>
      </div>
    </div>
  );
}
