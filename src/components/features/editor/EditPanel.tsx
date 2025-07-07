import { UpdateProfileButton } from "@/components/forms/UpdateProfileButton";
import { Tabs } from "@/components/ui/tabs";

import { ProfileVisibilityCheckbox } from "./components/ProfileVisibilityCheckbox";
import { AppearanceTab } from "./tabs/AppearanceTab";
import { EditTabsTriggers } from "./tabs/EditTabsTriggers ";
import { ProfileTab } from "./tabs/ProfileTab";

export const EditPanel = () => {
  return (
    <div className="flex h-full flex-col justify-between">
      <div>
        <h3 className="mb-4 text-center text-xl font-semibold text-white">Edit Panel</h3>
        <ProfileVisibilityCheckbox />
        <Tabs defaultValue="profile">
          <EditTabsTriggers />
          <ProfileTab />
          <AppearanceTab />
        </Tabs>
      </div>
      <UpdateProfileButton />
    </div>
  );
};
