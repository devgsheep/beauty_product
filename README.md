# Beauty_Product

<img width="941" height="538" alt="Image" src="https://github.com/user-attachments/assets/44fa7146-5338-4432-8623-21b8cf0cdd37" />

## App.js

```js
import React, { useEffect, useState } from "react";
import { getBeauty } from "./apis/beautyApi";
import styled from "@emotion/styled";
import BeautyList from "./components/BeautyList";

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  background-color: #fff;
  padding: 18px 0 10px;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 8px;
  flex-direction: column;
`;

const HeaderTitle = styled.h3`
  margin-bottom: 5px;
  font-size: 21px;
`;

const HeaderText = styled.p`
  font-size: 16px;
  color: rgb(136, 136, 136);
`;

const Main = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

function App() {
  // js자리
  const [beautyData, setBeautyData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getBeauty();
      if (data && data.products) {
        setBeautyData(data.products);
      }
    };
    fetchData();
  }, []);
  // jsx자리
  return (
    <div>
      <Header>
        <HeaderTitle>Beauty Product List</HeaderTitle>
        <HeaderText>다양한 뷰티 제품을 한눈에 확인하세요</HeaderText>
        <HeaderText>https://dummyjson.com/products API 사용 예제</HeaderText>
      </Header>
      <Main>
        {beautyData.map(function (item, index) {
          return (
            <BeautyList
              title={item.title}
              price={item.price}
              description={item.description}
              images={item.images}
              key={index}
            ></BeautyList>
          );
        })}
      </Main>
    </div>
  );
}

export default App;
```

## BeautyList.jsx

```jsx
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
```

## beautyApi.js

```js
import axios from "axios";

export const beautyUrl = "https://dummyjson.com/products";
export const getBeauty = async () => {
  try {
    const res = await axios.get(beautyUrl);
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
```
