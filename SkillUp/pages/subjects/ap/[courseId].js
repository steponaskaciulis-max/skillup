import { useRouter } from 'next/router';
import apCourses from '../../data/apCourses';

export default function APCoursePage() {
  const router = useRouter();
  const { courseId } = router.query;
  const course = apCourses.find((c) => c.id === courseId);

  if (!course) {
    return <div className="container mx-auto p-4"><h1>Course not found</h1></div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{course.title}</h1>
      <p className="mb-4">{course.description}</p>
      {/* Add more course details like units here */}
    </div>
  );
}
