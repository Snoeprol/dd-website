import React, { useRef } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import emailjs from '@emailjs/browser';
//eslint-disable-next-line
import { css } from "styled-components/macro";

import Header from "../headers/light.js";

import { ReactComponent as SvgDecoratorBlob1 } from "../../images/svg-decorator-blob-1.svg";
import DesignIllustration from "../../images/design-illustration-2.svg";
import CustomersLogoStripImage from "../../images/customers-logo-strip.png";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col lg:flex-row lg:items-center max-w-screen-xl mx-auto py-20 md:py-24`;
const LeftColumn = tw.div`relative lg:w-5/12 text-center max-w-lg mx-auto lg:max-w-none lg:text-left`;
const RightColumn = tw.div`relative mt-12 lg:mt-0 flex-1 flex flex-col justify-center lg:self-end`;

const Heading = tw.h1`font-bold text-3xl md:text-3xl lg:text-4xl xl:text-5xl text-gray-900 leading-tight`;
const Paragraph = tw.p`my-5 lg:my-8 text-base xl:text-lg`;

  
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
    }
  }
  input[name="user_name"],
  input[name="user_email"] {
    ${tw`h-12 p-4 sm:pr-20 pl-8 rounded-full border-2 w-full font-medium focus:outline-none transition duration-300 focus:border-primary-500 hover:border-gray-500`}
    @media (max-width: 767px) {
      height: 10vh;
    }
  }
  button {
    ${tw`w-full sm:absolute right-0 top-0 bottom-0 bg-primary-500 text-gray-100 font-bold mr-2 my-4 sm:my-2 rounded-full py-4 flex items-center justify-center sm:w-40 sm:leading-none focus:outline-none hover:bg-primary-900 transition duration-300`}
  }
`;

const IllustrationContainer = tw.div`flex justify-center lg:justify-end items-center`;

// Random Decorator Blobs (shapes that you see in background)
const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none opacity-5 absolute left-0 bottom-0 h-64 w-64 transform -translate-x-2/3 -z-10`}
`;

const CustomersLogoStrip = styled.div`
  ${tw`mt-12 lg:mt-20`}
  p {
    ${tw`uppercase text-sm lg:text-xs tracking-wider font-bold text-gray-500`}
  }
  img {
    ${tw`mt-4 w-full lg:pr-16 xl:pr-32 opacity-50`}
  }
`;

export default ({ roundedHeaderButton }) => {

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
  // const form = useRef();

  // if (form) {
  //   form.addEventListener('submit', function(event) {
  //   event.preventDefault();
  //   emailjs.sendForm('service_cbu7w2k', 'template_pbk5ecc', this, 'X1zFNtgTRJGKe9mcK')
  //   .then(function() {
  //   alert("Your message has been sent!");
  //   })
  //   .catch(function(error) {
  //   alert("Something went wrong, please try again later.");
  //   });
  //   });
  //   }
  

  return (
    <>
      <Header roundedHeaderButton={roundedHeaderButton} />
      <Container>
        <TwoColumn>
          <LeftColumn>
            <Heading>
              Software Solutions, <span tw="text-primary-500">for you.</span>
            </Heading>
            <Paragraph>
            2Empowering businesses with innovative software solutions to streamline processes, increase efficiency, and drive growth.
            </Paragraph>
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
              <input type="submit" value="Send" styled=""/>
            </form>


            </Actions>
            <CustomersLogoStrip>
              <p>Our TRUSTED Customers</p>
              <img src={CustomersLogoStripImage} alt="Our Customers" />
            </CustomersLogoStrip>
          </LeftColumn>
          <RightColumn>
            <IllustrationContainer>
              <img tw="min-w-0 w-full max-w-lg xl:max-w-3xl" src={DesignIllustration} alt="Design Illustration" />
            </IllustrationContainer>
          </RightColumn>
        </TwoColumn>
        <DecoratorBlob1 />
      </Container>
    </>
  );
};
