import React from "react";
import {ebooks} from "./configs";

const Ebooks = () => {
  return (<div > 
    <header className="bg-green-100 text-black py-8">
  <div className="container mx-auto px-8 mt-36">
    <h1 className="text-4xl md:text-5xl ml-96 font-bold">
      E-books  of every subject
    </h1>
  </div></header>
   <div className=" ml-40 mr-29 mt-2 h-auto mb-10  bg-green-950 mr-40"> 
    <table className=" justify-center w-full mr-20">
      <thead>
        <tr className="border text-2xl border-spacing-4 bg-green-300">
          <th className="border  ">Year</th>
          
          <th>Download</th>
        </tr>
      </thead>
     <tbody className="bg-slate-400">
        {ebooks.map((paper, index) => (
          <tr className="border text-xl font-semibold" key={index}>
            
            <td className="p-10 border">{paper.subject}</td>
            <td className="p-10 border text-indigo-600">
              <a href={paper.downloadLink} target="_blank" rel="noopener noreferrer">
                Download
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
    </div>
  );
};

export default Ebooks;