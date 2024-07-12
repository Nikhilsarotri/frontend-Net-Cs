import React from "react";
import { listItems } from "./configs";
import { Link } from "react-router-dom";
import  {syllabusData1} from "./configs";
// import Syllabus1PDF from '../assets/Syllabus1.pdf';

const SyllabusP1 = () => {
  //sllabus data
 
  //function for pdf download
  function downloadpdf(){
    return(
    <div>
        <a className="text-indigo-600" href="https://www.careerpower.in/2020/UGC-NET-Syllabus-Paper-I_English.pdf" download="SyllabusP1.pdf">Download pdf</a>
    </div>
    )
  }




  return (
    <div className="bg-gray-100 min-h-screen mt-36  overflow-hidden">
      {/* Header Section */}
      <header className="bg-green-100 text-black py-8">
        <div className="container mx-auto px-8">
          <h1 className="text-4xl md:text-5xl ml-96 font-bold">
            UGC Net Syllabus 2024
          </h1>
        </div>
      </header>
      <div className="md:w-2/3 mt-10 mb-0 m-52 text-2xl font-semibold bg-white ">
        <p className="m-5">
          UGC NET Syllabus 2024 has been released on the official website. UGC
          NET Syllabus PDF is released by National Testing Agency (NTA). The
          University Grant Commission – UGC prescribes the NET exam syllabus for
          paper 1 and Paper 2.
        </p>

        <h2 className=" bg-green-100 font-bold">UGC NET Paper Pattern</h2>
        <p className="m-5">
          Before going through the detailed UGC NET syllabus for both paper 1
          and Paper 2 given below are the important facts related to the NET
          exam-
        </p>
        <ol className="mb-4 ml-2">
          {listItems.map((item, index) => (
            <li className=" mb-4" key={index}>
              {index + 1}. {item}
            </li>
          ))}
        </ol>
        <table className="ml-24 border border-spacing-4 border-slate-300">
          <tbody className="border-collapse border bg-slate-200">
            <tr className="border border-slate-300 bg-green-300">
              <td className="border border-slate-300"> 
                <strong>UGC Net Papers</strong>
              </td>
              <td className="border border-slate-300">
                <strong>Number of Questions</strong>
              </td>
              <td className="border border-slate-300">
                <strong>Marks</strong>
              </td>
            </tr >
            
            <tr className="border border-slate-300">
              <td className="border border-slate-300">
                <span>Paper1</span>
              </td>
              <td className="border border-slate-300">
                <span>50</span>
              </td>
              <td className="border border-slate-300">
                <span>100</span>
              </td>
            </tr>
            <tr className="border border-slate-300">
              <td className="border border-slate-300">
                <span>Paper2</span>
              </td>
              <td className="border border-slate-300">
                <span>100</span>
              </td>
              <td className="border border-slate-300">
                <span>200</span>
              </td>
            </tr >
            <tr className="border border-slate-300">
            <td className="border border-slate-300">
<span>Total</span>
                </td>
                <td className="border border-slate-300">
                <span>150</span>

                    </td>
                     <td className="border border-slate-300">
                     <span>300</span>

                    </td>
                </tr>
          </tbody>
        </table>
        <h2 className=" bg-green-100 font-bold m-5">UGC NET Syllabus Paper 1</h2>
        <p className="m-5">
        UGC NET Paper 1 is common and compulsory for every candidate. The paper 1 syllabus of UGC NET comprises topics from General Paper on Teaching and Research Aptitude. There are a total of ten sections/subjects in UGC NET Paper 1 Syllabus 2023. Subjects include Research Aptitude, Teaching Aptitude, Communication, Reasoning, Reading Comprehension, Information & Communication Technology,  Maths, etc. The  paper 1 is designed in such a way that it will test the candidate’s teaching and research ability. The UGC NET Paper 1 syllabus is as follows – 
        </p>
        <table className="border m-5">
      <thead className="bg-green-300">
        <tr className="border">
          <th>Topic</th>
          <th>Subtopics</th>
        </tr>
      </thead>
      <tbody className="bg-gray-300">
        {syllabusData1.map((item, index) => (
          <tr className="border" key={index}>
            <td className="border">{item.topic}</td>
            <td>
              <ul>
                {item.subtopics.map((subtopic, subindex) => (
                  <li key={subindex}>{subtopic}</li>
                ))}
              </ul>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  <h1>UgcNet  Paper1 Syllabus  PDF {downloadpdf()}</h1>

        
      </div>
    </div>
  );
};

export default SyllabusP1;
