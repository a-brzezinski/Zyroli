import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import useEditorStore from "@/lib/store/editorStore";

export const ProfileVisibilityCheckbox = () => {
  const setProfileVisible = useEditorStore(state => state.setProfileVisible);
  const profileVisible = useEditorStore(state => state.profileVisible);
  return (
    <div className="mb-4 flex items-center space-x-2">
      <Input
        checked={profileVisible}
        onChange={e => setProfileVisible(e.target.checked)}
        id="profile-visibility"
        type="checkbox"
        className="size-4"
      />
      <Label htmlFor="profile-visibility" className="text-sm text-white">
        Show my profile to the public
      </Label>
    </div>
  );
};
