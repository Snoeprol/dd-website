import React, {useState} from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import EmailIllustrationSrc from "images/email-illustration.svg";
import emailjs from '@emailjs/browser';
import axios from "axios";
// import sgMail from '@sendgrid/mail';

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto`;
const TextColumn = styled(Column)(props => [
  tw`md:w-7/12 mt-16 md:mt-0`,
  props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
]);

const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-contain bg-no-repeat bg-center h-full`,
]);
const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(SectionHeading)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`

const Form = tw.form`mt-8 md:mt-10 text-sm flex flex-col max-w-sm mx-auto md:mx-0`
const Input = tw.input`mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hocus:border-primary-500`
const Textarea = styled(Input).attrs({as: "textarea"})`
  ${tw`h-24`}
`

const SubmitButton = tw(PrimaryButtonBase)`inline-block mt-8`

export default ({
  subheading = "Contact Us",
  heading = <>Feel free to <span tw="text-primary-500">get in touch</span><wbr/> with us.</>,
  description = "Send us a message using the form below and we'll get back to you as soon as possible.",
  submitButtonText = "Send",
  formAction = "#",
  formMethod = "get",
  textOnLeft = true,
}) => {
  // Prevent refresh on submit
  const handleSubmit = e => {
    e.preventDefault();
  };
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const [response, setResponse] = useState(null);

  const sendEmail = async (event) => {

    event.preventDefault();

    fetch("https://api.sendgrid.com/v3/mail/send", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Authorization",
    "Access-Control-Allow-Origin": "*",
  },
  body: JSON.stringify({
    "personalizations": [
      {
        "to": [
          {
            "email": "mariomariomariovanrooij@gmail.com",
            "name": "Mario van Rooij"
          }
        ],
        "subject": "Hello, World!"
      }
    ],
    "content": [
      {
        "type": "text/plain",
        "value": "Heya!"
      }
    ],
    "from": {
      "email": "mariovanrooij@hotmail.com",
      "name": "Sam Smith"
    },
    "reply_to": {
      "email": "mariovanrooij@hotmail.com",
      "name": "Sam Smith"
    }
  })
})
.then(response => response.json())
.catch(error => console.error(error));

};




  return (
    <Container>
      <TwoColumn>
        <ImageColumn>
          <Image imageSrc={EmailIllustrationSrc} />
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            {subheading && <Subheading>{subheading}</Subheading>}
            <Heading>{heading}</Heading>
            {description && <Description>{description}</Description>}
            <form onSubmit={sendEmail}>
      <input
        type="email"
        name="email"
        placeholder="Your Email Address"
        value={formData.email}
        required
        onChange={handleChange}
      />
      <input
        type="text"
        name="name"
        placeholder="Full Name"
        value={formData.name}
        required
        onChange={handleChange}
      />
      <input
        type="text"
        name="subject"
        placeholder="Subject"
        value={formData.subject}
        required
        onChange={handleChange}
      />
      <textarea
        name="message"
        placeholder="Your Message Here"
        value={formData.message}
        required
        onChange={handleChange}
      />
      <button type="submit">Send</button>
    </form>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};

