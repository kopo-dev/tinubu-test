import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { SearchManagingBroker } from "./SearchManagingBroker";
import { Box, Stack } from "@mui/material";
import data from "./managinBrokers.json";
import { useState } from "react";
import { CreateManagingBrokerModal } from "./CreateManagingBrokerModal";

export type ManagingBrokerType = {
  id: string;
  legalName?: string;
  address?: string;
  city?: string;
  country?: string;
};

export function ManagingBroker() {
  const [managingBrokers, setManagingBrokers] =
    useState<ManagingBrokerType[]>(data);
  const [selectedManagingBroker, setSelectedManagingBroker] =
    useState<ManagingBrokerType | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpen = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleNewManagingBroker = (newManagingBroker: ManagingBrokerType) => {
    addManagingBroker(newManagingBroker);
    setSelectedManagingBroker(newManagingBroker);
  };

  const addManagingBroker = (newManagingBroker: ManagingBrokerType) =>
    setManagingBrokers((prevState) => [...prevState, newManagingBroker]);

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
          {selectedManagingBroker && (
            <>
              <Box>
                <Typography variant={"caption"}>Address</Typography>
                <Typography>{`${selectedManagingBroker?.address}, ${selectedManagingBroker?.city}`}</Typography>
              </Box>
              <Box>
                <Typography variant={"caption"}>Country</Typography>
                <Typography>{`${selectedManagingBroker?.country}`}</Typography>
              </Box>
            </>
          )}
        </CardContent>
        <CreateManagingBrokerModal
          isModalOpen={isModalOpen}
          closeModal={closeModal}
          addManagingBroker={handleNewManagingBroker}
        />
      </Card>
    </>
  );
}
