import React from 'react';
import Stars from '@components/Stars';
import { DIRECTION_TYPE, RATINGS } from '@type/index';
import styled, { css } from 'styled-components';

interface CardProps {
  className?: string;
  direction: DIRECTION_TYPE;
  image: string;
  rating?: RATINGS;
  title: string;
}

interface HorizontalCardProps extends CardProps {
  direction: DIRECTION_TYPE.HORIZONTAL;
  description: string;
  reviewer: string;
}

interface VerticalCardProps extends CardProps {
  direction: DIRECTION_TYPE.VERTICAL;
  description?: string;
  highlightedKeyword: string;
  label: string;
  omittedKeyword: string;
}

function Card(props: HorizontalCardProps | VerticalCardProps) {
  if (props.direction === DIRECTION_TYPE.VERTICAL) {
    const {
      className,
      description,
      direction,
      highlightedKeyword,
      image,
      label,
      omittedKeyword,
      rating,
      title,
    } = props;
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
        </StyledCardInfo>
        {typeof rating === 'number' && (
          <StyledReviewInfo>
            <Stars rating={rating} />
            {description && (
              <StyledDescription direction={direction}>{description}</StyledDescription>
            )}
          </StyledReviewInfo>
        )}
      </StyledCard>
    );
  }

  const { className, description, direction, image, rating, reviewer, title } = props;
  return (
    <StyledCard className={className} direction={direction}>
      <StyledImageContainer direction={direction}>
        <StyledImage aria-label="카드 이미지" role="img" src={image} />
      </StyledImageContainer>
      <StyledAdditionalInfo direction={direction}>
        <StyledTitle>{title}</StyledTitle>
        <StyledDescription direction={direction}>{description}</StyledDescription>
        <StyledRatingInfo>
          {typeof rating === 'number' && <Stars rating={rating} reviewer={reviewer} />}
        </StyledRatingInfo>
      </StyledAdditionalInfo>
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
    direction === DIRECTION_TYPE.HORIZONTAL
      ? css`
          min-width: 55.5rem;
        `
      : css`
          -webkit-box-orient: vertical;
          -moz-flex-direction: column;
          -ms-flex-direction: column;
          flex-direction: column;
          min-width: 19.5rem;
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
          flex: 1;
          -ms-flex: 0 1 auto;
          padding: 0 2rem;
        `
      : css`
          -webkit-box-align: center;
          -moz-align-items: center;
          -ms-flex-align: center;
          align-items: center;
        `};
`;

const StyledReviewInfo = styled.div`
  border-top: 0.1rem solid #d9d9d9;
  padding: 0.5rem 1.5rem;
`;

const StyledRatingInfo = styled.div`
  position: absolute;
  bottom: 1rem;
`;

const StyledLabel = styled.p`
  color: #999999;
  font-size: 1.4rem;
  margin-bottom: 1rem;
`;

const StyledTitle = styled.p`
  font-size: 2rem;
  font-weight: 500;
  text-overflow: ellipsis;
  overflow: hidden;
  margin: 1.5rem 0 1.8rem;
`;

const StyledDescription = styled.div<{ direction: DIRECTION_TYPE }>`
  position: relative;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  color: #999999;
  font-size: 1.6rem;
  line-height: 1.7;
  width: 100%;
  height: calc(2rem * ${({ direction }) => (direction === DIRECTION_TYPE.HORIZONTAL ? 4 : 1)});
  white-space: pre-line;
  text-overflow: ellipsis;
  word-break: break-all;
  overflow: hidden;
  -webkit-box-orient: vertical;
  ${({ direction }) => direction === DIRECTION_TYPE.VERTICAL && `margin-top: 0.3rem;`};

  &::after {
    position: absolute;
    display: block;
    bottom: 0;
    right: 0;
    background: #f8f9fb;
    width: 5%;
    height: calc(1.7 * 1em);
    text-align: right;
    content: '...';
  }

  @supports (-webkit-line-clamp: 1) {
    height: auto;
    -webkit-line-clamp: ${({ direction }) => (direction === DIRECTION_TYPE.HORIZONTAL ? 4 : 1)};
    padding-right: 0;

    ::after {
      display: none !important;
    }
  }
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
