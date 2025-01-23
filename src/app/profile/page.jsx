import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

const Profile = async () => {
  const { isAuthenticated } = getKindeServerSession();
  if (!(await isAuthenticated())) {
    redirect("/api/auth/login");
  }
  return (
    <div className="flex justify-center items-center mt-16">
      <h2 className="text-3xl font-extrabold ">Well Come to Your profile</h2>
    </div>
  );
};

export default Profile;
