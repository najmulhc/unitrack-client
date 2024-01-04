import React from "react";
import { useParams } from "react-router";
import { useGetSingleCourseQuery } from "../../../redux/services/apiSlice";
import Loading from "../../loading/Loading";

const CoursePage = () => {
  const { courseId } = useParams();
  const { data, isLoading, error } = useGetSingleCourseQuery({
    courseId: courseId as string,
  });

  if (data) {
    console.log(data.data);
  }
  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    console.error(error);
  }
  return (
    <div>
      <h1>{courseId}</h1>
    </div>
  );
};

export default CoursePage;
