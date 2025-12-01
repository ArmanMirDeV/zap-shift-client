import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router";
import useAxios from "../../Hooks/useAxios";

const ParcelTrack = () => {
  const { trackingId } = useParams();
  const axiosInstance = useAxios();

  const { data: trackings = [] } = useQuery({
    queryKey: ["tracking", trackingId],
    queryFn: async () => {
      const res = await axiosInstance.get(`/trackings/${trackingId}/logs`);
      return res.data || [];
    },
  });

  // Format date + time
  const formatDateTime = (isoString) => {
    const date = new Date(isoString);
    return {
      date: date.toLocaleDateString(),
      time: date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };
  };

  return (
    <div>
      <h2>
        <span className="text-4xl font-bold p-4 text-secondary">
          Track Your Package:
        </span>{" "}
        {trackingId}
      </h2>


      <ul className="timeline timeline-vertical mt-6">
        {trackings.map((log, index) => {
          const { date, time } = formatDateTime(log.createdAt);

          return (
            <li key={index}>
              {/* Top Line */}
              {index !== 0 && <hr className="bg-primary" />}

              {/* Left/Right Alternation */}
              <div
                className={
                  index % 2 === 0
                    ? "timeline-start timeline-box"
                    : "timeline-end timeline-box"
                }
              >
                <p className="font-semibold uppercase text-secondary ">{log.details}</p>
                <p className="text-sm opacity-80">{log.location}</p>

                {/* Time + Date */}
                <p className="text-xs opacity-60">Date: {date}</p>
                <p className="text-xs opacity-60">Time: {time}</p>
              </div>

              {/* Icon */}
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="text-primary h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>

              {/* Bottom Line */}
              {index !== trackings.length - 1 && <hr className="bg-primary" />}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ParcelTrack;
