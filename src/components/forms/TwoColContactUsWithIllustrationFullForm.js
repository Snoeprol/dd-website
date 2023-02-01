import React, {useRef} from "react";
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

const Actions = styled.div`
  ${tw`relative max-w-md text-center mx-auto lg:mx-0`}
  form {
    ${tw`p-4`}
    width: 100%;
    @media (min-width: 768px) {
      width: 80%;
    }
  }
  input[name="message"] {
    ${tw`h-20 p-4 sm:pr-20 pl-8 rounded-full border-2 w-full font-medium focus:outline-none transition duration-300 focus:border-primary-500 hover:border-gray-500`}
    @media (max-width: 767px) {
      height: 20vh;
      width: 80%;
    }
  }
  input[name="user_name"],
  input[name="user_email"] {
    ${tw`h-12 p-4 sm:pr-20 pl-8 rounded-full border-2 w-full font-medium focus:outline-none transition duration-300 focus:border-primary-500 hover:border-gray-500`}
    @media (max-width: 767px) {
      height: 10vh;
      width: 80%;
    }
  }
  button[type="submit"] {
    ${tw`block w-full h-12 p-4 bg-primary-500 text-black font-bold rounded-full py-4 flex items-center justify-center focus:outline-none hover:bg-primary-900 transition duration-300`}
  }
`;
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

  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_cbu7w2k', 'template_pbk5ecc', form.current, 'X1zFNtgTRJGKe9mcK')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    
      
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
            <Description>{description}</Description>
            {/* <Form action={formAction} method={formMethod} onSubmit={sendEmail}>
              <Input type="email" name="email" placeholder="Your Email Address" />
              <SubmitButton type="submit">{submitButtonText}</SubmitButton>
            </Form> */}
            <Actions>
              {/* <input type="text" placeholder="Your E-mail Address" />
              <button>Get Started</button> */}
              {/* Make the form fit in the screen */}
            <form id="myform" ref={form} onSubmit={sendEmail}>
              <label>Name</label>
              <input type="text" name="user_name" />
              <label>Email</label>
              <input type="email" name="user_email" />
              <label>Message</label>
              <input type="text" name="message" />
              <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
              <button type="submit" value="Send">Send</button>
            </form>


            </Actions>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};

