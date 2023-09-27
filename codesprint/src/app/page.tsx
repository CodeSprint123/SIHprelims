import React from 'react';
import Link from 'next/link';
import Navbar from './components/Navbar';

interface WorkoutIdea {
  title: string;
  description: string;
  exercises: string[];
}

const FitnessPage = () => {
  const workoutIdeas: WorkoutIdea[] = [
    {
      title: 'High-Intensity Interval Training (HIIT)',
      description: 'Short bursts of intense exercise followed by brief rest periods. Great for burning calories and improving cardiovascular health.',
      exercises: ['Burpees', 'Mountain Climbers', 'Jumping Jacks', 'Sprints'],
    },
    {
      title: 'Strength Training',
      description: 'Lift weights or use resistance bands to build muscle, increase metabolism, and enhance overall strength.',
      exercises: ['Squats', 'Deadlifts', 'Bench Press', 'Pull-ups'],
    },
    {
      title: 'Yoga',
      description: 'A mind-body practice that improves flexibility, balance, and mental well-being. Great for reducing stress.',
      exercises: ['Downward-Facing Dog', 'Warrior Pose', 'Tree Pose', 'Child’s Pose'],
    },
    {
      title: 'Running',
      description: 'An excellent cardiovascular workout that can be done almost anywhere. Start with a brisk walk and progress to running.',
      exercises: ['Warm-up Jog', 'Interval Runs', 'Long-Distance Run', 'Cool-down Walk'],
    },
    {
      title: 'Swimming',
      description: 'A full-body workout that is easy on the joints. Improves endurance, strength, and flexibility.',
      exercises: ['Freestyle', 'Breaststroke', 'Backstroke', 'Butterfly'],
    },
  ];

  return (
    <div className="bg-gradient-to-b from-black to-gray-900 min-h-screen">
      <Navbar />
      
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold text-white mb-6">Fitness Ideas</h1>
        <p className="text-lg text-gray-200 mb-8">
          Here are some fitness ideas to help you stay active and healthy:
        </p>

        <div className="space-y-6">
          {workoutIdeas.map((idea, index) => (
            <div key={index} className="border rounded-lg shadow-lg p-6 bg-gray-700 bg-opacity-75">
              <h2 className="text-2xl font-semibold mb-2 text-white">{idea.title}</h2>
              <p className="text-gray-200 mb-4">{idea.description}</p>
              <ul className="ml-6">
                {idea.exercises.map((exercise, idx) => (
                  <li key={idx} className="text-purple-400">{exercise}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Link href="/schedule">
          <p className="block mt-8 text-white text-lg hover:underline">Create a Workout Schedule</p>
        </Link>
      </div>
    </div>
  );
};

export default FitnessPage;