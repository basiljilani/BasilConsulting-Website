import { TeamMember } from '../components/TeamMember';

const team = [
  {
    name: 'Sarah Johnson',
    role: 'CEO & Founder',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
    bio: 'With over 15 years of experience in digital transformation, Sarah leads our vision for innovative solutions.',
  },
  {
    name: 'Michael Chen',
    role: 'CTO',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
    bio: 'A tech veteran with expertise in cloud architecture and enterprise solutions.',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Head of Strategy',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80',
    bio: 'Emily brings deep insights from her background in management consulting and digital strategy.',
  },
];

export function About() {
  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">Our Team</h1>
          <p className="mt-4 text-xl text-gray-600">
            Meet the experts behind Basil Consulting
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <TeamMember key={member.name} {...member} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;