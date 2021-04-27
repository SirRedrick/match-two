import React from 'react';
import PropTypes from 'prop-types';
import CardWrapper from '../presentational/Card/CardWrapper';
import CardInner from '../presentational/Card/CardInner';
import CardFrontWrapper from '../presentational/Card/CardFrontWrapper';
import CardFront from '../presentational/Card/CardFront';
import CardBack from '../presentational/Card/CardBack';

const Card = ({
  face, isChosen, isMatched, onClick,
}) => (
  <CardWrapper onClick={onClick}>
    <CardInner isChosen={isChosen}>
      <CardFrontWrapper>
        <CardFront isMatched={isMatched}>{face}</CardFront>
      </CardFrontWrapper>
      <CardBack />
    </CardInner>
  </CardWrapper>
);

Card.propTypes = {
  face: PropTypes.string.isRequired,
  isChosen: PropTypes.bool.isRequired,
  isMatched: PropTypes.oneOf([null, false, true]).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Card;
