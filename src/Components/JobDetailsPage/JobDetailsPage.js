import Container from "../UI/Container";
import CompanyBanner from "./CompanyBanner/CompanyBanner";
import JobDetails from "./JobDetails/JobDetails";
import styles from "./JobDetailsPage.module.css";

export default function JobDetailsPage(props) {
  return (
    <Container>
      <CompanyBanner />
      <JobDetails />
    </Container>
  );
}
