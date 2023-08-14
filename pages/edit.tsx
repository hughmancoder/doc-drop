"use client";
import React, { useState } from "react";
import { Button, Flex, HStack, VStack } from "@chakra-ui/react";
import Layout from "./layout";
import HeaderCard from "../archive/HeaderCard";
import ExtractTextFromFile from "../archive/edit/ExtractTextFromFile";
import EditableTable from "../archive/EditableTable";
import { TableRow } from "../Types/InventoryOrder";

const Edit = () => {
  const [tableData, setTableData] = useState<TableRow[]>([]);
  const handleDataChange = (newData: TableRow[]) => {
    setTableData(newData);
  };

  return (
    <Layout>
      <HeaderCard title="Edit" />
      <Flex direction="column" align="center" p={8}>
        <VStack spacing={4}>
          <HStack>
            <ExtractTextFromFile setData={handleDataChange} />
            <Button onClick={() => setTableData([])} variant="ghost">
              Clear
            </Button>
            <Button variant="ghost">Save</Button>
          </HStack>
          <EditableTable tableData={tableData} setData={handleDataChange} />
        </VStack>
      </Flex>
    </Layout>
  );
};

export default Edit;
