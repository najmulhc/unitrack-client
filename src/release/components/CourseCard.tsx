import { Button, H1, Span } from "../Typography";

interface CourseCardProps {
  title: string;
  teacher: string;
  _id: string;
}

const CourseCard = ({ title, teacher, _id }: CourseCardProps) => {
  return (
    <div className="w-full rounded-sm bg-[#FFB86C] bg-opacity-15 p-4">
      <H1 className="text-white">{title}</H1>
      <Span className="text-[#FFB86C] bg-[#FFB86C] bg-opacity-50 px-3 py-1 rounded-full font-medium inline-block mb-6">
        {teacher}
      </Span>
      <br />
      <Button
        fullWidth={true}
        href={`/course/${_id}`}
        className="bg-[#FFB86C] text-[#282A36] hover:bg-[#a57745]"
      >
        Course Detail
      </Button>
    </div>
  );
};

export default CourseCard;
