import { createGlobalStyle } from "styled-components";

export const Style = createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html{
  color: var(--off_white);
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

  background: hsla(218, 28%, 13%, 1);

  background: linear-gradient(90deg, #0F326F 0%, hsla(218, 28%, 13%, 1)  100%);

  background: -moz-linear-gradient(90deg, #0F326F 0%, hsla(218, 28%, 13%, 1)  100%);

  background: -webkit-linear-gradient(90deg, #0F326F 0%, hsla(218, 28%, 13%, 1)  100%);

  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#181F2B", endColorstr="#0B3A8B", GradientType=1 );
}

*, li, ul, a{
  list-style: none;
  text-decoration: none;
}

*, button, input{
  border: none;
  outline: none;
  background-color: transparent;
}

:root{
  --primary: #181f2b;
  --secondary: #2d384a;
  --off_white: #f2f2f2;
  --white: #fff;
}

`
