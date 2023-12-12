
import { PageDiv } from './App';

var Latex = require('react-latex');

const education = [
{
  degree: 'PhD (Mathematics)',
  start: { year: 2022, month: 9, day: 1 },
  end: { year: 2025, month: 7, day: 1 },
  institution: 'University of Saskatchewan',
  supervisor: 'Dr. Steven Rayan',
  thesis: <Latex>Moduli Stacks and Homotopy Theory (tentative)</Latex>,
  completed: false,
},
{
  degree: 'MSc (Mathematics)',
  start: { year: 2021, month: 9, day: 1 },
  end: { year: 2022, month: 8, day: 1 },
  institution: 'University of Toronto',
  supervisor: 'Dr. Alexander Kupers',
  thesis: <Latex>Semidirect Products of $\infty$--Operads</Latex>,
  completed: true,
},
{
  degree: 'BSc (Mathematics and Computer Science)',
  start: { year: 2016, month: 1, day: 1 },
  end: { year: 2021, month: 7, day: 1 },
  institution: 'University of Saskatchewan',
  supervisor: 'Dr. Steven Rayan',
  thesis:
    <Latex>
      Quantum Information through Topological Quantum Field Theories
    </Latex>,
  completed: true,
},
];

const invitedTalks = [
{
  title: 'TQFTs and Quantum Computing',
  event: 'Scientific Session on Quantum Information Theory, CMS Summer Meeting',
  date: { year: 2023, month: 6, day: 3 },
  location: 'University of Ottawa'
}
];

function monthName(monthNum : number) {
  const date = new Date();
  date.setMonth(monthNum - 1);

  return date.toLocaleString('en-US', { month: 'long' })
}

function CV() {
  return (
  <PageDiv>
  <h3>Education</h3>
  {education.map((ed) =>
    <div key={ed.degree} style={{marginTop: '5pt'}}>
      <div>
      <span style={{fontWeight: 'bold'}}>{ed.degree}</span>
      {', '}
      {monthName(ed.start.month)}, {ed.start.year}
      {' --- '}
      {ed.completed
        ? `${monthName(ed.end.month)}, ${ed.end.year}`
        : ' present'}
      </div>
      <span style={{fontStyle: 'italic'}}>{ed.institution}</span>
      <div>Supervisor: {ed.supervisor}</div>
      <div>Thesis: {ed.thesis}</div>
    </div>
  )}

  <h3>Invited Talks</h3>
  {invitedTalks.map((talk) =>
    <div key={talk.title}>
      <div>
        <span style={{ fontWeight: 'bold' }}>{talk.title}</span>
        {', '}
        {monthName(talk.date.month)} {talk.date.day}, {talk.date.year}
      </div>
      <div>
        <span style={{ fontStyle: 'italic' }}>{talk.event}</span>
        {', '}
        {talk.location}
      </div>
    </div>
  )}
  </PageDiv>
  );
}

export default CV;
