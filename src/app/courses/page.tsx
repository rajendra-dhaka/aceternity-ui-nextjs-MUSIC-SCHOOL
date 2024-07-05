"use client";
import React from "react";
import courseData from "@/data/music_courses.json";
import { Courses } from "@/components";

const CoursesPage = () => {
  return (
    <div className="min-h-screen bg-black py-12 pt-36">
      <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">
        All courses ({courseData.courses.length})
      </h1>
      <Courses />
    </div>
  );
};

export default CoursesPage;
