import React from "react";
import styled from "styled-components"

const Description = (props) => {
    const AllText = styled.div`
        color: white;
    `;
    const PicName = styled.h2`
        font-size: 16px;
        font-family: "Space Mono";
    `;

    const PicDate = styled.h4`
        font-size: 12px;
        font-family: "Space Mono";
    `;

    const PicDetail = styled.p`
        font-size: 10px;
        text-align: left;
        line-height: 15px;
    `;


    return (
        <AllText>
            <PicName>{props.title}</PicName>
            <PicDate>{props.date}</PicDate>
            <PicDetail>{props.explanation}</PicDetail>
        </AllText>
    )
};

export default Description;