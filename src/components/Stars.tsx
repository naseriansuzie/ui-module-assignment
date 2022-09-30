import React from 'react';
import RateIcon from '@assets/rate_filled.svg';
import { RATINGS } from '@type/index';
import styled from 'styled-components';

interface StarProps {
  className?: string;
  rating: RATINGS;
  reviewer?: string;
}

function Stars({ className, rating, reviewer }: StarProps) {
  return (
    <StyledStars className={className}>
      {new Array(5).fill(0).map((_, index) => (
        <StyledIcon key={index} rated={index <= rating - 1}>
          <RateIcon />
        </StyledIcon>
      ))}
      {reviewer && <StyledText>{reviewer}</StyledText>}
    </StyledStars>
  );
}

const StyledStars = styled.div`
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  overflow: hidden;
`;

const StyledIcon = styled.span<{ rated: boolean }>`
  svg {
    vertical-align: middle;
    zoom: 1.5;
    -ms-zoom: 1.5;

    path {
      ${({ rated }) => !rated && `fill: #eeeeee`};
    }
  }
`;

const StyledText = styled.span`
  color: #999999;
  font-size: 1.4rem;

  &::before {
    margin: 0 0.5rem;
    content: '|';
  }
`;

export default Stars;
