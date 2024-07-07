import { useTheme } from "@/context/theme-context";
import { experiencesData } from "@/lib/data";
import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";


export default function Timeline({ inView } : { inView: boolean }) {
  const { theme } = useTheme();

    return (

      <VerticalTimeline lineColor="">
      {experiencesData.map((item, index) => (
        <React.Fragment key={index}>
          <VerticalTimelineElement
            visible={inView}
            className="vertical-timeline-element--work"
            contentStyle={{
              background:
                theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
              boxShadow: "none",
              color: theme === "light" ? "#374151" : "#f3f4f6",
              border: "1px solid rgba(0, 0, 0, 0.05)",
              textAlign: "left",
              padding: "1.3rem 2rem",
            }}
            contentArrowStyle={{
              borderRight:
                theme === "light"
                  ? "0.4rem solid #9ca3af"
                  : "0.4rem solid rgba(255, 255, 255, 0.5)",
            }}
            date={item.date}
            icon={item.icon}
            iconStyle={{
              background:
                theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
              color: theme === "light" ? "#374151" : "#f3f4f6",
              fontSize: "1.5rem",
            }}
          >
            <h3 className="font-semibold capitalize">{item.title}</h3>
            <p className="font-normal !mt-0 italic underline">{item.location}</p>
            <p className="!mt-1 font-normal">
              {item.description}
            </p>
          </VerticalTimelineElement>
        </React.Fragment>
      ))}
    </VerticalTimeline>
    )
}