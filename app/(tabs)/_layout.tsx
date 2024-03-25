// import React from 'react';
// import FontAwesome from '@expo/vector-icons/FontAwesome';
// import { Link, Tabs } from 'expo-router';
// import { Pressable } from 'react-native';

// import Colors from '@/constants/Colors';
// import { useColorScheme } from '@/components/useColorScheme';
// import { useClientOnlyValue } from '@/components/useClientOnlyValue';

// // You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
// function TabBarIcon(props: {
//   name: React.ComponentProps<typeof FontAwesome>['name'];
//   color: string;
// }) {
//   return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
// }

// export default function TabLayout() {
//   const colorScheme = useColorScheme();

//   return (
//     <Tabs
//       screenOptions={{
//         tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
//         // Disable the static render of the header on web
//         // to prevent a hydration error in React Navigation v6.
//         headerShown: useClientOnlyValue(false, true),

//       }}>
//       <Tabs.Screen
//         name="index"
//         options={{
//            headerShown:false,
//           title: 'Home',
//           tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,

//         }}
//       />
//       <Tabs.Screen
//         name="two"
//         options={{
//           title: 'Tab Two',
//           tabBarIcon: ({ color }) => <TabBarIcon name="bar-chart-o" color={color} />,
//         }}
//       />

//        <Tabs.Screen
//         name="chartScreen"
//         options={{
//           title: 'Chart',
//           tabBarIcon: ({ color }) => <TabBarIcon name="bar-chart-o" color={color} />,
//         }}
//       />
//        <Tabs.Screen
//         name="history"
//         options={{
//           title: 'History',
//           tabBarIcon: ({ color }) => <TabBarIcon name="history" color={color} />,
//         }}
//       />
//         <Tabs.Screen
//         name="profile"
//         options={{
//           title: 'Profile',
//           tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
//         }}
//       />
//     </Tabs>
//   );
// }

import React from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";
import { LinearGradient } from "expo-linear-gradient"; // Import LinearGradient from expo-linear-gradient

interface TabBarIconProps {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}

function TabBarIcon(props: TabBarIconProps) {
  return <FontAwesome size={23} style={{ marginBottom: -3 }} {...props} />;
}


interface CustomTabBarProps {
  state: any;
  descriptors: any;
  navigation: any;
}

const CustomTabBar: React.FC<CustomTabBarProps> = ({ state, descriptors, navigation }) => {
  return (

    <View >
       <LinearGradient
        // Button Linear Gradient
        colors={['#43454a', '#242529', '#15181a']}
        // style={styles.button}
        style={styles.tabBarContainer}
        >
 
      {state.routes.map((route: any, index: number) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const iconName = options.tabBarIconName || 'default-icon'; // Use the provided icon name or a default one

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity key={index} onPress={onPress} style={styles.tabBarItem}>
            <TabBarIcon name={iconName} color={isFocused ? '#e36815' : '#fff'} />
            {/* <Text style={[styles.tabBarItemText, { color: isFocused ? '#e36815' : 'black' }]}>{label}</Text> */}
          </TouchableOpacity>
        );
      })}
           </LinearGradient>
    </View>
  );
};

const TabLayout: React.FC = () => {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: useClientOnlyValue(false, true),
      }}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIconName: 'home', // Specify the icon name for this tab
          headerShown:false
        }}
      />
     
      <Tabs.Screen
        name="chartScreen"
        options={{
          title: 'Chart',
          tabBarIconName: 'bar-chart-o',
          headerShown:false

        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          title: 'History',
          tabBarIconName: 'history',
          headerShown:false

        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIconName: 'user',
          headerShown:false

        }}
      />
    </Tabs>
  );
};
const styles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: "row",
    // backgroundColor: "red", // Set your custom background color here
    paddingVertical: 10,
    justifyContent: "space-around",
    width: "97%",
    height: 70,
    borderRadius:100,
    position:"absolute",
    bottom:10,
    alignSelf:"center"
  },
  tabBarItem: {
    flex: 1,
    alignItems: "center",
    justifyContent:"center"

  },
  tabBarItemText: {
    fontSize: 14,
  },
});
export default TabLayout;
