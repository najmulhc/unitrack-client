import Menubar from "../components/Menubar";
import PageContainer from "../components/PageContainer";
import { H1, H2, P } from "../Typography";
import PhoneIcon from "../icons/PhoneIcon";
import MailIcon from "../icons/MailIcon";

const Teachers = () => {
  const teachers = [
    {
      name: "Md. Abul Kashem",
      position: "Professor",
      department: "Management Informaiton Systems",
      university: "University of Dhaka",
      phone: "01711735930",
      email: "mkashem@du.ac.bd",
    },
  ];
  const { name, position, department, university, phone, email } = teachers[0];
  return (
    <>
      <H1 className="text-center w-full text-[#e8def8] bg-[#4f378b] py-4">
        Teachers
      </H1>
      <PageContainer>
        <div className="bg-[#2b2930] p-2">
          <H2>{name}</H2>
          <P className="mt-6 font-bold">{position}</P>
          <P>Dept. of {department}</P>
          <P className="font-bold">{university}</P>

          <div className="flex flex-col justify-between gap-1 mt-2">
            <span className="flex justify-start gap-2">
              <PhoneIcon width={"1rem"} color="#e8def8" /> {phone}
            </span>
            <span className="flex justify-start gap-2">
              <MailIcon width={"1rem"} color="#e8def8" /> {email}
            </span>
          </div>
        </div>
      </PageContainer>
      <Menubar />
    </>
  );
};

export default Teachers;
