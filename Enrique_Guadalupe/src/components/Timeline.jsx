import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

export default function OppositeContentTimeline() {
  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent
          sx={{
            color: 'white',
          }}
        >
         Tecnolo Profesional en Sistemas Informaticos
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Politecnica de GDL </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
            sx={{
            color: 'white',
            }}
        >
        Tecnico Superior en Sistemas Informaticos 
        </TimelineOppositeContent>
        <TimelineSeparator>
        <TimelineDot />
        <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>CUCEI</TimelineContent>
        </TimelineItem>
        <TimelineItem>
        <TimelineOppositeContent
            sx={{
            color: 'white',
            }}
        >
        Lic. Inteligencia Artifical y Ciencia de Datos  
        </TimelineOppositeContent>
        <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>CUGDL</TimelineContent>
    </TimelineItem>
    </Timeline>
);
}