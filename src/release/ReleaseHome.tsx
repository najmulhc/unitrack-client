import { H1, H2, P, Span, Title } from "./Typography";
import SettingsIcon from "./icons/SettingsIcon";
 
import TeachersIcon from "./icons/TeachersIcon";

const ReleaseHome = () => {
  return (
    <main>
      <Title className=""> the Title of the course</Title>
      <H1>Heading one of the page</H1>
      <H2> Heading Two of the page</H2>
      <P>
        Paragraphs lorem ipsum dolor sit amet for teh quidfasdf dwafadsf afewr
        lakjnf
      </P>
      <Span>Span test</Span>
      <SettingsIcon
        width={"1.5rem"}
        height={"1.5rem"}
        color="red"
        className="w-6 h-6 hover:fill-green-400"
      />
    </main>
  );
};

export default ReleaseHome;
