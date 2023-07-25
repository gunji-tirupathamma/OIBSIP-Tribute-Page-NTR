import React from 'react'
import './App.css';
import { TributePage,
         TopContainer,
         Image,
         DescriptionContainer,
         Heading,
         Description,
         AboutContainer,
         SideHeadings,
         HRLine,
         TableWrapper,
         TableRow,
         TableCell,
         Awardsheading,
         Slogan,
         AncherEle
        } from './styledComponents';

function App() {
  return (
    <div className="App">
      <TributePage>
          <TopContainer>
            <Image src="https://res.cloudinary.com/vinaypuppal/image/upload/v1460024151/timthumb.php_dxksxe.jpg" alt="ntr-image"/>
            <DescriptionContainer>
                <Heading>Nandhamuri Tharaka Ramarao</Heading>
                <Description>Nandamuri Taraka Rama Rao (28 May 1923 – 18 January 1996), often referred to by his initials NTR, was an Indian actor, filmmaker and politician who served as Chief Minister of Andhra Pradesh for seven years over three terms.</Description>
            </DescriptionContainer>
          </TopContainer>
          <AboutContainer>
            <SideHeadings>Early Life and Education</SideHeadings>
            <HRLine />
            <DescriptionContainer>
              <Description>1.Nandamuri Taraka Rama Rao was born in a Hindu agrarian family on 28 May 1923 in Nimmakuru, a small village in Gudivada taluk of Krishna district, which was a part of the erstwhile Madras Presidency of British India.</Description>
              <Description>2.He was given in adoption to his paternal uncle because his uncle and aunt were childless</Description>
              <Description>3.The first male child in the family, his father sent him to Vijayawada, where he continued his education, matriculating in 1940 before studying at SRR & CVR College and at the Andhra Christian College in Guntur.</Description>
              <Description>4.In 1947, he joined the Madras Service Commission as a sub-registrar at Prathipadu of Guntur district.</Description>
            </DescriptionContainer>

            <SideHeadings>Personal Life</SideHeadings>
            <HRLine />
            <DescriptionContainer>
              <Description>1.In May 1943, at the age of 20, while still pursuing his Intermediate, Rao was married to Smt. Basava Rama Tarakam, the daughter of his maternal uncle.</Description>
              <Description>2.The marriage was blessed with twelve children; including eight sons and four daughters, namely: Ramakrishna Sr., Jayakrishna, Saikrishna, Harikrishna, Mohanakrishna, Balakrishna, Ramakrishna Jr., Jayashankarakrishna, Garapati Lokeswari (daughter), Daggubati Purandeswari (daughter), Nara Bhuvaneswari (daughter), and Kantamaneni Umamaheswari (daughter).</Description>
              <Description>3.Smt. Basava Tarakam died of cancer in 1985. In her memory, Rao established the Basavatarakam Indo-American Cancer Hospital in Hyderabad in 1986.</Description>
              <Description>4.In 1993, NTR married Lakshmi Parvathi, a Telugu writer. The marriage was childless and lasted until NTR's death less than three years later.</Description>
            </DescriptionContainer>

            <SideHeadings>Film Career</SideHeadings>
            <HRLine />
            <DescriptionContainer>
              <Description>1.IRama Rao started his film career with a walk-on role as a policeman in Mana Desam (1949).</Description>
              <Description>2.His first mythological film was in 1957, where he portrayed the Hindu god Krishna in the blockbuster film Maya Bazaar. He played Krishna in 17 films, including some landmark films such as Sri Krishnarjuna Yudham (1962), the Tamil film Karnan (1964) and Daana Veera Soora Karna (1977). </Description>
              <Description>3.At the age of 40, he learnt dance from the renowned Kuchipudi dancer Vempati Chinna Satyam for his role in the film Nartanasala (1963).</Description>
              <Description>4. His last film was Srinatha Kavi Sarvabhowmudu, a biopic on the Telugu poet Srinatha, which released in 1993.</Description>
              <Description>5.In the later half of his career, Rao became a screenwriter. Despite having no formal training in scriptwriting, he authored several screenplays for his own movies as well as for other producers.</Description>
            </DescriptionContainer>

            <SideHeadings>Political Career</SideHeadings>
            <HRLine />
            <DescriptionContainer>
              <Description>1.The Telugu Desam Party is an Indian regional political party with great influence in the states of Andhra Pradesh and Telangana. It was founded by the former chief minister of Andhra Pradesh N. T. Rama Rao on 29 March 1982 and has focused on supporting Telugu speakers. </Description>
              <Description>2.In the 1983 Andhra Pradesh Legislative Assembly election, TDP won by an absolute majority winning 202 out of the 294 seats in the state assembly, with Rao himself winning both the seats he contested.</Description>
              <Description>3.On 15 August 1984, Rao was removed from office by the then Governor of Andhra Pradesh Thakur Ram Lal, while Rao was in the US to undergo open heart surgery. His finance minister, Nadendla Bhaskara Rao, a former Congressman, was made the Chief Minister by the Governor Thakur Ram Lal.</Description>
              <Description>4.Rao returned to power for a third and final time in the December 1994 state assembly elections with his party in alliance with the Left Front. This alliance won 269 seats in the 294 seat Assembly, with the TDP alone winning 226</Description>
            </DescriptionContainer>

            <SideHeadings>Awards & Honours</SideHeadings>
            <HRLine />
            <Awardsheading>Honours :</Awardsheading>
            <TableWrapper>
              <thead>
                <tr>
                  <TableCell>Year</TableCell>
                  <TableCell>Award</TableCell>
                  <TableCell>Honouring body</TableCell>                  
                </tr>
              </thead>
              <tbody>
                <TableRow>
                  <TableCell>1968</TableCell>
                  <TableCell>Padma Shri</TableCell>
                  <TableCell>Government of India</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>1978</TableCell>
                  <TableCell>Honorary Doctorate</TableCell>
                  <TableCell>Andhra University</TableCell>
                </TableRow>
              </tbody>
            </TableWrapper>

            <Awardsheading>Film Awards :</Awardsheading>
            <TableWrapper>
              <thead>
                <tr>
                  <TableCell>Year</TableCell>
                  <TableCell>Award</TableCell>
                  <TableCell>Category</TableCell> 
                  <TableCell>Film</TableCell>                  
                </tr>
              </thead>
              <tbody>
                <TableRow>
                  <TableCell>1972</TableCell>
                  <TableCell>Filmfare Awards South</TableCell>
                  <TableCell>Best Actor – Telugu</TableCell>
                  <TableCell>Badi Panthulu</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>1974</TableCell>
                  <TableCell>Nandi Awards</TableCell>
                  <TableCell>Best Story Writer</TableCell>
                  <TableCell>Tatamma Kala</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>1974</TableCell>
                  <TableCell>National Film Awards</TableCell>
                  <TableCell>director — National Art Theater</TableCell>
                  <TableCell>Varakatnam</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>1954</TableCell>
                  <TableCell>National Film Awards</TableCell>
                  <TableCell>director — National Art Theater</TableCell>
                  <TableCell>Thodu Dongalu</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>1960</TableCell>
                  <TableCell>National Film Awards</TableCell>
                  <TableCell>producer — National Art Theater</TableCell>
                  <TableCell>Sita Rama Kalyanam</TableCell>
                </TableRow>
              </tbody>
            </TableWrapper>

            <SideHeadings>Death</SideHeadings>
            <HRLine />
            <Description>N T Rama Rao died of a heart attack on 18 January 1996 at his residence in Hyderabad, aged 72. He was cremated and his ashes were immersed at Srirangapatna by his second wife Lakshmi Parvathi, eight years later, in May 2004.</Description>
          </AboutContainer>

          <Description>
            Know More about <AncherEle href="https://en.wikipedia.org/wiki/N._T._Rama_Rao">Wikipedia</AncherEle>
          </Description>

          <Slogan>
            '' What is destnied to happen will happen.<br/>
               Victory and defeat are like light and darkness ''
          </Slogan>

          <Description >* * * * * * * * *</Description>
      </TributePage>
    </div>
  );
}

export default App;
