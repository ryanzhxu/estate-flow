import jsPDF from 'jspdf';
import { getConvertedDate, getFormattedPhoneNum } from './Helpers';

export const handleDownloadLeasePdf = (tenant) => {
  const { address, lease } = tenant;

  const doc = new jsPDF({
    orientation: `portrait`,
    unit: `in`,
    format: `letter`,
  });

  const lineHeight = 0.25;
  let yPosition = 1;

  doc.setFont(`Helvetica`, `bold`);
  doc.setFontSize(15);
  doc.text(`Tenancy Agreement`, doc.internal.pageSize.width / 2, yPosition, {
    align: `center`,
  });

  yPosition += 2 * lineHeight;

  doc.setFont(`Helvetica`, `bold`);
  doc.setFontSize(13);
  doc.text(`TENANCY AGREEMENT between:`, 1, yPosition);

  yPosition += 1.5 * lineHeight;

  doc.setFont(`Helvetica`, `normal`);
  doc.setFontSize(12);
  doc.text(`Estate Flow`, 1, yPosition);
  doc.text(`and the TENANT(s):`, 1, yPosition + 2 * lineHeight);

  doc.text(`Name: ${tenant.firstName} ${tenant.lastName}`, 1, yPosition + 4 * lineHeight);
  doc.text(`Phone number: ${getFormattedPhoneNum(tenant.phoneNumber)}`, 1, yPosition + 5 * lineHeight);
  doc.text(`Email: ${tenant.email}`, 1, yPosition + 6 * lineHeight);
  doc.text(`Date of Birth: ${getConvertedDate(tenant.birthDate)}`, 1, yPosition + 7 * lineHeight);
  doc.text(`Employment: ${tenant.occupation}`, 1, yPosition + 8 * lineHeight);

  yPosition += 11 * lineHeight;

  doc.setFont(`Helvetica`, `bold`);
  doc.setFontSize(13);
  doc.text(`Term of Agreement`, 1, yPosition);

  yPosition += lineHeight;

  doc.setFont(`Helvetica`, `normal`);
  doc.setFontSize(12);

  doc.text(`Start date: ${getConvertedDate(lease.startDate)}`, 1, yPosition + lineHeight);
  doc.text(`End date: ${getConvertedDate(lease.endDate)}`, 1, yPosition + 2 * lineHeight);
  doc.text(`Lease type: ${lease.leaseType}`, 1, yPosition + 3 * lineHeight);

  const rentFee = lease.fees.find((fee) => fee.feesType === 'Rent');
  doc.text(`Rent: $${rentFee ? rentFee.amount : 'Not provided'}`, 1, yPosition + 4 * lineHeight);

  yPosition += 7 * lineHeight;

  doc.setFont(`Helvetica`, `bold`);
  doc.setFontSize(12);
  doc.text(`ADDRESS OF PLACE BEING RENTED TO TENANT(s):`, 1, yPosition);

  yPosition += 1.25 * lineHeight;

  doc.setFont(`Helvetica`, `normal`);
  doc.setFontSize(12);
  doc.text(
    `${address.streetAddress} ${address.city}, ${address.province} ${address.postalCode}`,
    1,
    yPosition + lineHeight
  );

  yPosition += 3.5 * lineHeight;

  doc.setFont(`Helvetica`, `bold`);
  doc.setFontSize(13);
  doc.text(`By signing this tenancy agreement, the landlord and the tenant(s) are bound \nby its terms:`, 1, yPosition);

  yPosition += 1.25 * lineHeight;
  doc.setFont(`Helvetica`, `normal`);
  doc.setFontSize(12);

  doc.text(`Landlord: `, 1, yPosition + 3 * lineHeight);
  doc.setLineWidth(0.01);
  doc.line(1.75, 3.5 * lineHeight + yPosition + 0.05, 3.75, 3.5 * lineHeight + yPosition + 0.05);

  doc.text(`Tenant: `, 4.5, yPosition + 3 * lineHeight);
  doc.setLineWidth(0.01);
  doc.line(5.25, 3.5 * lineHeight + yPosition + 0.05, 7.25, 3.5 * lineHeight + yPosition + 0.05);

  doc.save(`tenant_${tenant._id}_lease_agreement.pdf`);
};
