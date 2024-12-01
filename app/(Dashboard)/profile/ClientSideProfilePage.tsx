"use client";

import { ProfileContext } from "@/context/profileContext";

import ProfileCardComponent from "@/components/ProfileComponent/ProfileCard/ProfileCardComponent";
import { Button } from "@/components/ui/button";
import { ProfileCard, ProfileDndComponent } from "@/lib/type";
import { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { GiCheckMark } from "react-icons/gi";
import EditProfileCardComponent from "@/components/ProfileComponent/EditProfileCard/EditProfileCardComponent";

interface ProfileProps {
  profileComponentData: ProfileDndComponent[];
  profileCardData: ProfileCard;
  children?: React.ReactNode;
}

const ClientSideProfilePage = ({
  profileComponentData,
  profileCardData,
  children,
}: ProfileProps) => {
  // Fetch from database
  const [components, setComponents] =
    useState<ProfileDndComponent[]>(profileComponentData);
  const [profileData, setProfileData] = useState<ProfileCard>(profileCardData);
  // State for editing
  const [isEditing, setEditing] = useState(false);

  return (
    <>
      <ProfileContext.Provider
        value={{
          components,
          setComponents,
          profileData,
          setProfileData,
          isEditing,
          setEditing,
        }}
      >
        <div className=" flex justify-center  gap- relative">
          <div className="mt-10 mx-auto gap-5 flex flex-col">
            {!isEditing ? (
              <div className="w-full flex justify-end">
                <Button
                  variant={"ghost"}
                  size="icon"
                  type="button"
                  className=" bg-secondary text-secondary-foreground w-20  secondary-foreground hover:scale-105 rounded-lg transition "
                  onClick={() => {
                    setEditing(true);
                  }}
                >
                  <CiEdit />
                </Button>
              </div>
            ) : (
              <Button
                variant={"ghost"}
                size="icon"
                type="submit"
                form="profileForm"
                className=" bg-secondary text-secondary-foreground w-20  secondary-foreground hover:scale-105 rounded-lg transition "
              >
                <GiCheckMark />
              </Button>
            )}

            {isEditing ? (
              <EditProfileCardComponent />
            ) : (
              <ProfileCardComponent
                components={components}
                profileData={profileData}
              />
            )}
          </div>
          {isEditing && children}
        </div>
      </ProfileContext.Provider>
    </>
  );
};

export default ClientSideProfilePage;
