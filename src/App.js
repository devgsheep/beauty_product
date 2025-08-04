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
