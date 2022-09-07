import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import "./LevelTable.css";
// https://www.npmjs.com/package/react-super-responsive-table
import { useTranslation } from "react-i18next";

const LevelTable = ({ data }) => {
  const { t } = useTranslation();

  return (
    <div className="w-80 bg-white mb2">
      <Table>
        <Thead>
          <Tr className="white bg-mid-gray">
            <Th>{t("table.type")}</Th>
            <Th>{t("table.low")}</Th>
            <Th>{t("table.medium")}</Th>
            <Th>{t("table.high")}</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((item, index) => {
            return (
              <Tr className="" key={item.Type}>
                <Td>
                  <span role="img" aria-label={item.Type} className="pr2">
                    {item.icon}
                  </span>
                  {item.Type}
                </Td>
                <Td>{item.Low}</Td>
                <Td>{item.Medium}</Td>
                <Td>{item.High}</Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </div>
  );
};

export default LevelTable;
