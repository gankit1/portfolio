import { Box } from "@mui/material";
import { experiences } from "../../data/experienceData";
import ExperienceCard from "./ExperienceCard";

const ExperienceTimeline = () => {
  return (
    <Box>
      {experiences.map((experience, index) => (
        <ExperienceCard
          key={experience.id}
          experience={experience}
          index={index}
        />
      ))}
    </Box>
  );
};

export default ExperienceTimeline;
