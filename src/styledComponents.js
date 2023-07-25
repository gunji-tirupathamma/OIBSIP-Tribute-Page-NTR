import styled from 'styled-components'

export const TributePage=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;    
    background-image: url("https://img.freepik.com/free-vector/polygonal-background_53876-60251.jpg?w=740&t=st=1690045886~exp=1690046486~hmac=41310f22d83d7f0efae32e5e117d116e3cbe3a909f8ffd67a1c85c157668d2af");
    background-size: cover;    
    
    padding: 10px;
    @media screen and (min-width: 767px){
      width: 80%;
    }
`

export const TopContainer=styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    @media screen and (min-width: 767px){
        flex-direction: row;        
        width: 60%;
        margin-top: 20px
        
    }

`

export const Image=styled.img`
 height: 150px;
 width: 150px;
 border-radius: 50%;
 align-self: center;
 margin: 10px;
 @media screen and (min-width: 767px){
    height: 250px;
    width: 250px;
    margin-right: 30px;
}
 
`

export const DescriptionContainer=styled.div`
 display:flex;
 flex-direction: column;
 margin-left: 20px;
`

export const Heading=styled.h1`
 font-size: 25px;
 font-weight: bold;
 font-family: Roboto;
 color: #024866;
 @media screen and (min-width: 767px){
  font-size: 30px;
}

`

export const Description=styled.p`
    font-size: 15px;
    margin:-bottom: 0px;
    color: #001700;
    @media screen and (min-width: 767px){
      font-size: 17px;
    }
`

export const AboutContainer=styled.div`
display: flex;
flex-direction: column;
justify-content: start;
width: 90%;
`

export const HRLine = styled.hr`
  display: none;
  border: 1px solid black;
  width: 20%;
  @media screen and (min-width: 767px){
    display: block;
  }
  
`  

export const SideHeadings=styled.h2`
font-size: 22px;
font-weight: bold;
font-family: italic;
margin-bottom: 0px;
color: #024866;
@media screen and (min-width: 767px){
    align-self: center;
    font-size: 25px;
}
`

export const TableWrapper = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 5px;
`;

export const TableRow = styled.tr`
  /* Add any styles for table rows */
`;

export const TableCell = styled.td`
border: 1px solid #000;
padding: 8px;

`;

export const Awardsheading=styled.h4`
font-size: 22px;
font-weight: bold;
font-family: italic;

`

export const Slogan=styled.b`
font-size: 19px;
color: #454544;
margin-top: 30px;
font-family: cursive,"Times New Roman",serif; 
`

export const AncherEle=styled.a`
font-size: 16px;
font-weight: bold;
color:blue;
`