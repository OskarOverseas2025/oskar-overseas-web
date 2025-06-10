import { Body, Column, Container, Head, Heading, Hr, Html, Img, Link, Preview, Row, Section, Text } from "@react-email/components";

export interface ContactMsgEmailProps {
  name: string;
  email: string;
  phone: string;
  inquiryType: string;
  country?: string;
  experience?: string;
  message: string;
}

export default function ContactMsgEmail({ name, email, phone, inquiryType, country, experience, message }: ContactMsgEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Oskar Website Message</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={coverSection}>
            <Section style={imageSection}>
              <Row>
                {/* <Column>
                  <Img
                    src={""}
                    width="75"
                    height="45"
                    alt="TOskar Logo"
                  />
                </Column> */}
                <Column>
                  <Text style={h1}>Oskar Overseas Pvt. Ltd</Text>
                </Column>
              </Row>
            </Section>
            <Section style={upperSection}>
              <Heading style={h1}>Message From Website</Heading>
              <Text style={boldText}>Subject : </Text>
              <Text style={mainText}>{inquiryType}</Text>
              <Text style={boldText}>Name : </Text>
              <Text style={mainText}>{name}</Text>
              <Text style={boldText}>Email : </Text>
              <Text style={mainText}>{email}</Text>
              <Text style={boldText}>Phone : </Text>
              <Text style={mainText}>{phone}</Text>
              {inquiryType === "job-seeker" && (
                <>
                  <Text style={boldText}>Country : </Text>
                  <Text style={mainText}>{country}</Text>
                  <Text style={boldText}>Experience : </Text>
                  <Text style={mainText}>{experience}</Text>
                </>
              )}
              <Text style={boldText}>Message :</Text>
              <Text style={mainText}>{message}</Text>
            </Section>
          </Section>
          <Hr />
          <Text style={footerText}>
            This message was produced and distributed by the Contact page of the website of Oskar Overseas Pvt. Ltd.{" "}
            <Link href="https://oskaroverseas.com" target="_blank" style={link}>
              oskaroverseas.com
            </Link>
            .
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: "#fff",
  color: "#212121",
};

const container = {
  padding: "20px",
  margin: "0 auto",
  backgroundColor: "#eee",
};

const h1 = {
  color: "#4f9e77",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "20px",
  fontWeight: "bold",
  marginBottom: "15px",
  paddingLeft: "20px",
  textAlign: "center" as const,
};

const link = {
  color: "#2754C5",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "14px",
  textDecoration: "underline",
};

const text = {
  color: "#333",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "14px",
  margin: "24px 0",
};

const imageSection = {
  backgroundColor: "#d4cfcf",
  padding: "20px 50px",
  display: "flex",
  flex: "1",
  alignItems: "center",
  justifyContent: "center",
};

const coverSection = { backgroundColor: "#fff" };

const upperSection = { padding: "25px 35px" };

const lowerSection = { padding: "25px 35px" };

const footerText = {
  ...text,
  fontSize: "12px",
  padding: "0 20px",
};

const boldText = {
  ...text,
  margin: 0,
  fontWeight: "bold",
  textAlign: "left" as const,
};

const mainText = { ...text, marginBottom: "12px", marginTop: "5px" };

const cautionText = { ...text, margin: "0px" };
