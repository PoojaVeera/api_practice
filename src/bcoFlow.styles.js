import styled from "styled-components";

export const MainContainer = styled.div`
  background: #fafafa;
  border-radius: 0px;
  margin: 0px;
  min-height: 100vh;
  padding-bottom: 20px;
  .k-animation-container {
    width: 100%;
  }
  .k-tabstrip-items {
    font-size: 14px;
    font-weight: 500;
    line-height: 30px;
    letter-spacing: 0px;
    text-align: left;
  }
  .k-table-thead {
    background-color: #f3f3f3;
    padding: 12px 0;
  }
`;
export const TopContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  h5 {
    font-weight: 600;
    margin: 25px 0 20px 20px;
    font-size: 20px;
  }
  h2 {
    font-weight: 600;
    margin: 25px 20px 20px 0px;
    font-size: 18px;
  }
  @media screen and (max-width: 576px) {
    h5 {
      margin: 25px 0 20px 10px;
    }
    h2 {
      margin: 25px 10px 20px 0px;
    }
  }
`;
export const TabView = styled.div`
  .k-tabstrip-items-wrapper .k-item.k-active::after {
    border-color: #169bd5;
  }
  li.k-item.k-active {
    color: #169bd5;
  }
  .k-tabstrip > .k-content {
    padding: 16px 10px;
  }

  @media screen and (max-width: 660px) {
    .k-tabstrip > .k-content {
      padding: 16px 0px;
    }
  }

  span.k-link {
    text-transform: capitalize;
  }
  .k-tabstrip-items .k-link {
    padding: 14px;
  }
`;
export const TabCard = styled.div`
  background: #ffffff;
  border-radius: 10px;
  padding: 20px 30px 10px 30px;
  box-shadow: 2px 2px 2px 2px rgb(0 0 0 / 5%);

  @media screen and (max-width: 576px) {
    padding: 20px 20px;
  }
`;

//common css
export const FlexWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
`;
