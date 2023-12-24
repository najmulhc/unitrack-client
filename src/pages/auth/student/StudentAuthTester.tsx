import { useGetStudentQuery } from "../../../redux/services/apiSlice";

const StudentAuthTester = () => {
  const { isLoading, error, data: studentData } = useGetStudentQuery({});
  if (isLoading) {
    return (
      <div>
        <h1>Loading</h1>
      </div>
    );
  }
};
