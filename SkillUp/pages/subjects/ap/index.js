import Tile from '../../../components/Tile';
import DifficultySelector from '../../../components/DifficultySelector';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import apCourses from '../../../data/apCourses';

const APSubjectsPage = () => {
  const [difficulty, setDifficulty] = useState('mixed');

  const topics = apCourses.map(course => ({
    title: course.title,
    description: course.description,
    href: `/subjects/ap/${course.id}`,
  }));

  return (
    <div className="container mx-auto py-8">
      <h1>AP Courses</h1>
      <p>Select an AP subject and difficulty to begin practice.</p>
      <div>
        <DifficultySelector selected={difficulty} setSelected={setDifficulty} />
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        {topics.map(topic => (
          <Tile key={topic.title} title={topic.title} description={topic.description} href={topic.href} />
        ))}
      </div>
    </div>
  );
};

export default APSubjectsPage;
