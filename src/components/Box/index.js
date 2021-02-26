import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  BoxContainer,
  BoxWrapper,
  BoxImg,
  BoxTitle,
  BoxSubTitle,
  BoxHeader,
  BoxText,
  BoxUniversity,
} from "./BoxElement";
const Box = () => {
  let [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://tcas-assets.skooldio.com/tmp/mock_tcaster_api.json")
      .then((response) => setData(response.data));
  }, []);
  return (
    <>
      {data.map((data) => (
        <BoxContainer key={data.id}>
          <BoxWrapper>
            <BoxHeader>
              <BoxImg src={data.logo} />
              <BoxText>
                <BoxTitle>{data.faculty.name}</BoxTitle>
                <BoxSubTitle>{data.name}</BoxSubTitle>
                <BoxUniversity>{data.faculty.university.name}</BoxUniversity>
              </BoxText>
            </BoxHeader>
          </BoxWrapper>
        </BoxContainer>
      ))}
    </>
  );
};

export default Box;
