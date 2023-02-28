import React from "react";
import { Link } from "react-router-dom";

export default function Privacypolicy() {
  return (
    <div className=" my-10  mx-20  font-mono">
      <div>
        <Link to={"/"} className="hover:underline py-10 font-bold">
          Home &nbsp;
        </Link>
        <span>&#62;</span>

        <span className="px-5">Privacy Policy</span>
      </div>

      <h1 className="text-center  text-5xl my-10 font-bold  text-[#7f5539] font-serif">Privacy Policy</h1>

      <div className="m-10 space-y-5 ">
        <hr className='w-[40%] mt-8 m-auto mb-8 text-gray-500'/>
        <h2 className="my-2 text-2xl font-semibold font-serif text-[#9aaabb] text-center">WE RESPECT YOUR PRIVACY</h2>
        <hr className='w-[40%] mt-8 m-auto mb-8 text-gray-500'/>
        <p className="text-md text-center font-mono">
          Coding Pathshala uses and protects any information that you give when
          you use this website. If we ask you to provide <br /> certain information by
          which you can be identified when using this website, you can rest
          assured that it will only be used in accordance <br /> with this privacy
          statement. Coding Pathshala may change this policy in future by
          updating this page. You should check this page <br /> from time to time to
          ensure that you are happy with any changes.
        </p>
        <p className="text-md text-center font-mono">
          The team at Coding Pathshala is committed to ensuring that your
          privacy is protected. Wedo not share, sell, rent, or<br />  loan any
          identifiable information at the individual level regarding our
          customersto any third party. Any information<br /> you give us is handled
          with utmost care and security. This information is collected primarily
          to ensure that<br /> we are able to understand your needs, fulfill your
          orders, and improve our products and services.
        </p>
      </div>
      <div className="m-10 space-y-5">
        <hr className='w-[40%] mt-8 m-auto mb-8 text-gray-500'/>
        <h3 className="my-2 text-2xl font-semibold font-serif text-[#9aaabb] text-center">What we collect</h3>
        <hr className='w-[40%] mt-8 m-auto mb-8 text-gray-500'/>
        <p className="text-md text-center font-mono">
          We require this information to understand your needs and provide you
          with a better service, and in particular <br /> for the following reasons:
        </p>
        <ol className="list-decimal text-md font-mono ml-80">
          <li>Internal record keeping.</li>
          <li>To improve our products and services.</li>
          <li>
            To periodically send promotional emails to you about new products,
            special offers or <br /> other information which we think you may find
            interesting and useful.
          </li>
          <li>
            From time to time, we may also use your information to contact you
            for market research <br /> purposes. We may contact you by email, phone,
            fax or mail. We may use the information <br /> to customise the website
            according to your interests.
          </li>
        </ol>
      </div>
      <div className="m-10 space-y-5">
        <hr className='w-[40%] mt-8 m-auto mb-8 text-gray-500'/>
        <p className="my-2 text-2xl font-semibold font-serif text-[#9aaabb] text-center ">Security</p>
        <hr className='w-[40%] mt-8 m-auto mb-8 text-gray-500'/>
        <p className="text-md text-center font-mono">
          We are committed to ensuring that your information is secure. In order
          to prevent unauthorised access or disclosure, <br /> we have put in place
          suitable physical, electronic and managerial procedures to safeguard
          and secure the information we collect online.
        </p>
      </div>
      <div className="m-10 space-y-5">
        <hr className='w-[40%] mt-8 m-auto mb-8 text-gray-500'/>
        <p className="my-2 text-2xl font-semibold font-serif text-[#9aaabb] text-center ">Links to other websites</p>
        <hr className='w-[40%] mt-8 m-auto mb-8 text-gray-500'/>
        <p className="text-md text-center font-mono">
          Our website may contain links to other websites of interest. However,
          once you have used these links to leave our site, you should note that
          we do not have any control over that other website. Therefore, we
          cannot be responsible for the protection and privacy of any
          information which you provide whilst visiting such sites, and such
          sites are not governed by this privacy statement. You should exercise
          caution and look at the privacy statement applicable to the website in
          question.
        </p>
        <p className="text-md text-center font-mono">
          We will not sell, distribute or lease your personal information to
          third parties unless we have your permission or are required by law to
          do so. We may use your personal information to send you promotional
          information about third parties which we think you may find
          interesting if you tell us that you wish this to happen.
        </p>
        <p className="text-md text-center font-mono">
          You may request details of personal information which we hold about
          you under the Data Protection Act 1998. A small fee will be payable.
          If you would like a copy of the information held on you please write
          to us at
        </p>
        <p className="text-md text-center font-mono">
          If you believe that any information we are holding on you is incorrect
          or incomplete, please email us as soon as possible. We will promptly
          correct any information found to be incorrect.
        </p>
      </div>
    </div>
  );
}
