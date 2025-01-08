import TextField from "@mui/material/TextField";
import Autocomplete, {
  AutocompleteRenderInputParams,
} from "@mui/material/Autocomplete";
import SearchIcon from "@mui/icons-material/Search";

import Paper from "@mui/material/Paper";
import { Box, Divider, Typography } from "@mui/material";
import { ManagingBrokerType } from "./ManagingBroker";

type SearchManagingBrokerProps = {
  managingBrokers: ManagingBrokerType[];
  selectedManagingBroker: ManagingBrokerType | null;
  setSelectedManagingBroker: (selection: ManagingBrokerType | null) => void;
  openCreateManagingBrokerModal: () => void;
};

export function SearchManagingBroker({
  managingBrokers,
  selectedManagingBroker,
  setSelectedManagingBroker,
  openCreateManagingBrokerModal,
}: SearchManagingBrokerProps) {
  return (
    <Autocomplete
      options={managingBrokers}
      forcePopupIcon={false}
      onChange={(_, value) => setSelectedManagingBroker(value)}
      getOptionLabel={({ legalName, address, city, country }) =>
        `${legalName} - ${address}, ${city} - ${country}`
      }
      slotProps={{
        paper: {
          component: (props) => (
            <Paper>
              {
                <>
                  {props.children}
                  <Divider />
                  <Box padding={2}>
                    or{" "}
                    <Typography
                      sx={{
                        textDecoration: "underline",
                        display: "inline",
                        cursor: "pointer",
                      }}
                      onMouseDown={openCreateManagingBrokerModal}
                    >
                      Add manually
                    </Typography>
                  </Box>
                </>
              }
            </Paper>
          ),
        },
      }}
      renderInput={(params: AutocompleteRenderInputParams) => {
        if (!selectedManagingBroker) {
          params.InputProps.endAdornment = <SearchIcon />;
        }
        return (
          <TextField
            {...params}
            label="Name"
            slotProps={{
              input: {
                ...params.InputProps,
                type: "search",
              },
              inputLabel: {
                shrink: true,
              },
            }}
          />
        );
      }}
    />
  );
}
