import { TabsList, TabsTrigger } from "@/components/ui/tabs";

export const EditTabsTriggers  = () => {
  return (
    <TabsList className="w-full">
      <TabsTrigger value="profile">Profile</TabsTrigger>
      <TabsTrigger value="appearance">Appearance</TabsTrigger>
    </TabsList>
  );
};
