import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { ManagingBrokerType } from "./ManagingBroker";

type CreateManagingBrokerModalFormInput = {
  legalName: string;
  address: string;
  city: string;
  country: string;
};

type CreateManagingBrokerModalProps = {
  isModalOpen: boolean;
  closeModal: () => void;
  addManagingBroker: (newManagingBroker: ManagingBrokerType) => void;
};

const textFieldProps: Partial<TextFieldProps> = {
  fullWidth: true,
  margin: "dense",
  variant: "outlined",
  slotProps: {
    inputLabel: {
      shrink: true,
    },
  },
};

export function CreateManagingBrokerModal({
  isModalOpen,
  closeModal,
  addManagingBroker,
}: CreateManagingBrokerModalProps) {
  const {
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      legalName: "",
      address: "",
      city: "",
      country: "",
    },
  });

  const handleClose = () => {
    closeModal();
    reset();
  };

  const onSubmit: SubmitHandler<CreateManagingBrokerModalFormInput> = (
    data
  ) => {
    addManagingBroker({ ...data, id: crypto.randomUUID() });
    handleClose();
  };

  return (
    <Dialog
      open={isModalOpen}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      maxWidth="md"
      fullWidth
    >
      <DialogTitle id="alert-dialog-title">Add Manually</DialogTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogContent>
          <Controller
            name="legalName"
            control={control}
            render={({ field }) => (
              <TextField
                {...textFieldProps}
                {...field}
                label="Legal Name"
                error={!!errors.legalName}
                helperText={errors.legalName?.message}
              />
            )}
            rules={{ required: "Legal Name is required" }}
          />
          <Controller
            name="address"
            control={control}
            render={({ field }) => (
              <TextField
                {...textFieldProps}
                {...field}
                label="Address"
                error={!!errors.address}
                helperText={errors.address?.message}
              />
            )}
            rules={{ required: "Address is required" }}
          />
          <Controller
            name="city"
            control={control}
            render={({ field }) => (
              <TextField
                {...textFieldProps}
                {...field}
                label="City"
                error={!!errors.city}
                helperText={errors.city?.message}
              />
            )}
            rules={{ required: "City is required" }}
          />
          <Controller
            name="country"
            control={control}
            render={({ field }) => (
              <TextField
                {...textFieldProps}
                {...field}
                label="Country"
                error={!!errors.country}
                helperText={errors.country?.message}
              />
            )}
            rules={{ required: "Country is required" }}
          />
        </DialogContent>
        <DialogActions sx={{ p: 3, pt: 0 }}>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            onClick={handleSubmit(onSubmit)}
            autoFocus
            variant="contained"
            type="submit"
          >
            Save
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
