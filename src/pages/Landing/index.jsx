import { useState } from "react";
import { useHistory } from "react-router-dom";
import { InstructorProfile_2x } from "../../assets/images";
import { Link } from "react-router-dom";
import { Col } from "reactstrap";
export default function Landing({ isStudent }) {
  const history = useHistory();
  //   const Col = ReactBootstrap.Col;
  const courses = [
    {
      id: "1",
      name: "Teacher Name",
      img: InstructorProfile_2x,
      content: "Course 1 | Language lessons for beginners",
      status: "New",
      date: "Today, Sept 20, 2021 at 2:00 PM",
      rating: 5,
    },
    {
      id: "2",
      name: "Teacher Name",
      img: InstructorProfile_2x,
      content: "Course 1 | Language lessons for beginners",
      status: "New",
      date: "Today, Sept 20, 2021 at 11:30 AM",
      rating: 5,
    },
    {
      id: "3",
      name: "Teacher Name",
      img: InstructorProfile_2x,
      content: "Course 1 | Language lessons for beginners",
      status: "New",
      date: "Sept 14, 2021 at 2:30 PM",
      rating: 5,
    },
  ];
  return (
    <div className="landing bg-[url('../../assets/learning.jpg')] bg-cover bg-center absolute top-0 w-full h-full">
      <div className="p-4 bg-gray-200 w-full ">
        <div className="flex justify-between text-lg font-bold">
          <p className="cursor-pointer">Home</p>
          <span className="flex gap-4">
            <p className="cursor-pointer">
              <Link to="/courses">Courses</Link>
            </p>
            <p className="cursor-pointer">
              <Link to="/myProfile">Profile</Link>
            </p>
            <p className="cursor-pointer">
              {" "}
              <Link to="/login">Log Out</Link>
            </p>
          </span>
        </div>
      </div>
    </div>
  );
}
