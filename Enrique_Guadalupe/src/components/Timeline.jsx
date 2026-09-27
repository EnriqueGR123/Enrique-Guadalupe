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
        Tecnólogo profesional en Sistemas Informáticos 
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Politécnica de Guadalajara</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
            sx={{
            color: 'white',
            }}
        >
        Técnico Superior en Sistemas Informáticos
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
        Lic. Inteligencia Artificial y Ciencia de Datos  
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