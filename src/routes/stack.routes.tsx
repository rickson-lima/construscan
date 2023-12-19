import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../@types/navigation';
import { useToken } from '@gluestack-ui/themed';

import { ProjectsScreen } from '../screens/Projects';

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

export function StackRoutes() {
  const whiteColor = useToken("colors", "white")

  return (
    <Navigator
      screenOptions={{
        orientation: 'portrait',
        headerShadowVisible: false,
        animation: 'flip',
        headerShown: false,
        contentStyle: {
          backgroundColor: whiteColor,
        },
      }}
    >
      <Screen name="projectsList" component={ProjectsScreen} />
      {/* <Screen name="createProject" component={CreateProject} />
      <Screen name="categories" component={Categories} />
      <Screen name="createCategory" component={CreateCategory} />
      <Screen name="createTask" component={CreateTask} />
      <Screen name="editTask" component={EditTask} />
      <Screen name="viewTask" component={ViewTask} />
      <Screen name="finishTask" component={FinishTask} />
      <Screen name="addPhotoToTask" component={AddPhotoToTask} />
      <Screen name="viewPlank" component={ViewPlank} />
      <Screen name="editPlank" component={EditPlank} />
      <Screen name="projectTabs" component={TabsRoutes} />
      <Screen name="exportReport" component={ExportReport} />
      <Screen name="sendReport" component={SendtReport} />
      <Screen name="userProfile" component={UserProfile} />
      <Screen name="editUserData" component={EditUserData} />
      <Screen name="resetPassword" component={ResetPassword} />
      <Screen name="imageEditor" component={ImageEditor} /> */}
    </Navigator>
  );
}