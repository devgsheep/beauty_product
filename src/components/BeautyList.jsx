/* eslint-disable react/prop-types */

import styled from "@emotion/styled";
import React from "react";

const ListCard = styled.div`
  width: 700px;
  padding: 18px 24px;
  margin-bottom: 12px;
  border: 1px solid #eaeaea;
  border-radius: 12px;
  background-color: #fff;
  box-shadow: 0 2px 8px #00000014;
  margin-bottom: 20px;
  &:hover {
    transition:
      box-shadow 0.2s ease,
      transform 0.2s ease;
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
    transform: scale(101%);
  }
`;

const ListItem = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const ListProductImage = styled.img`
  width: 74px;
  height: 74px;
  border-radius: 10px;
  margin-right: 40px;

  border: 1px solid rgb(221, 221, 221);
  background-color: rgb(248, 248, 248);
`;

const ListTextWrap = styled.div`
  flex: 1;
`;

const ListTitle = styled.p`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 5px;
`;

const ListPrice = styled.p`
  color: rgb(233, 30, 99);
  font-weight: 500;
  margin-bottom: 5px;
`;

const ListText = styled.p`
  font-size: 15px;
  color: rgb(85, 85, 85);
  text-align: center;
`;

function BeautyList({ title, price, description, images }) {
  return (
    <ListCard>
      <ListItem>
        <ListProductImage src={images[0]} alt={title}></ListProductImage>
        <ListTextWrap>
          <ListTitle>{title}</ListTitle>
          <ListPrice>${price}</ListPrice>
          <ListText>{description}</ListText>
        </ListTextWrap>
      </ListItem>
    </ListCard>
  );
}

export default BeautyList;
