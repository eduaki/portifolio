import styled from 'styled-components';

export const Container = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  max-width: 1200px;
  margin-top: 30px;
  
  .detail{
    width: 100px;
    height: 4px;
    background-color: #f23f84;
    margin-top: -5px;
    margin-bottom: 3px;
    border-bottom-left-radius: 100%;
    border-top-right-radius: 100%;
  }

  .line2{
    margin: 0px;
    width: 80px;
    height: 3px;
    border-bottom-left-radius: 100%;
  }


  .title{
    align-self: flex-start;
    margin-bottom: 15px;
  }

  .input-wrapper{

    display: flex;
    flex-direction: column;
    align-items: center;

    input{
      background: var(--off_white);
      height: 45px;
      width: 500px;
      margin: 5px;
      padding: 10px;
      border-radius: 15px;
    }

    textarea{
      background: var(--off_white);
      height: 200px;
      width: 500px;
      margin: 5px;
      padding: 10px;
      border-radius: 15px;
    }

    button{
      background: var(--red);
      background: linear-gradient(225deg, var(--red) 26%, #361B71 100%);
      background: -moz-linear-gradient(225deg, var(--red) 26%, #361B71 100%);
      background: -webkit-linear-gradient(225deg, var(--red) 26%, #361B71 100%);

      filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#F23F84", endColorstr="#181F2B", GradientType=1 );

      width: 500px;
      height: 50px;
      margin: 5px;

      border-top-left-radius: 50px;
      border-bottom-left-radius: 5px;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 50px;
    }

  }

`;
