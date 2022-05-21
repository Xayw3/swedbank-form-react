import { FC } from 'react';
import './summary-page.scss';

type SummaryPageProps = {
    fullName: string,
    gender: string,
    email: string,
    phone: string,
    select: string,
    message: string,
}

const SummaryPage: FC<SummaryPageProps> = ({
  fullName, gender, email, phone, select, message,
}) => (
  <div>
    <div>
      <p>{fullName}</p>
      <p>{gender}</p>
    </div>
    <div>
      <p>{email}</p>
      <p>{phone}</p>
    </div>
    <div>
      <p>{select}</p>
    </div>
    <div>
      <p>{message}</p>
    </div>
  </div>
);

export default SummaryPage;
