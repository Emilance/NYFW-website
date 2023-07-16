import React, { useState } from 'react';
import './FaqSection.css';

const FaqSection = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const faqList = [
    {
      question: 'Who can attend?',
      answer: 'a. Young founders and entrepreneurs in any sector of the economy. b. Students (under/postgrads) and young folks interested in the startup and entrepreneurship ecosystem.c. Investors, regulators, and other stakeholders in the entrepreneurship ecosystem willing to support young founders and entrepreneurs.d. Innovative and creative youth willing to build the next big solutions and startups that would shape the future of Nigeria, Africa, and others.',
    },
    {
      question: 'Is the event only restricted to startup founders or business owners?',
      answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, earum.',
    },
    {
        question: 'What to expect/What do I stand to gain?',
        answer: 'amet consectetur adipisicing elit. Aliquam, earum.',
      },
      {
        question: "Why should I be there? Can't I just view it virtually?",
        answer: 'using Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, earum..',
      },
  ];

  const handleQuestionClick = (index) => {
    setSelectedQuestion(index);
  };

  return (
    <div className='faq-section'>

    <div className="faq-container">
      <div className="faq-questions">
        <h2>FAQ</h2>
        <ul>
          {faqList.map((faq, index) => (
            <li
              key={index}
              className={`question ${selectedQuestion === index ? 'active' : ''}`}
              onClick={() => handleQuestionClick(index)}
            >
              {faq.question}
            </li>
          ))}
        </ul>
      </div>
      <div className="faq-answers">
        {selectedQuestion !== null && (
          <div >
            <h3>{faqList[selectedQuestion].question}</h3>
            <p>{faqList[selectedQuestion].answer}</p>
          </div>
        )}
      </div>
    </div>
    </div>
  );
};

export default FaqSection;
