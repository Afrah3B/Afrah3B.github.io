export type ProjectDate = {
  month: string;
  year: string;
};

export type ProjectDateTo = ProjectDate | "present";

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function getMonthIndex(month: string) {
  const parsedMonth = Number.parseInt(month, 10);
  return Number.isFinite(parsedMonth) && parsedMonth >= 1 && parsedMonth <= 12 ? parsedMonth - 1 : 0;
}

function formatProjectDate(date: ProjectDate) {
  const year = date.year.trim();
  const month = date.month.trim();

  if (!year) {
    return "";
  }

  if (!month) {
    return year;
  }

  return `${monthNames[getMonthIndex(month)]} ${year}`;
}

export function formatProjectDateRange(dateFrom: ProjectDate, dateTo?: ProjectDateTo) {
  const from = formatProjectDate(dateFrom);
  const to = dateTo === "present" ? "Present" : dateTo ? formatProjectDate(dateTo) : "";

  return [from, to].filter(Boolean).join(" — ");
}

export function formatProjectYearRange(dateFrom: ProjectDate, dateTo?: ProjectDateTo) {
  const from = dateFrom.year.trim();
  const to = dateTo === "present" ? "Present" : dateTo?.year.trim();

  return [from, to].filter(Boolean).join(" — ");
}

export function getProjectDateValue(date: ProjectDateTo | undefined, fallbackToPresent = false) {
  if (date === "present" || (!date && fallbackToPresent)) {
    return Number.POSITIVE_INFINITY;
  }

  if (!date) {
    return Number.NEGATIVE_INFINITY;
  }

  const year = Number.parseInt(date.year, 10);
  const month = getMonthIndex(date.month);

  if (!Number.isFinite(year)) {
    return Number.NEGATIVE_INFINITY;
  }

  return year * 12 + month;
}

export function compareProjectDateRanges(
  a: { dateFrom: ProjectDate; dateTo?: ProjectDateTo },
  b: { dateFrom: ProjectDate; dateTo?: ProjectDateTo },
) {
  const endDifference = getProjectDateValue(b.dateTo, true) - getProjectDateValue(a.dateTo, true);

  if (endDifference !== 0) {
    return endDifference;
  }

  return getProjectDateValue(b.dateFrom) - getProjectDateValue(a.dateFrom);
}
