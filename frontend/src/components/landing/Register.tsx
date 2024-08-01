import UserForm from "./UserForm";

type RegisterProps = {
  handleBack: () => void;
};

const Register: React.FC<RegisterProps> = ({ handleBack }) => {
  return <UserForm handleBack={handleBack} isLogin={false} />;
};

export default Register;
