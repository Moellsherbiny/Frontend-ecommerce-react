import React from "react";
import AccountLayout from "@/Components/Account/AccountLayout";
import ProfileForm from "@/Components/Account/AccountForm";
import SEO from "@/Components/SEO";

const ProfilePage: React.FC = () => {
  return (
    <>
    <SEO
        title="My Account | Exclusive"
        description="Manage your account details, orders, and preferences on Exclusive."
        url="/account"
      />
    <AccountLayout>
      <ProfileForm />
    </AccountLayout>
    </>
  );
};

export default ProfilePage;
