import { useTranslator } from "@/hooks/useTranslator";

export function useGetGuestsValueText(guests: number): string {
  const t = useTranslator();
  switch (guests) {
    case 1:
      return t("tableBooking", "number_of_guests_input_value", { guests: 1 });
    default:
      return t("tableBooking", "number_of_guests_input_value_plural", {
        guests,
      });
  }
}
