import React from "react";
import AccountLayout from "@/Components/Account/AccountLayout";
import ProfileForm from "@/Components/Account/AccountForm";

const ProfilePage: React.FC = () => {
  return (
    <AccountLayout>
      <ProfileForm />
    </AccountLayout>
  );
};

export default ProfilePage;
