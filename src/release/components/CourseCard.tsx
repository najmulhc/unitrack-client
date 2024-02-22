import { Button,  H2, Span } from "../Typography";

interface CourseCardProps {
  title: string;
  teacher: string;
  _id: string;
}

const CourseCard = ({ title, teacher, _id }: CourseCardProps) => {
  return (
    <div className="w-full rounded-sm bg-[#2b2930] p-4">
      <H2 className="text-white">{title}</H2>
      <Span className="text-[#e8def8] bg-[#575065] bg-opacity-50 px-3 py-1 rounded-full font-medium inline-block mb-6">
        {teacher}
      </Span>
      <br />
      <Button
        fullWidth={true}
        href={`/course/${_id}`}
        className="bg-[#4f378b] text-[#e8def8] hover:bg-[#a57745] block "
      >
        Course Detail
      </Button>
    </div>
  );
};

export default CourseCard;
