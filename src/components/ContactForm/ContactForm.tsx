import React from "react";
import styled from "styled-components";
import { colors, fonts } from "../../shared/variables";
import { Button } from "../Button/Button";

const SPACING = "0.5rem";

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
`;

export const ContactForm = () => {
  return (
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

      <SubmitButotn>Topkek</SubmitButotn>
    </Form>
  );
};
