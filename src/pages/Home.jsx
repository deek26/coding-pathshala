import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Home() {
  return (
    <div className="">
      <div>
        <img src="" alt="" />
      </div>
      <div className="bg-gray-400 w-[20%]  relative  overflow-scroll h-[400px]">
        <div className=" flex justify-evenly items-center  py-2 ">
          <div className="flex items-center space-x-2">
            <GiHamburgerMenu></GiHamburgerMenu>
            <p>Categories</p>
          </div>
          <button className="font-semibold bg-white px-1 text-sm rounded-md">
            English
          </button>
          <button className="font-semibold bg-white px-1 text-sm rounded-md ">
            Hindi
          </button>
        </div>
        <ul className="bg-white text-sm px-2 space-y-1 py-1">
          <li>AIR FORCE</li>
          <li>ARITHMETIC/MATHS</li>
          <li>B.ED./TEACHERS APTITUDE</li>
          <li>BANK CLERK</li>
          <li>BANK P.O.</li>
          <li>CSIR-UGC NET/JRF/SET</li>
          <li>
            DDA EXAM.
            <ul className="display:none">
              <li>Delhi Development Authority</li>
            </ul>
          </li>
          <li>DEFENCE SERVICES EXAM.</li>
          <li>DELHI SSSB</li>
          <li>ENGG. EXAM.</li>
          <li>EPFO/ESIC</li>
          <li>ESSAY/LETTERS</li>
          <li>GATE/PSUs/JTO/ DRDO/IES/ISRO/TTA</li>
          <li>GENERAL BOOKS</li>
          <li>GENERAL ENGLISH</li>
          <li>GENERAL KNOWLEDGE/STATE G.K.</li>
          <li>INTELLIGENCE BUREAU (I.B.)</li>
          <li>INTELLIGENCE TEST</li>
          <li>INTERVIEW/PERSONALITY DEVELOPMENT</li>
          <li>LAW SERIES/JUDICIAL SERVICES</li>
          <li>Lecturer/Trained Graduate Teacher Rect. Exam.</li>
          <li>LIC/GIC/OIC</li>
          <li>MBA/MCA/BBA/BCA/ BIT/H.M./LLB./CAT/TTM</li>
          <li>MISCELLANEOUS BOOKS</li>
          <li>N.D.A./C.D.S.</li>
          <li>NAVODAYA VIDYALAYA</li>
          <li>NTSE/STSE</li>
          <li>ONLINE TEST</li>
          <li>PMT/PET/NURSING</li>
          <li>POLICE CONSTABLE</li>
          <li>POLICE SUB-INSPECTORS</li>
          <li>POLYTECHNIC</li>
          <li>RAILWAY TECHNICAL/ENGG. DIPLOMA</li>
          <li>RAILWAY/S.C.R.A. EXAM.</li>
          <li>RECENT RELEASES (ENGLISH BOOKS)</li>
          <li>SAINIK/MILITARY SCHOOL EXAM.</li>
          <li>
            SSC
            <ul className="display:none">
              <li> Higher Secondary Level</li>
              <li> Graduate Level</li>
            </ul>
          </li>
          <li>TEACHER RECRUITMENT EXAMS.</li>
          <li>UNION &amp; STATE CIVIL SERVICES PRE</li>
          <li>Upkar Career Development Series Ki Pustakain</li>
        </ul>
      </div>
    </div>
  );
}
