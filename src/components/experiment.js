

// import React, { useState, useEffect } from "react";

// const Experiment = () => {
//   const [data, setData] = useState(null);
//   const [subjects, setSubjects] = useState([]);
//   const [selectedSubject, setSelectedSubject] = useState(null);
//   const [selectedTopic, setSelectedTopic] = useState(null);

//   useEffect(() => {
//     getapi();
//   }, []);

//   async function getapi() {
//     try {
//       const response = await fetch("http://localhost:8000/api/data");
//       const json = await response.json();
//       setData(json[0]);
//       setSubjects(json[0]?.sections[0]?.subjects);
//       handleDefaultSelection(json[0]);
//     } catch (error) {
//       return <div>{error}</div>;
//     }
//   }

//   const handleSubjectClick = (subject) => {
//     setSelectedSubject(subject);
//     const firstTopicId = data?.sections[0]?.topics[subject?.id][0]?.id;
//     const firstTopic = data?.sections[0]?.topics[subject?.id]?.find(
//       (topic) => topic?.id === firstTopicId
//     );
//     setSelectedTopic(firstTopic);; // Reset selected topic when changing subject
//   };

//   const handleTopicClick = (topic) => {
//     setSelectedTopic(topic);
//   };
//   //handling by deafult data to show
//   const handleDefaultSelection = (data) => {
//     const firstSubject = data?.sections[0]?.subjects[0];
//     setSelectedSubject(firstSubject);
  
//     const firstTopicId = data?.sections[0]?.topics[firstSubject.id][0]?.id;
//     const firstTopic = data?.sections[0]?.topics[firstSubject.id]?.find(
//       (topic) => topic?.id === firstTopicId
//     );
//     setSelectedTopic(firstTopic);}

//   const renderSidebar = () => {
//     if (!selectedSubject) return null;

//     const topicIds = data?.sections[0]?.topics[selectedSubject?.id];
//     return (
//       <div className="fixed z-2 w-52 mt-36 h-80 overflow-y-auto text-green-700 bg-gray-200 p-4">
//         <h2 className="text-xl ">Table of Contents :</h2>
//         <ul>
        
//           {topicIds.map((topic) => (
            
//             <li
//               key={topic.id}
//               className="cursor-pointer"
//               onClick={() => handleTopicClick(topic)}
//             >
              
//              <h1> {topic.name}</h1>
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   };

//   const renderContent = () => {
//     if (!selectedTopic) return null;
  
//     // Find the subject based on the selected topic's id
//     const subjectId = Object.keys(data?.sections[0]?.topics)?.find(
//       (key) => data?.sections[0]?.topics[key]?.some((topic) => topic?.id === selectedTopic.id)
//     );
  
//     // Get the subject name
//     const subjectName = data?.sections[0]?.subjects?.find((subject) => subject.id === parseInt(subjectId))?.name;
  
//     // Render the content based on the selected topic and subject
//     return (
//       <div className="m-12 text-xl mr-32 bg-gray-100">
//         <h2 className="ml-96 text-4xl text-green-600 font-extrabold"> {subjectName}</h2>
//         <h3 className="text-3xl text-green-400 font-bold"> {selectedTopic.name}</h3>
//         {/* Add your content for the selected topic here */}
//          <p>{selectedTopic?.content?.introduction}</p> 
       
//       </div>
//     );
//   };

//   return (
//     <>
      
//       <div className="h-screen z-50">
//       <nav className="navbar-container fixed h-14  w-full mb-20 top-20 ml-0 right-0 z-40 bg-green-500 text-white  flex justify-evenly">
//   {subjects.map((subject) => (
//     <div
//       key={subject?.id}
//       className="hover:bg-green-700 px-2 py-2 rounded-md cursor-pointer"
//       onClick={() => handleSubjectClick(subject)}
//     >
//       {subject.name}
//     </div>
//   ))}
// </nav>
//         <h2>Subjects</h2>
//         {renderSidebar()}
//         <div className="ml-64 p-4 mt-36">{renderContent()}</div>
//       </div>
//       {console.log("Component rendered")}
//     </>
//   );
// };

// export default Experiment;


import React, { useState, useEffect } from "react";

const TopicContent = ({ content }) => {
  return (
    <div className="font-semibold">
      {Object.entries(content).map(([key, value]) => {
        if (typeof value === 'object' && !Array.isArray(value)) {
          return (
            <div className="" key={key}>
              <h3 className="text-green-600">{key}</h3>
              <TopicContent content={value} />
            </div>
          );
        }
        if (Array.isArray(value)) {
          return (
            <div key={key}>
              <h3>{key}</h3>
              <ul>
                {value.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          );
        }
        return (
          <div key={key}>
            <h3>{key}</h3>
            <p>{value}</p>
          </div>
        );
      })}
    </div>
  );
};

const Experiment = () => {
  const [data, setData] = useState(null);
  const [subjects, setSubjects] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState(null);

  useEffect(() => {
    getapi();
  }, []);

  async function getapi() {
    try {
      const response = await fetch("http://localhost:8000/api/data");
      const json = await response.json();
      setData(json[0]);
      setSubjects(json[0]?.sections[0]?.subjects);
      handleDefaultSelection(json[0]);
    } catch (error) {
      return <div>{error}</div>;
    }
  }

  const handleSubjectClick = (subject) => {
    setSelectedSubject(subject);
    const firstTopicId = data?.sections[0]?.topics[subject?.id][0]?.id;
    const firstTopic = data?.sections[0]?.topics[subject?.id]?.find(
      (topic) => topic?.id === firstTopicId
    );
    setSelectedTopic(firstTopic); // Reset selected topic when changing subject
  };

  const handleTopicClick = (topic) => {
    setSelectedTopic(topic);
  };

  //handling by default data to show
  const handleDefaultSelection = (data) => {
    const firstSubject = data?.sections[0]?.subjects[0];
    setSelectedSubject(firstSubject);

    const firstTopicId = data?.sections[0]?.topics[firstSubject.id][0]?.id;
    const firstTopic = data?.sections[0]?.topics[firstSubject.id]?.find(
      (topic) => topic?.id === firstTopicId
    );
    setSelectedTopic(firstTopic);
  };

  const renderSidebar = () => {
    if (!selectedSubject) return null;

    const topicIds = data?.sections[0]?.topics[selectedSubject?.id];
    return (
      <div className="fixed z-2 w-52 mt-36 h-80 overflow-y-auto text-green-700 bg-gray-200 p-4">
        <h2 className="text-xl ">Table of Contents :</h2>
        <ul>
          {topicIds.map((topic) => (
            <li
              key={topic.id}
              className="cursor-pointer"
              onClick={() => handleTopicClick(topic)}
            >
              <h1>{topic.name}</h1>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const renderContent = () => {
    if (!selectedTopic) return null;

    return (
      <div className="m-12 text-xl mr-32 bg-gray-100">
        <h2 className="ml-96 text-4xl text-green-600 font-extrabold">
          {selectedTopic.name}
        </h2>
        <TopicContent content={selectedTopic.content} />
      </div>
    );
  };

  return (
    <>
      <div className="h-full mb-10 z-50">
        <nav className="navbar-container fixed h-14 w-full mb-20 top-20 ml-0 right-0 z-40 bg-green-500 text-white flex justify-evenly">
          {subjects.map((subject) => (
            <div
              key={subject?.id}
              className="hover:bg-green-700 px-2 py-2 rounded-md cursor-pointer"
              onClick={() => handleSubjectClick(subject)}
            >
              {subject.name}
            </div>
          ))}
        </nav>
        <h2>Subjects</h2>
        {renderSidebar()}
        <div className="ml-64 p-4 mt-36">{renderContent()}</div>
      </div>
      {console.log("Component rendered")}
    </>
  );
};

export default Experiment;