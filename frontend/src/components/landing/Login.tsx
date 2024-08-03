import UserForm from "./UserForm";

type LoginProps = {
  handleBack: () => void;
};

const Login: React.FC<LoginProps> = ({ handleBack }) => {
  return <UserForm handleBack={handleBack} isLogin={true} />;
};

export default Login;
