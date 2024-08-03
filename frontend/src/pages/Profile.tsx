import {
  Button,
  Card,
  CardActions,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useUserStore } from "../stores/userStore";
import useSnackbar from "../hooks/useSnackbar";
import { useState } from "react";
import { grey, indigo } from "@mui/material/colors";
import Loader from "../components/util/Loader";

const Profile: React.FC = () => {
  const user = useUserStore((state) => state.user);
  const updateUser = useUserStore((state) => state.updateUser);
  const deleteUser = useUserStore((state) => state.deleteUser);
  const logOut = useUserStore((state) => state.logout);
  const error = useUserStore((state) => state.error);
  const loading = useUserStore((state) => state.loading);
  const [isEditing, setIsEditing] = useState(false);
  const [editUser, setEditUser] = useState(user);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  const {
    open: isSnackbarOpen,
    handleOpen: handleSnackbarOpen,
    handleClose: handleSnackbarClose,
  } = useSnackbar();

  if (error || !user || !editUser) {
    return <Typography>Error: {error}</Typography>;
  }
  const handleEditProfile = () => {
    setIsEditing(true);
  };

  const handleSaveProfile = () => {
    updateUser(editUser);
    setIsEditing(false);
    handleSnackbarOpen();
  };

  const handleDeleteAccount = () => {
    setIsDeleteModalOpen(true);
  };

  const confirmDeleteAccount = () => {
    deleteUser(user.id);
    setIsDeleteModalOpen(false);
  };

  const handleLogout = () => {
    setIsLogoutModalOpen(true);
  };

  const confirmLogout = () => {
    logOut();
    setIsLogoutModalOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditUser({ ...editUser, [name]: value });
  };

  return (
    <Stack
      height="90vh"
      direction="column"
      width="100%"
      alignItems="center"
      justifyContent="center"
      spacing={1}
      pt={{ xs: 10, md: 0 }}
    >
      <Card sx={{ p: 2, backgroundColor: indigo[300], minWidth: 100 }}>
        <CardContent>
          {loading && <Loader size={100} />}
          {isEditing ? (
            <>
              <TextField
                name="username"
                label="Username"
                value={editUser.username}
                onChange={handleInputChange}
                fullWidth
                sx={{ mb: 2 }}
              />
              <TextField
                name="firstName"
                label="First Name"
                value={editUser.firstName}
                onChange={handleInputChange}
                fullWidth
                sx={{ mb: 2 }}
              />
            </>
          ) : (
            <>
              <Typography variant="h4" color="white" gutterBottom>
                Welcome! {user.firstName}
              </Typography>
              <Typography color={grey[200]}>
                Username: {user.username}
              </Typography>
              <Typography color={grey[200]}>
                First Name: {user.firstName}
              </Typography>
            </>
          )}
        </CardContent>
        <CardActions>
          {isEditing ? (
            <Button variant="contained" onClick={handleSaveProfile}>
              Save
            </Button>
          ) : (
            <Button variant="contained" onClick={handleEditProfile}>
              Edit Profile
            </Button>
          )}
          <Button variant="contained" onClick={handleLogout}>
            Log Out
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={handleDeleteAccount}
          >
            Delete Account
          </Button>
        </CardActions>
      </Card>

      <Snackbar
        open={isSnackbarOpen}
        onClose={handleSnackbarClose}
        autoHideDuration={2000}
        message="Edits saved!"
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      />

      <Dialog
        open={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
      >
        <DialogTitle>Delete Account</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete your account? This action cannot be
            undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsDeleteModalOpen(false)}>Cancel</Button>
          <Button onClick={confirmDeleteAccount} color="error">
            Delete
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={isLogoutModalOpen}
        onClose={() => setIsLogoutModalOpen(false)}
      >
        <DialogTitle>Logout</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to log out?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsLogoutModalOpen(false)}>Cancel</Button>
          <Button onClick={confirmLogout} color="primary">
            Logout
          </Button>
        </DialogActions>
      </Dialog>
    </Stack>
  );
};

export default Profile;
