import React, { useMemo, useState } from 'react';
import { useFormik } from 'formik';
import styled, { css } from 'styled-components';

interface FormProps {
  className?: string;
  defaultValue?: string;
  disabled?: boolean;
  maxTextLength: number;
  placeholderMessage?: string;
  readOnly?: boolean;
  onSubmit?: (e?: React.MouseEvent<HTMLFormElement>) => void;
}

function Form({
  className,
  defaultValue = '',
  disabled = false,
  maxTextLength,
  placeholderMessage = '주문사항을 입력해주세요.',
  readOnly = false,
  onSubmit,
}: FormProps) {
  const [textLength, setTextLength] = useState(maxTextLength - defaultValue.length);

  const formik = useFormik({
    initialValues: { message: defaultValue },
    onSubmit: ({ message }, { setFieldValue }) => {
      alert(message);
      setFieldValue('message', '');
    },
  });

  const enteringMessage = useMemo(
    () => formik.values.message !== defaultValue && !!formik.values.message,
    [defaultValue, formik.values.message],
  );

  const showBoxOnly = useMemo(
    () => disabled || !enteringMessage || readOnly,
    [disabled, enteringMessage, readOnly],
  );

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (maxTextLength - e.target.value.length >= 0) {
      formik.setFieldValue('message', e.target.value);
      setTextLength(maxTextLength - e.target.value.length);
    }
  };

  const handleSubmit = (e: React.MouseEvent<HTMLFormElement>) => {
    if (typeof onSubmit === 'function') {
      onSubmit(e);
    }
    formik.handleSubmit(e);
  };

  return (
    <StyledForm
      className={className}
      disabled={disabled}
      readOnly={readOnly}
      onSubmit={handleSubmit}
    >
      <StyledInputBox showBoxOnly={showBoxOnly}>
        <StyledTextContainer>
          <StyledTextarea
            disabled={disabled}
            readOnly={readOnly}
            placeholder={placeholderMessage}
            value={formik.values.message}
            onChange={handleChange}
          />
        </StyledTextContainer>
        <StyledLength>{textLength}</StyledLength>
      </StyledInputBox>
      {!readOnly && !disabled && enteringMessage && (
        <StyledSubmitButton aria-label="저장" enteringMessage={enteringMessage} type="submit">
          Save
        </StyledSubmitButton>
      )}
    </StyledForm>
  );
}

const StyledForm = styled.form<{ disabled: boolean; readOnly: boolean }>`
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  background: #ffffff;
  width: 100%;
  min-width: 65rem;
  ${({ readOnly }) =>
    readOnly &&
    css`
      background: #faecdd;
      color: #fe7b30;
      ::placeholder {
        color: #fe7b30;
      }
    `}
  ${({ disabled }) =>
    disabled &&
    css`
      background: #f9f9f9;
      color: #fe7b30;
      ::placeholder {
        color: #fe7b30;
      }
    `}
`;

const StyledInputBox = styled.div<{ showBoxOnly?: boolean }>`
  position: relative;
  border: 0.1rem solid #d9d9d9;
  padding: 1rem 0 1rem 1.5rem;

  &:focus-within {
    border-color: rgba(254, 123, 48);
  }
  ${({ showBoxOnly }) =>
    showBoxOnly
      ? css`
          width: 100%;
        `
      : css`
          width: 90%;
          margin-right: 0.5rem;
        `}
`;

const StyledTextContainer = styled.div`
  position: relative;
  width: calc(100% - 2.25rem);
  height: 10rem;
  border: 0;
  padding: 0;
`;

const StyledTextarea = styled.textarea<{ disabled: boolean; readOnly: boolean }>`
  font-size: 1.6rem;
  line-height: 1.7;
  background: inherit;
  border: 0;
  width: 100%;
  resize: none;
  :focus-within {
    outline: 0;
  }
  ${({ disabled, readOnly }) =>
    (disabled || readOnly) &&
    css`
      color: #fe7b30;

      ::placeholder {
        color: #fe7b30;
      }
    `};
`;

const StyledLength = styled.div`
  font-size: 1.4rem;
  color: #999999;
  text-align: right;
  margin: 1rem 1rem 0 0;
`;

const StyledSubmitButton = styled.button<{
  enteringMessage: boolean;
}>`
  color: ${({ enteringMessage }) => (!enteringMessage ? '#999999' : '#fe7b30')};
  border: 0.1rem solid #d9d9d9;
  width: calc(10% - 0.5rem);
  text-align: center;
  cursor: ${({ enteringMessage }) => (!enteringMessage ? 'not-allowed' : 'pointer')};
`;

export default Form;
