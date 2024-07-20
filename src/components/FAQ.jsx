import React from "react";
import AnimationOnScroll from "react-animate-on-scroll";

const FAQ = () => {
  return (
    <div className="">
      <div className="">
        <div className="">
          <div className="">
            <h1 className="text-5xl text-center font-bold mb-10">F-A-Q</h1>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-2">
        <AnimationOnScroll animateIn="slideInLeft" animateOnce={true}>
          <Question
            question="Why should you participate"
            answer="Battle Of Titans is a platform for students to showcase their skills and talents. It is a great opportunity for students to learn and grow. "
            open={true}
          />
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="slideInRight" animateOnce={true}>
          <Question
            question="How To Register?"
            answer="The registration form has been sent to all the schools. The form is also linked above. Individual participants are not allowed. Your school must register you."
            open={true}
          />
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="slideInLeft" animateOnce={true}>
          <Question
            question="What are the dates?"
            answer="The event will take place on 8th august in school premises itself. Participants are requested to check dates for prelims of competitions beforehand"
          />
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="slideInRight" animateOnce={true}>
          <Question
            question="Are all events offline?"
            answer="NO, Majority of the events will take place offline however AIFSG ,Sprite Surge & Tech print will have online rounds"
          />
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="slideInLeft" animateOnce={true}>
          <Question
            question="Who are eligible to take part"
            answer="All students corresponding to their age group are allowed to take part in representing their school for this mega event"
          />
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="slideInRight" animateOnce={true}>
          <Question
            question="Can i register privately?"
            answer="NO. Private registrations are not allowed ,your school must register you"
          />
        </AnimationOnScroll>
      </div>
    </div>
  );
};
function Question(props) {
  return (
    <div>
      <details
        className="group rounded-lg p-12 m-2 dark:bg-gray-900 [&_summary::-webkit-details-marker]:hidden"
        open={props.open ? true : false}
      >
        <summary
          className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900 dark:text-white"
          open
        >
          <h4 className="font-medium text-clip">
            [Q] {props.question || "What is Lorem Ipsum?"}
          </h4>

          <span className="relative size-5 shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute inset-0 size-5 opacity-100 group-open:opacity-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute inset-0 size-5 opacity-0 group-open:opacity-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </span>
        </summary>

        <p className="mt-4 leading-relaxed text-gray-700 dark:text-gray-200">
          [A]{" "}
          {props.answer ||
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry."}
        </p>
      </details>
    </div>
  );
}

export default FAQ;
