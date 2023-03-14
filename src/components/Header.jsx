import React from 'react'
import {ImWhatsapp} from 'react-icons/im'
import logo from './assests/svg/logo.png'
import {GoSearch} from 'react-icons/go'
import {FiUsers} from 'react-icons/fi'
import {FiHeart} from 'react-icons/fi'
import {BsHandbag} from 'react-icons/bs'
import {IoIosArrowDown} from 'react-icons/io'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'


export default function Header() {



  const navigate =useNavigate()



      function dropdown(){
        <div>
          hello
        </div>

        
      }


  return (
<>

  <div>
      <header>
          <div className='flex justify-end items-center bg-black h-[40px]  '>
            <div >
              <ul className='flex space-x-4 mr-[130px]'>
                <li className={`text-white font-semibold text-[15px] cursor-pointer`}
                onClick={()=>navigate('/MyAccount')}
                >My Account</li>
                <li className={`bg-white w-[1px] h-3 mt-[6px]`}></li>
                <li className={`text-white font-semibold text-[15px] cursor-pointer`}
                onClick={()=>navigate('/FAQs')}
                >FAQs</li>
                <li className={`bg-white w-[1px] h-3 mt-[6px]`}></li>
                <li className={`text-white font-semibold text-[15px]  cursor-pointer flex justify-center items-center `}
                onClick={()=>navigate('/ContactUs')}
                >Contact Us
                 <ImWhatsapp className='ml-3 h-5 w-5' 
                   onClick={()=>navigate('/Whatsapp')}
                 />
                </li>    
              </ul>
             </div>

          </div>


          <div className='flex mt-4 '>
             <div>
                <img src={logo} alt='logo' className='h-[100px] w-[200px] cursor-pointer '
                onClick={()=>navigate('/home')}
                />
               </div>

               <div className='flex items-center space-x-5'>
                  <div className='flex items-center relative'>
                        <input type='search' 
                        placeholder='Search entire store here....'
                        className='border-[2px] border-black w-[500px] h-[55px] rounded ml-48 pl-4'/>
                        <select className="w-[170px] absolute right-[60px] outline-none rounded  bg-gray-200 py-[12px] px-2">
                  <option value="All">All Categories</option>
                  <option value="5">AIR FORCE </option>
                  <option value="21">ARITHMETIC/MATHS </option>
                  <option value="26">B.ED./TEACHERS APTITUDE </option>
                  <option value="3">BANK CLERK </option>
                  <option value="4">BANK P.O. </option>
                  <option value="27">CSIR-UGC NET/JRF/SET </option>
                  <option value="1"> &nbsp;» UGC </option>
                  <option value="2">
                    {" "}
                    &nbsp;» UGC NET/JRF Exam. Solved Papers{" "}
                  </option>
                  <option value="3"> &nbsp;» CSIR-UGC Solved Papers </option>
                  <option value="27">CSIR-UGC NET/JRF/SET </option>
                  <option value="121">DDA EXAM. </option>
                  <option value="1">
                    {" "}
                    &nbsp;» Delhi Development Authority{" "}
                  </option>
                  <option value="2">
                    {" "}
                    &nbsp;» Delhi Development Authority{" "}
                  </option>
                  <option value="121">DDA EXAM. </option>
                  <option value="119">DEFENCE SERVICES EXAM. </option>
                  <option value="120">DELHI SSSB </option>
                  <option value="10">ENGG. EXAM. </option>
                  <option value="123">EPFO/ESIC </option>
                  <option value="24">ESSAY/LETTERS </option>
                  <option value="32">GATE/PSUs/JTO/ DRDO/IES/ISRO/TTA </option>
                  <option value="33">GENERAL BOOKS </option>
                  <option value="20">GENERAL ENGLISH </option>
                  <option value="19">GENERAL KNOWLEDGE/STATE G.K. </option>
                  <option value="124">INTELLIGENCE BUREAU (I.B.) </option>
                  <option value="23">INTELLIGENCE TEST </option>
                  <option value="25">INTERVIEW/PERSONALITY DEVELOPMENT </option>
                  <option value="31">LAW SERIES/JUDICIAL SERVICES </option>
                  <option value="115">
                    Lecturer/Trained Graduate Teacher Rect. Exam.{" "}
                  </option>
                  <option value="7">LIC/GIC/OIC </option>
                  <option value="14">
                    MBA/MCA/BBA/BCA/ BIT/H.M./LLB./CAT/TTM{" "}
                  </option>
                  <option value="125">MISCELLANEOUS BOOKS </option>
                  <option value="15">N.D.A./C.D.S. </option>
                  <option value="9">NAVODAYA VIDYALAYA </option>
                  <option value="17">NTSE/STSE </option>
                  <option value="133">ONLINE TEST </option>
                  <option value="11">PMT/PET/NURSING </option>
                  <option value="122">POLICE CONSTABLE </option>
                  <option value="13">POLICE SUB-INSPECTORS </option>
                  <option value="16">POLYTECHNIC </option>
                  <option value="6">RAILWAY TECHNICAL/ENGG. DIPLOMA </option>
                  <option value="118">RAILWAY/S.C.R.A. EXAM. </option>
                  <option value="1">RECENT RELEASES (ENGLISH BOOKS) </option>
                  <option value="8">SAINIK/MILITARY SCHOOL EXAM. </option>
                  <option value="12">SSC </option>
                  <option value="1"> &nbsp;» Higher Secondary Level </option>
                  <option value="2"> &nbsp;» Graduate Level </option>
                  <option value="3"> &nbsp;» Hindi Translator </option>
                  <option value="4"> &nbsp;» Section Officers </option>
                  <option value="12">SSC </option>
                  <option value="28">TEACHER RECRUITMENT EXAMS. </option>
                  <option value="1"> &nbsp;» NVS </option>
                  <option value="2"> &nbsp;» KVS </option>
                  <option value="3"> &nbsp;» DELHI SSSB </option>
                  <option value="4"> &nbsp;» TET </option>
                  <option value="5"> &nbsp;» CTET </option>
                  <option value="28">TEACHER RECRUITMENT EXAMS. </option>
                  <option value="29">
                    UNION &amp; STATE CIVIL SERVICES PRE{" "}
                  </option>
                  <option value="1"> &nbsp;» SYLLABUS </option>
                  <option value="29">
                    UNION &amp; STATE CIVIL SERVICES PRE{" "}
                  </option>
                  <option value="116">
                    Upkar Career Development Series Ki Pustakain{" "}
                  </option>
                  <option value="81">
                    अध्यापक/शिक्षक भर्ती/पात्रता परीक्षा/संविदा परीक्षा{" "}
                  </option>
                  <option value="1"> &nbsp;» नवोदय विद्यालय समिति </option>
                  <option value="2"> &nbsp;» केन्द्रीय विद्यालय संगठन </option>
                  <option value="3">
                    {" "}
                    &nbsp;» दिल्ली अधीनस्थ सेवा चयन बोर्ड{" "}
                  </option>
                  <option value="4"> &nbsp;» झारखण्ड </option>
                  <option value="5"> &nbsp;» राजस्थान </option>
                  <option value="6"> &nbsp;» अध्यापक पात्रता परीक्षा </option>
                  <option value="7">
                    {" "}
                    &nbsp;» राजस्थान अध्यापक पात्रता परीक्षा प{" "}
                  </option>
                  <option value="8">
                    {" "}
                    &nbsp;» उत्तर प्रदेश शिक्षक पात्रता परीक्षा{" "}
                  </option>
                  <option value="9">
                    {" "}
                    &nbsp;» उत्तराखण्ड अध्यापक पात्रता परीक्षा{" "}
                  </option>
                  <option value="10">
                    {" "}
                    &nbsp;» केन्द्रीय शिक्षक पात्रता परीक्षा{" "}
                  </option>
                  <option value="11">
                    {" "}
                    &nbsp;» हरियाणा अध्यापक पात्रता परीक्षा{" "}
                  </option>
                  <option value="12">
                    {" "}
                    &nbsp;» बिहार अध्यापक पात्रता परीक्षा{" "}
                  </option>
                  <option value="13">
                    {" "}
                    &nbsp;» बिहार सेकण्डरी एवं हायर सेकण्डरी शिक्षक पात्रता
                    परीक्षा{" "}
                  </option>
                  <option value="14">
                    {" "}
                    &nbsp;» झारखण्ड शिक्षक पात्रता परीक्षा{" "}
                  </option>
                  <option value="15">
                    {" "}
                    &nbsp;» छत्तीसगढ़ शिक्षक पात्रता परीक्षा{" "}
                  </option>
                  <option value="16">
                    {" "}
                    &nbsp;» मध्य प्रदेश संविदा शाला शिक्षक पात्रता परीक्षा{" "}
                  </option>
                  <option value="81">
                    अध्यापक/शिक्षक भर्ती/पात्रता परीक्षा/संविदा परीक्षा{" "}
                  </option>
                  <option value="88">अन्य पुस्तकें </option>
                  <option value="35">इंजीनियरिंग परीक्षा </option>
                  <option value="130">इन्टैलीजैन्स ब्यूरो (आई.बी.) </option>
                  <option value="47">ई.पी.एफ.ओ./ई.एस.आई.सी. </option>
                  <option value="89">
                    उपकार कैरियर डेवलपमेंट सीरीज की पुस्तकें{" "}
                  </option>
                  <option value="46">एन.डी.ए./सी.डी.एस. </option>
                  <option value="38">एल.आई.सी./जी.आई.सी. परीक्षा </option>
                  <option value="55">
                    एल–एल.बी./सी.टी./जे.बी.टी./बी.ए./बी.कॉम./होटल मैनेजमेंट{" "}
                  </option>
                  <option value="39">एस.एस.सी. </option>
                  <option value="1"> &nbsp;» हायर सेकण्डरी लेवल </option>
                  <option value="2"> &nbsp;» स्नातक स्तरीय </option>
                  <option value="3"> &nbsp;» सेक्शन ऑफीसर्स </option>
                  <option value="39">एस.एस.सी. </option>
                  <option value="77">गणित </option>
                  <option value="57">छात्रवृत्ति परीक्षाएँ </option>
                  <option value="79">टंकण कला </option>
                  <option value="128">डाक विभाग </option>
                  <option value="126">
                    दिल्ली अधीनस्थ सेवा चयन बोर्ड परीक्षा (DSSSB){" "}
                  </option>
                  <option value="84">दिल्ली पी.जी.टी. तथा टी.जी.टी. </option>
                  <option value="127">दिल्ली विकास प्राधिकरण </option>
                  <option value="2">नवीन प्रकाशन </option>
                  <option value="42">नवोदय विद्यालय </option>
                  <option value="75">निबन्ध </option>
                  <option value="34">पी.एम.टी./पी.ई.टी. </option>
                  <option value="49">पुलिस काँस्टेबिल/आरक्षक परीक्षा </option>
                  <option value="1"> &nbsp;» उत्तर प्रदेश </option>
                  <option value="2"> &nbsp;» उत्तराखण्ड </option>
                  <option value="3"> &nbsp;» राजस्थान </option>
                  <option value="4"> &nbsp;» मध्य प्रदेश </option>
                  <option value="5"> &nbsp;» बिहार </option>
                  <option value="7"> &nbsp;» छत्तीसगढ़ </option>
                  <option value="6"> &nbsp;» झारखण्ड </option>
                  <option value="8"> &nbsp;» दिल्ली/चण्डीगढ़ </option>
                  <option value="9"> &nbsp;» रेलवे </option>
                  <option value="10"> &nbsp;» B.S.F. </option>
                  <option value="11"> &nbsp;» C.R.P.F. </option>
                  <option value="12"> &nbsp;» CRPF </option>
                  <option value="13"> &nbsp;» ITBP </option>
                  <option value="14"> &nbsp;» SSB </option>
                  <option value="15"> &nbsp;» SSC </option>
                  <option value="49">पुलिस काँस्टेबिल/आरक्षक परीक्षा </option>
                  <option value="48">
                    पुलिस सब–इंस्पेक्टर/असिस्टेंट सब–इंस्पेक्टर परीक्षा{" "}
                  </option>
                  <option value="1"> &nbsp;» उत्तर प्रदेश </option>
                  <option value="2"> &nbsp;» उत्तराखण्ड </option>
                  <option value="3"> &nbsp;» राजस्थान </option>
                  <option value="4"> &nbsp;» मध्य प्रदेश </option>
                  <option value="5"> &nbsp;» छत्तीसगढ़ </option>
                  <option value="6"> &nbsp;» बिहार </option>
                  <option value="7"> &nbsp;» झारखण्ड </option>
                  <option value="8"> &nbsp;» हरियाणा </option>
                  <option value="9"> &nbsp;» दिल्ली </option>
                  <option value="10"> &nbsp;» आर.पी.एफ./आर.पी.एस.एफ </option>
                  <option value="11"> &nbsp;» BSF </option>
                  <option value="12"> &nbsp;» CISF </option>
                  <option value="13"> &nbsp;» ITBP </option>
                  <option value="14"> &nbsp;» C.R.P.F. </option>
                  <option value="15"> &nbsp;» CAPF/CPF </option>
                  <option value="16"> &nbsp;» SSB </option>
                  <option value="48">
                    पुलिस सब–इंस्पेक्टर/असिस्टेंट सब–इंस्पेक्टर परीक्षा{" "}
                  </option>
                  <option value="50">
                    पॉलिटेक्निक/आई.टी.आई. प्रवेश परीक्षा{" "}
                  </option>
                  <option value="1"> &nbsp;» उत्तर प्रदेश /उत्तराखण्ड </option>
                  <option value="2"> &nbsp;» मध्य प्रदेश </option>
                  <option value="3"> &nbsp;» छत्तीसगढ़ </option>
                  <option value="4"> &nbsp;» बिहार </option>
                  <option value="5"> &nbsp;» झारखण्ड </option>
                  <option value="6"> &nbsp;» राजस्थान </option>
                  <option value="7"> &nbsp;» हरियाणा </option>
                  <option value="8"> &nbsp;» दिल्ली </option>
                  <option value="50">
                    पॉलिटेक्निक/आई.टी.आई. प्रवेश परीक्षा{" "}
                  </option>
                  <option value="131">प्रदेश हेतु गाइडें </option>
                  <option value="1"> &nbsp;» मध्य प्रदेश </option>
                  <option value="2"> &nbsp;» छत्तीसगढ़ </option>
                  <option value="3"> &nbsp;» बिहार </option>
                  <option value="4"> &nbsp;» झारखण्ड </option>
                  <option value="5"> &nbsp;» उत्तर प्रदेश </option>
                  <option value="6"> &nbsp;» उत्तराखण्ड </option>
                  <option value="7"> &nbsp;» हरियाणा </option>
                  <option value="8"> &nbsp;» राजस्थान </option>
                  <option value="131">प्रदेश हेतु गाइडें </option>
                  <option value="83">
                    प्रवक्‍ता/प्रशिक्षित स्नातक शिक्षक भर्ती परीक्षा{" "}
                  </option>
                  <option value="1"> &nbsp;» PGT </option>
                  <option value="2"> &nbsp;» प्रवक्ता भर्ती परीक्षा </option>
                  <option value="3"> &nbsp;» TGT </option>
                  <option value="4">
                    {" "}
                    &nbsp;» प्रशिक्षित स्नातक शिक्षक भर्ती{" "}
                  </option>
                  <option value="5"> &nbsp;» उत्तराखण्ड </option>
                  <option value="6">
                    {" "}
                    &nbsp;» उत्तराखण्ड अधीनस्थ शिक्षा (प्रशिक्षित स्नातक){" "}
                  </option>
                  <option value="7"> &nbsp;» Delhi PGT </option>
                  <option value="8"> &nbsp;» Delhi TGT </option>
                  <option value="83">
                    प्रवक्‍ता/प्रशिक्षित स्नातक शिक्षक भर्ती परीक्षा{" "}
                  </option>
                  <option value="56">
                    बी.एड./एम.एड./डी.एड./शिक्षक अभिरूचि{" "}
                  </option>
                  <option value="36">बैंक क्लर्क&nbsp;परीक्षा </option>
                  <option value="37">बैंक पी. ओ. परीक्षा </option>
                  <option value="78">बौद्धिक योग्यता </option>
                  <option value="82">
                    मध्य प्रदेश संविदा शाला शिक्षक पत्राता परीक्षा{" "}
                  </option>
                  <option value="80">यू.जी.सी.–नेट/जे.आर.एफ./सेट </option>
                  <option value="1">
                    {" "}
                    &nbsp;» यू.जी.सी. नेट- सॉल्वड् पेपर्स{" "}
                  </option>
                  <option value="80">यू.जी.सी.–नेट/जे.आर.एफ./सेट </option>
                  <option value="44">रक्षा </option>
                  <option value="132">राज्य लोक सेवा आयोग </option>
                  <option value="1"> &nbsp;» मध्य प्रदेश </option>
                  <option value="2"> &nbsp;» उत्तर प्रदेश </option>
                  <option value="3"> &nbsp;» उत्तराखण्ड </option>
                  <option value="4"> &nbsp;» आर.ए.एस./आर.टी.एस. </option>
                  <option value="5"> &nbsp;» झारखण्ड </option>
                  <option value="6"> &nbsp;» छत्तीसगढ़ </option>
                  <option value="132">राज्य लोक सेवा आयोग </option>
                  <option value="41">रेलवे टेक्नीकल/इंजी. डिप्लोमा </option>
                  <option value="40">रेलवे/एस.सी.आर.ए. परीक्षा </option>
                  <option value="45">वायु सैनिक </option>
                  <option value="87">शब्दावली </option>
                  <option value="76">साक्षात्कार </option>
                  <option value="68">सामान्य ज्ञान </option>
                  <option value="1"> &nbsp;» दिल्ली </option>
                  <option value="2"> &nbsp;» हरियाणा </option>
                  <option value="3"> &nbsp;» हिमाचल प्रदेश </option>
                  <option value="4"> &nbsp;» राजस्थान </option>
                  <option value="5"> &nbsp;» उत्तर प्रदेश </option>
                  <option value="6"> &nbsp;» उत्तराखण्ड </option>
                  <option value="7"> &nbsp;» मध्य प्रदेश </option>
                  <option value="8"> &nbsp;» छत्तीसगढ़ </option>
                  <option value="9"> &nbsp;» बिहार </option>
                  <option value="10"> &nbsp;» झारखण्ड </option>
                  <option value="68">सामान्य ज्ञान </option>
                  <option value="74">सामान्य हिन्दी </option>
                  <option value="51">सिविल जज/ए.पी.ओ./विधि सीरीज </option>
                  <option value="58">
                    सिविल सर्विसिज (प्रारम्भिक) परीक्षा{" "}
                  </option>
                  <option value="43">
                    सैनिक स्कूल/म.प्र. उत्कृष्टता विद्यालय/नेतरहाट
                    विद्यालय/मिलिटरी स्कूल{" "}
                  </option>
                  <option value="1"> &nbsp;» मिलिटरी स्कूल </option>
                  <option value="43">
                    सैनिक स्कूल/म.प्र. उत्कृष्टता विद्यालय/नेतरहाट
                    विद्यालय/मिलिटरी स्कूल{" "}
                  </option>
                </select>
                        <GoSearch className=' h-[55px] w-[60px] bg-blue-300 p-[13px] rounded absolute right-0' />
                  </div>

                  <div className='flex items-center'> 
                      <FiUsers className='h-[30px] w-[40px]' />
                    
                      <div className='text-md cursor-pointer'>
                        <p><Link to='/signin'>Sign In</Link></p>
                        <p><Link to='/signup'>Create New Account</Link></p>
                      </div>
                </div>

                  <div className='flex items-center'> 
                     <FiHeart className='h-[30px] w-[40px] cursor-pointer' />
                    
                          <div className='text-md cursor-pointer'>
                            <p>Favorite</p>
                            <p>My Wish List</p>
                          </div>
                      </div>
                          <div className='flex items-center'> 
                            <BsHandbag className='h-[30px] w-[40px] cursor-pointer' />
                    
                          <div className='text-md cursor-pointer'>
                            <p>My Cart</p>
                            <p>₹0.00</p>
                          </div>

                      </div>        
                </div>  

          </div>


          <div className='flex text-white space-x-[30px] items-center bg-black h-[60px] font-semibold cursor-pointer'>

                    <div className="flex items-center group pl-10 space-x-8 ml-[100px] border-[#6b705c] border-r-[1px] relative h-full hover:bg-blue-500 p-1 rounded-md ">
                        <p className='text-white'>
                          ALL CATEGORIES
                        </p>

                        <div className='flex flex-col space-y-1 justify-center pr-[100px]'>
                          <div className=' w-7 h-[3px] bg-white'></div>
                          <div className=' w-7 h-[4px] bg-white'></div>
                          <div className=' w-7 h-[3px] bg-white'></div>
                        </div>
                        <div className=" hidden group-hover:block absolute top-[60px] left-[-40px] w-[359px] z-40 list-none bg-white text-black text-md space-y-2 font-semi-bold p-5 ">
                <li className="hover:text-yellow-600  ">
                  <Link>Civil Services &nbsp; &#62; </Link>
                </li>
                <hr />
                <li className="hover:text-yellow-600  ">
                  <Link>College Admissions &nbsp; &#62;</Link>
                </li>
                <hr />
                <li className="hover:text-yellow-600  ">
                  <Link>School &nbsp; &#62;</Link>
                </li>
                <hr />
                <li className="hover:text-yellow-600  ">
                  <Link>Govt. Vacancy Books &nbsp; &#62;</Link>
                </li>
                <hr />
                <li className="hover:text-yellow-600  ">
                  <Link>General Books &nbsp; &#62;</Link>
                </li>
              </div>


                    </div>
                    <div className=' group relative flex space-x-2 items-center cursor-pointer h-full hover:bg-blue-500 p-1 rounded-lg'>
                      <p className=''>Our Products</p> 
                      <IoIosArrowDown/>
                      <div className='hidden group-hover:block w-[200px]  text-black h-[200px] top-[51px] left-[-10px] bg-gray-50 rounded-lg  list-none z-10  absolute py-4 my-2 px-5 space-y-4'>
                        <li>

                        <Link to='/books' className='hover:text-yellow-600 mt-5'>Books</Link>
                        </li>
                        <li>

                        <Link to='/exam-combos' className='hover:text-yellow-600 mt-5'>Exam Combos</Link>
                        </li>
                        <li>

                        <Link to='/online-test' className='hover:text-yellow-600 mt-5'>Online Test</Link>
                        </li>
                        <li>

                        <Link to='/videocourses' className='hover:text-yellow-600 mt-5'>Video Courses</Link>
                        </li>
                        <li>

                        <Link to='/magazines' className='hover:text-yellow-600 mt-5'>Magazines</Link>
                        </li>
                      </div>
                    </div>
                    <div className='group relative flex space-x-2 items-center cursor-pointer h-full hover:bg-blue-500  p-3 rounded-lg'>
                      <p className=''>Grow With Us</p>
                      <IoIosArrowDown/>

                      <div className='hidden group-hover:block w-[200px]  text-black h-[150px] top-[51px] left-[-10px] bg-gray-50 rounded-lg list-none z-10  absolute py-4 my-2 px-5 space-y-4 '>
                        <li>

                        <Link to='/authors' className='hover:text-yellow-600 mt-5 '>Authors</Link>
                        </li>
                        <li>

                        <Link to='/affiliates' className='hover:text-yellow-600 mt-5'>Affiliates</Link>
                        </li>
                        <li>

                        <Link to='/partners' className='hover:text-yellow-600 mt-5'>Partners</Link>
                        </li>
                        
                      </div>


                      
                    </div>

                    <div className='cursor-pointer hover:bg-blue-500  h-[60px] pt-[18px] px-2 rounded-lg'>
                      <p className=''>Coaching Institues</p>
                    </div>
                    <div className='cursor-pointer hover:bg-blue-500  h-[60px] pt-[18px] px-2 rounded-lg'>
                      <p className=''>Media Coverage</p>
                    </div>
                    <div className='flex space-x-2 items-center cursor-pointer hover:bg-blue-500 h-full p-2 rounded-lg'>
                      <p className=''>Free Content</p>
                      <IoIosArrowDown/>
                    </div>

          </div>

           
          
      </header>

      </div>


    </>
    
  )
}
