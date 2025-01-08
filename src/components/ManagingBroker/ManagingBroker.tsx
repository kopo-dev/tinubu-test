import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { NameSearchBar } from "./NameSearchBar";
import { Box, Stack } from "@mui/material";
import data from "./exampleData.json";
import { useState } from "react";

export type ManagingBrokerType = {
  id: string;
  legalName?: string;
  address?: string;
  city?: string;
  country?: string;
};

const managingBrokers: ManagingBrokerType[] = data.managingBrokers;

export function ManagingBroker() {
  const [selectedManagingBroker, setSelectedManagingBroker] =
    useState<ManagingBrokerType | null>(null);
  return (
    <Card>
      <CardContent>
        <Stack spacing={3}>
          <Box>
            <Typography variant="h5">Managing Broker</Typography>
            <Typography
              gutterBottom
              variant="body2"
              sx={{ color: "text.secondary" }}
            >
              Managing Brokers are a widespread group of squamate reptiles, with
              over 6,000 species, ranging across all continents except
              Antarctica
            </Typography>
          </Box>
          <NameSearchBar
            managingBrokers={managingBrokers}
            selectedManagingBroker={selectedManagingBroker}
            setSelectedManagingBroker={setSelectedManagingBroker}
            openCreateManagingBrokerModal={() => {}}
          />
        </Stack>
      </CardContent>
    </Card>
  );
}
