// import { View, Text } from "react-native";
// import React, { useEffect } from "react";
// import Router from "./src/router/Router";
// import Menu from "./src/components/Menu";
// import * as Notifications from 'expo-notifications';

// // تعيين معالج الإشعارات
// Notifications.setNotificationHandler({
//   handleNotification: async () => ({
//     shouldShowAlert: true,
//     shouldPlaySound: true,
//     shouldSetBadge: false,
//   }),
// });
// // هذه الدالة ستتم استدعاؤها عندما يتم تلقي إشعار
// function handleNotification(notification) {
//   const { title, body } = notification.request.content;
//   console.log(`Received notification: ${title} - ${body}`);
// }

// // إضافة المستمع
// Notifications.addNotificationReceivedListener(handleNotification);

// const App = () => {
  
//   return (
//     <>
//       <Menu>
//         <Router />
//       </Menu>
//     </>
//   );
// };

// export default App;

import { View, Text } from "react-native";
import React, { useEffect } from "react";
import Router from "./src/router/Router";
import Menu from "./src/components/Menu";
import { Provider } from 'react-redux';
import store from './src/reducers/store'; 



const App = () => {
  
  return (
    <Provider store={store}>
      <Menu>
        <Router />
      </Menu>
    </Provider>
  );
};

export default App;

