import React from 'react';
import { DIRECTION_TYPE } from '@type/index';
import styled, { css } from 'styled-components';

interface CardProps {
  className?: string;
  direction: DIRECTION_TYPE;
  image: string;
  rating?: number;
  title: string;
}

interface HorizontalCardProps extends CardProps {
  direction: DIRECTION_TYPE.HORIZONTAL;
  author: string;
  description?: string;
}

interface VerticalCardProps extends CardProps {
  direction: DIRECTION_TYPE.VERTICAL;
  description: string;
  highlightedKeyword: string;
  label: string;
  omittedKeyword: string;
}

function Card(props: HorizontalCardProps | VerticalCardProps) {
  if (props.direction === DIRECTION_TYPE.HORIZONTAL) {
    const { className, description, direction, image, title } = props;
    return (
      <StyledCard className={className} direction={direction}>
        <StyledImageContainer direction={direction}>
          <StyledImage aria-label="카드 이미지" role="img" src={image} />
        </StyledImageContainer>
        <StyledAdditionalInfo direction={direction}>
          <StyledTitle>{title}</StyledTitle>
          <StyledDescription>{description}</StyledDescription>
        </StyledAdditionalInfo>
        <StyledReviewInfo></StyledReviewInfo>
      </StyledCard>
    );
  }

  const { className, direction, highlightedKeyword, image, label, omittedKeyword, title } = props;
  return (
    <StyledCard className={className} direction={direction}>
      <StyledImageContainer direction={direction}>
        <StyledImage aria-label="카드 이미지" role="img" src={image} />
      </StyledImageContainer>
      <StyledCardInfo>
        <StyledLabel>{label}</StyledLabel>
        <StyledTitle>{title}</StyledTitle>
        <StyledAdditionalInfo direction={direction}>
          <StyledHighlightKeyword>{highlightedKeyword}</StyledHighlightKeyword>
          <StyledOmittedKeyword>{omittedKeyword}</StyledOmittedKeyword>
        </StyledAdditionalInfo>
        <StyledReviewInfo></StyledReviewInfo>
      </StyledCardInfo>
    </StyledCard>
  );
}

const StyledCard = styled.li<{ direction: DIRECTION_TYPE }>`
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  background: #f8f9fb;
  width: 100%;
  border: 0.1rem solid #d9d9d9;
  border-radius: 0.5rem;
  ${({ direction }) =>
    direction === DIRECTION_TYPE.VERTICAL &&
    css`
      -webkit-box-orient: vertical;
      -moz-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
    `};
`;

const StyledImageContainer = styled.div<{ direction: DIRECTION_TYPE }>`
  width: ${({ direction }) => (direction === DIRECTION_TYPE.HORIZONTAL ? '40%' : '100%')};
  overflow: hidden;
`;

const StyledImage = styled.div<{ src: string }>`
  position: relative;
  display: block;
  background: url(${({ src }) => src}) center no-repeat;
  background-size: cover;
  background-position: 50%;
  width: 100%;
  height: auto;

  &::after {
    display: block;
    padding-top: 100%;
    content: '';
  }
`;

const StyledCardInfo = styled.div`
  white-space: nowrap;
  overflow: hidden;
  width: auto;
  padding: 1.5rem;
`;

const StyledAdditionalInfo = styled.div<{ direction: DIRECTION_TYPE }>`
  position: relative;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  white-space: nowrap;
  overflow: hidden;
  width: 100%;
  ${({ direction }) =>
    direction === DIRECTION_TYPE.HORIZONTAL
      ? css`
          -webkit-box-orient: vertical;
          -moz-flex-direction: column;
          -ms-flex-direction: column;
          flex-direction: column;
          padding: 1.5rem;
        `
      : css`
          -webkit-box-align: center;
          -moz-align-items: center;
          -ms-flex-align: center;
          align-items: center;
        `};
`;

const StyledReviewInfo = styled.div``;

const StyledLabel = styled.p`
  color: #999999;
  font-size: 1.4rem;
  margin-bottom: 1rem;
`;

const StyledTitle = styled.p`
  font-size: 1.8rem;
  font-weight: 500;
  text-overflow: ellipsis;
  overflow: hidden;
  margin-bottom: 1rem;
`;

const StyledDescription = styled.span`
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  font-size: 1.3rem;
  width: 100%;
  white-space: pre-line;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`;

const StyledHighlightKeyword = styled.span`
  color: #e24a36;
  font-size: 1.4rem;
  margin-right: 0.5rem;
`;
const StyledOmittedKeyword = styled.del`
  color: #999999;
  font-size: 1.2rem;
`;

export default Card;
