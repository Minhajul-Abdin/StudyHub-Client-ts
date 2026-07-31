
import React from "react";

type Stat = {
  id: number;
  value: string;
  label: string;
  icon: React.ReactNode;
};

const RentalStatsSection = () => {
  const stats: Stat[] = [
    {
      id: 1,
      value: "15K+",
      label: "Verified Rooms",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6 text-amber-800"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          />
        </svg>
      ),
    },
    {
      id: 2,
      value: "96%",
      label: "Roommate Match Rate",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6 text-amber-800"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.745 3.745 0 011.043 3.296A3.745 3.745 0 0121 12z"
          />
        </svg>
      ),
    },
    {
      id: 3,
      value: "100%",
      label: "Verified Hosts",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6 text-amber-800"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286z"
          />
        </svg>
      ),
    },
    {
      id: 4,
      value: "0%",
      label: "Hidden Fees",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6 text-amber-800"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.813 15.904L9 21l8.954-8.955c.44-.439.44-1.152 0-1.591L9 1.5M9.813 15.904L4.5 12l5.313-3.904M9.813 15.904h7.937"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-[#FAF8F5] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="flex flex-col items-center group transition-transform duration-300 hover:-translate-y-1"
            >
              {/* Icon Container with soft light brown gradient */}
              <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-[#EEDDCB] to-[#DDBE9B] shadow-sm shadow-amber-900/10 mb-5 transition-shadow duration-300 group-hover:shadow-md">
                {stat.icon}
              </div>

              {/* Metric Value */}
              <h3 className="text-3xl sm:text-4xl font-bold text-[#4A3728] tracking-tight mb-1">
                {stat.value}
              </h3>

              {/* Metric Label */}
              <p className="text-sm font-medium text-[#7A6855]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RentalStatsSection;
