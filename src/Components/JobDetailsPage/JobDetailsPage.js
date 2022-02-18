import { useParams } from "react-router-dom";
import Container from "../UI/Container";
import CompanyBanner from "./CompanyBanner/CompanyBanner";
import JobApply from "./JobApply/JobApply";
import JobDetails from "./JobDetails/JobDetails";

export default function JobDetailsPage({ jobs }) {
  const { id } = useParams();
  const selectedJobId = Number.parseInt(id, 10);
  const selectedJob = jobs.find((job) => job.id === selectedJobId);

  return (
    <>
      <Container>
        <CompanyBanner job={selectedJob} />
        <JobDetails job={selectedJob} />
      </Container>
      <JobApply job={selectedJob} />
    </>
  );
}
