import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

import { Actions, State } from "@/@types/store";

import { initialState } from "./initialState";

const useEditorStore = create<State & Actions>()(
  devtools(
    immer(set => ({
      ...initialState,

      setAvatar: (avatar: File | string) => {
        set(state => {
          state.profile.avatar = avatar;
        });
      },

      updateHeading: partial => {
        set(state => {
          Object.assign(state.profile.heading, partial);
        });
      },
      updateSubheading: partial => {
        set(state => {
          Object.assign(state.profile.subheading, partial);
        });
      },
      updateBio: partial => {
        set(state => {
          Object.assign(state.profile.bio, partial);
        });
      },
      setBackgroundColor: (color: string) => {
        set(state => {
          state.backgroundColor = color;
        });
      },
      updateLink(link, index) {
        set(state => {
          if (index < 0) return;

          if (link.url === "") {
            state.profile.links[index].isVisible = false;
            state.profile.links[index].url = "";
            return;
          }

          state.profile.links[index] = {
            ...state.profile.links[index],
            isVisible: true,
            ...link,
          };
        });
      },

      setCustomLabel(label, index) {
        set(state => {
          if (index < 0 || index >= state.profile.links.length) return;

          state.profile.links[index].label = label;
        });
      },
      setProfileVisible: (visible: boolean) => {
        set(state => {
          state.profileVisible = visible;
        });
      },
      initState: (state: Partial<State>) => {
        const mergedProfile = {
          ...initialState.profile,
          ...state.profile,
        };

        set(() => ({
          ...initialState,
          ...state,
          profile: mergedProfile,
          backgroundColor: state.backgroundColor ?? initialState.backgroundColor,
          profileVisible: state.profileVisible ?? initialState.profileVisible,
          original: {
            backgroundColor: state.backgroundColor ?? initialState.backgroundColor,
            profileVisible: state.profileVisible ?? initialState.profileVisible,
            profile: mergedProfile,
          },
        }));
      },
    })),

    { name: "editorStore" }
  )
);

export default useEditorStore;
