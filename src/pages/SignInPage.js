import SignInImage from "../assets/image/signInImage.png";
import SignInForm from "../components/SignInForm";

function SignInPage() {
  return (
    <div className="flex flex-row h-screen">
      <SignInForm />
      <div className="w-1/2 max-md:hidden flex items-center justify-center">
        <img src={SignInImage} alt="sign-in" />
      </div>
    </div>
  );
}

export default SignInPage;
