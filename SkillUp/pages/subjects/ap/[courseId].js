// SkillUp/pages/subjects/ap/[courseId].js

import { useRouter } from 'next/router';
import apCourses from '../../../data/apCourses';

export default function APCoursePage() {
  const router = useRouter();
  const { courseId } = router.query;

  const course = apCourses.find((c) => c.id === courseId);

  if (!course) {
    return <p>Course not found.</p>;
  }

  return (
    <div>
      <h1>{course.title}</h1>
      <p>{course.description}</p>
      {/* Add more content here if you want */}
    </div>
  );
}
