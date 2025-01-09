import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { SearchManagingBroker } from "./SearchManagingBroker";
import { Box, Stack } from "@mui/material";
import data from "./managinBrokers.json";
import { CreateManagingBrokerModal } from "./CreateManagingBrokerModal";

export type ManagingBrokerType = {
  id: string;
  legalName: string;
  address: string;
  city: string;
  country: string;
};

export function ManagingBroker() {
  const [managingBrokers, setManagingBrokers] =
    useState<ManagingBrokerType[]>(data);
  const [selectedManagingBroker, setSelectedManagingBroker] =
    useState<ManagingBrokerType | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const addManagingBroker = (newManagingBroker: ManagingBrokerType) =>
    setManagingBrokers((prevState) => [...prevState, newManagingBroker]);

  const handleNewManagingBroker = (newManagingBroker: ManagingBrokerType) => {
    addManagingBroker(newManagingBroker);
    setSelectedManagingBroker(newManagingBroker);
  };

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
          <SearchManagingBroker
            managingBrokers={managingBrokers}
            selectedManagingBroker={selectedManagingBroker}
            setSelectedManagingBroker={setSelectedManagingBroker}
            openCreateManagingBrokerModal={openModal}
          />
        </Stack>
        {selectedManagingBroker ? (
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
        ) : null}
      </CardContent>
      <CreateManagingBrokerModal
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        addManagingBroker={handleNewManagingBroker}
      />
    </Card>
  );
}
