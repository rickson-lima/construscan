import type {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import type { StackScreenProps } from '@react-navigation/stack';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

export type RootStackParamList = {
  projects: undefined;
  project: undefined;
  editProject: undefined;
  projectTabs: NavigatorScreenParams<ProjectTabParamList>;
  signIn: undefined;
  signUp: undefined;
  createProject: undefined;
  createPlank: undefined;
  exportReport: undefined;
  sendReport: undefined;
  recoverAccount: undefined;
  editPlank: {
    id: string;
    name: string;
  };
  categories: undefined;
  createCategory: undefined;
  addPhoto: undefined;
  createTask: undefined;
  addPhotoToTask: {
    task: ITaskSchema;
  };
  importReport: undefined;
  filters: undefined;
  userProfile: undefined;
  editUserData: undefined;
  resetPassword: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>;

export type ProjectTabParamList = {
  tasks: undefined;
  planks: undefined;
};

export type ProjectTabScreenProps<T extends keyof ProjectTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<ProjectTabParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
