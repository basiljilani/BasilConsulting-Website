interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  bio: string;
}

export function TeamMember({ name, role, image, bio }: TeamMemberProps) {
  return (
    <div className="flex flex-col items-center">
      <img
        className="w-32 h-32 rounded-full object-cover"
        src={image}
        alt={name}
      />
      <h3 className="mt-6 text-xl font-semibold text-gray-900">{name}</h3>
      <p className="text-primary-600 font-medium">{role}</p>
      <p className="mt-3 text-gray-600 text-center">{bio}</p>
    </div>
  );
}

export default TeamMember;