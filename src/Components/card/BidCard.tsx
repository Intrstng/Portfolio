import React from 'react';
import {Button} from "../button/Button";
import styled from "styled-components";
import {FlexWrapper} from "../FlexWrapper";
import {myTheme} from "../../styles/Theme.styled";
import {Link} from "../link/Link.styled";

export const BidCard = () => {
    return (
        <StyledBidCard direction={'column'}
                       align={'center'}>
            <StyledBidBlock justify={'space-between'}
                            align={'flex-start'}>
                <div>
                    <h4>Ends in</h4>
                    <p>05:45:47</p>
                </div>

                <div>
                    <h4>Current bid</h4>
                    <p>0.24ETH</p>
                </div>
            </StyledBidBlock>
            <Button className={'placeBid'}
                    btnType={'outlined'}>Place A Bid</Button>
        </StyledBidCard>
    );
};

const StyledBidCard = styled(FlexWrapper)`
  width: 30.4rem;
  padding: 2rem;
  gap: 2.4rem;
  border-radius: 1.6rem;
  border-top: 1px solid ${myTheme.colors.secondary};
  background: ${myTheme.colors.bground};
  box-shadow: 0px 9px 50px 0px ${myTheme.colors.shadow};
  ${Button} {
    width: 100%;
    font-family: Inter, sans-serif;
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 120%;
  }
`

const StyledBidBlock = styled(FlexWrapper)`
  width: 100%;
  h4 {
    margin-bottom: 0.8rem;
    color: ${myTheme.colors.secondary};
    font-family: Inter, sans-serif;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 160%;
  }
  p {
    color: ${myTheme.colors.primary};
    font-family: Inter, sans-serif;
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 120%;
  }

`