import type { FC } from "react";
import { useLoaderData } from "react-router";
import { useGetGuestsValueText } from "@/hooks/useGetGuestsValueText";
import Link from "@/shared/Link/Link";
import Menu from "@/shared/Menu/Menu";
import Paragraph from "@/shared/Paragraph/Paragraph";
import {
  tableBookingNavigationSchema,
  type TableBookingNavigationProps,
} from "@/zod/businessLogic/tableBookingNavigation";
import type { TableBookingPageData } from "@/zod/pages/tableBookingPageData";

const TableBookingNavigation: FC<TableBookingNavigationProps> = (props) => {
  const tableBookingPageData = useLoaderData() as TableBookingPageData;
  const MenuData = tableBookingPageData.Menu;
  const { guests } = tableBookingNavigationSchema.parse(props);
  const guestsValueText = useGetGuestsValueText(guests);
  return (
    <Menu ariaLabel={MenuData.ariaLabel}>
      <Link
        variant={MenuData.MenuLink.variant}
        href={MenuData.MenuLink.href}
        color="dark"
      >
        {MenuData.MenuLink.content}
      </Link>

      <Paragraph variant="body" color="dark">
        {guestsValueText}
      </Paragraph>
    </Menu>
  );
};
export default TableBookingNavigation;
