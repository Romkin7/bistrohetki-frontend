export function getGuestsValueText(guests: number) {
  return guests === 0
    ? "0 guests"
    : guests === 1
      ? "1 guest"
      : `${guests} guests`;
}