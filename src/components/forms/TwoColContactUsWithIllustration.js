import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import EmailIllustrationSrc from "images/email-illustration.svg";

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

const Form = tw.form`mt-8 md:mt-10 text-sm flex flex-col lg:flex-row`
const Input = tw.input`border-2 px-5 py-3 rounded focus:outline-none font-medium transition duration-300 hocus:border-primary-500`

const SubmitButton = tw(PrimaryButtonBase)`inline-block lg:ml-6 mt-6 lg:mt-0`

export default ({
  subheading = "Contact Us",
  heading = <>Feel free to <span tw="text-primary-500">get in touch</span><wbr/> with us.</>,
  description = "34 Lorem ipsum dolor sit amet, consectetur2 adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  submitButtonText = "Contact Me",
  formAction = "#",
  formMethod = "get",
  textOnLeft = true,
}) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.
  // const form = useRef();
  
  // const sendEmail = (e) => {
  //   // e.preventDefault(); // prevents the page from reloading when you hit “Send”
    
  //   const userEmail = form.current.elements.user_email.value;

  //   emailjs.init("<your-service-id>", "<your-user-id>");
  //   // Make a print statement to see if the email is being sent
  //   emailjs.sendForm('service_cbu7w2k', 'template_pbk5ecc', form.current, 'X1zFNtgTRJGKe9mcK', {to_email: [userEmail, "mariovanrooij@hotmail.com"]})
  //     .then((result) => {
  //         // show the user a success message
  //         // reset the form
  //     }, (error) => {
  //         // show the user an error
  //     });
  // };

  const form2 = document.getElementById('myform');

  form2.addEventListener('submit', function(event) {
    event.preventDefault();
    // generate the contact number value
    emailjs.sendForm('service_cbu7w2k', 'template_pbk5ecc', this, 'X1zFNtgTRJGKe9mcK')
    .then(alert("Your message has been sent!"))
    .catch(alert("Something went wrong, please try again later."));
  });
  
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

          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};
