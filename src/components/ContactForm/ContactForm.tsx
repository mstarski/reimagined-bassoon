import React from "react";
import styled from "styled-components";
import { pxToRem } from "../../shared/style-utils";
import { bps, colors, fonts } from "../../shared/variables";
import { Button } from "../Button/Button";

const SPACING = "0.5rem";

const FormWrapper = styled.div`
  padding: 0 1rem;

  @media (min-width: ${bps.sm}) {
    padding: 0 2rem;
  }
`;

const Form = styled.form`
  position: relative;
  z-index: 2;
  padding: 2rem 1rem;
  font-family: ${fonts.fira};
  color: ${colors.white};
  background: ${colors.purple3};
`;

const Label = styled.label`
  display: flex;
  flex-flow: column;
  margin-bottom: ${SPACING};
  font-weight: 700;
`;

const Input = styled.input`
  margin-top: ${SPACING};
`;

const Textarea = styled.textarea`
  min-height: 230px;
  margin-top: ${SPACING};
  padding: 0.4rem;
`;

const SubmitButotn = styled(Button)`
  margin: 1.5rem auto 0;

  @media (min-width: ${bps.md}) {
    width: ${pxToRem(200)};
    height: ${pxToRem(50)};
    font-size: 1.4rem;
  }
`;

export const ContactForm = () => {
  return (
    <FormWrapper>
      <Form>
        <Label>
          Email
          <Input type="email" />
        </Label>
        <Label>
          Name
          <Input type="name" />
        </Label>
        <Label>
          Your message
          <Textarea />
        </Label>

        <SubmitButotn>Send</SubmitButotn>
      </Form>
    </FormWrapper>
  );
};
