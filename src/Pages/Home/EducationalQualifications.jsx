import React from "react";

const education = [
  {
    degree: "B.Sc in Computer Science and Engineering",
    institution: "Islamic University Chittagong",
    result: "CGPA: 3.53",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Bangladesh Nou Bahini College",
    result: "GPA: 4.17",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Hazi Mohammad Mohsin Govt High School",
    result: "GPA: 5.00",
  },
];

const EducationalQualifications = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-base-200 p-6">
      <div className="w-full max-w-3xl bg-base-100 shadow-2xl rounded-2xl p-6">
        <h2 className="text-4xl font-extrabold text-center text-primary mb-6">
          Educational Qualifications
        </h2>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <div key={index} className="p-4 bg-neutral rounded-xl shadow-md">
              <h3 className="text-2xl font-semibold text-secondary">
                {edu.degree}
              </h3>
              <p className="text-lg font-medium text-accent">
                {edu.institution}
              </p>
              <p className=" text-white">{edu.result}</p>
            </div>
          ))}
          <div className="p-4 bg-neutral rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold text-secondary">
              Leadership Experience
            </h3>
            <p className="text-lg font-medium text-accent">
              General Secretary, IIUC Computer Club
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationalQualifications;
