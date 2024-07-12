import React from "react";
import { syllabusData2 } from "./configs";
const SyllabusP2=()=>{

  function downloadpdf(){
    return(
    <div>
        <a className="text-indigo-600" href="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20230929164537/87.pdf" download="SyllabusP1.pdf">Download pdf</a>
    </div>
    )
  }



    return(
        <div className="bg-gray-100 min-h-screen mt-36  overflow-hidden">
      {/* Header Section */}
      <header className="bg-green-100 text-black py-8">
        <div className="container mx-auto px-8">
          <h1 className="text-4xl md:text-5xl ml-72 font-bold">
            UGC Net Computer Science  Syllabus 2024
          </h1>
        </div>
      </header>
     <div className="md:w-2/3 mt-10 m-60 mb-0 text-2xl font-semibold bg-gray-300 "><table>
      <thead>
        <tr className="bg-green-300 border">
          <th>Unit Number</th>
          <th>Unit Title</th>
          <th>Topics</th>
        </tr>
      </thead>
      <tbody className="border text-2xl ml-10">
        {syllabusData2.map((unit, index) => (
          <tr className="border" key={index}>
            <td className="border p-14">{unit.unitNumber}</td>
            <td className="border">{unit.unitTitle}</td>
            <td>
              <ul>
                {unit.topics.map((topic, topicIndex) => (
                  <li key={topicIndex}>{topic}</li>
                ))}
              </ul>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    <h1>UgcNet  Computer Science Syllabus  PDF {downloadpdf()}</h1>
</div> 
  

      
      </div>
   )
}
export default SyllabusP2;