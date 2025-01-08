import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { SearchManagingBroker } from "./SearchManagingBroker";
import { Box, Stack } from "@mui/material";
import data from "./exampleData.json";
import { useState } from "react";
import { CreateManagingBrokerModal } from "./CreateManagingBrokerModal";

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpen = () => setIsModalOpen(true);
  const handleClose = () => setIsModalOpen(false);
  return (
    <>
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
                Managing Brokers are a widespread group of squamate reptiles,
                with over 6,000 species, ranging across all continents except
                Antarctica
              </Typography>
            </Box>
            <SearchManagingBroker
              managingBrokers={managingBrokers}
              selectedManagingBroker={selectedManagingBroker}
              setSelectedManagingBroker={setSelectedManagingBroker}
              openCreateManagingBrokerModal={handleOpen}
            />
          </Stack>
        </CardContent>
        <CreateManagingBrokerModal
          isModalOpen={isModalOpen}
          handleClose={handleClose}
        />
      </Card>
    </>
  );
}
