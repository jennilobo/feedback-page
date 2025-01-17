import {
  LogoStyle,
  HeaderStyle,
  UnorderedList,
  Wrapper,
  ContentContainer,
  ContainerText,
  TitleStyle,
  StyledP,
  AnchorButtonDiv,
  MainStyle,
  Footer,
} from "./style";

import { NavLinks } from "../../Components/NavLinks";
import logo from "../../assets/images/alunosgrow.png";
import { AnchorButton } from "../../Components/Button";
import { students } from "../../database/Students";
import CreateCards from "../../Components/CreateCards";

export function Home() {
  return (
    <>
      <HeaderStyle>
        <a href="#" rel="noopener noreferrer">
          <LogoStyle src={logo} alt="logo image" />
        </a>
        <UnorderedList>
          <NavLinks anchorName={"About"} link={"#"} />
          <NavLinks anchorName={"Feedback"} link={"#"} />
          <NavLinks anchorName={"Growdev"} link={"#"} />
        </UnorderedList>
      </HeaderStyle>
      <Wrapper>
        <ContentContainer>
          <ContainerText>
            <TitleStyle>
              Bem vindo ao <br></br>{" "}
              <span style={{ color: "#FF8533", fontSize: "35px" }}>
                Feedback
              </span>{" "}
              Grow
            </TitleStyle>
            <StyledP style={{ marginTop: "20px" }}>
              É importante que o feedback seja claro, específico, construtivo e
              objetivo, de modo a ser eficaz e benéfico para quem o recebe.
              Receber feedback de maneira aberta e receptiva também é
              fundamental para o crescimento e o desenvolvimento pessoal e
              profissional.
            </StyledP>
            <AnchorButtonDiv>
              <AnchorButton
                text={"Feedback disponíveis"}
                url={"#"}
                tagColors={{ backgroundColor: "#FF8533", color: "#2b385b" }}
              />
            </AnchorButtonDiv>
          </ContainerText>
        </ContentContainer>
      </Wrapper>
      <MainStyle>
        {students.map((person, index) => (
          <div key={index}>
            <CreateCards {...person}></CreateCards>
          </div>
        ))}
      </MainStyle>
      <Footer>
        <p>© 2023 AlunosGrow. Todos os direitos reservados.</p>
        <p>Contato: alunosgrow@growdev.com</p>
      </Footer>
    </>
  );
}
