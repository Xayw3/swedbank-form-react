import { FC } from 'react';
import './summary-page.scss';

type SummaryPageProps = {
    fullName: string,
    gender: string,
    email: string,
    phone: string,
    select: string,
    message: string,
    signEmail?: any,
    signPhone?: any
}

const SummaryPage: FC<SummaryPageProps> = ({
  fullName, gender, email, phone, select, message, signEmail, signPhone,
}) => (
  <div className="summary">
    <div className="summary-block">
      <h2 className="summary-title">
        Personal information
      </h2>
      <p>{`Full name: ${fullName}`}</p>
      <p>{`Gender: ${gender}`}</p>
    </div>
    <div className="summary-block">
      <h2 className="summary-title">
        Contact information
      </h2>
      <p>{`Email adress: ${email}`}</p>
      <p>{signEmail}</p>
      <p>{`Phone number: ${phone}`}</p>
      <p>{signPhone}</p>
    </div>
    <div className="summary-block">
      <h2 className="summary-title">
        Payment method
      </h2>
      <p>{select}</p>
    </div>
    <div className="summary-block">
      <h2 className="summary-title">
        Details
      </h2>
      <p>{`Details: ${message}`}</p>
    </div>
  </div>
);

export default SummaryPage;
