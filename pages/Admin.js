import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import AdminController from "./AdminController";
import ListUsers from "../components/ListUsers";
import ListRDVs from "../components/ListRDVs";
import ListCenters from "../components/ListCenters";
import ListRegions from "../components/ListRegions";
import ListVilles from "../components/ListVilles";
import CenterForm from "./CenterForm";
import RdvForm from "./RdvForm";
import UserForm from "./UserForm";
import VilleForm from "./VilleForm";
import RegionForm from "./RegionForm";

const stack = createStackNavigator();

export default function Admin() {

  return (
    <stack.Navigator initialRouteName="admincontrolle">
      <stack.Screen
        name="admincontrolle"
        options={{ headerShown: false }}
        component={AdminController}
      />
      <stack.Screen
        name="Users"
        options={{ headerShown: false }}
        component={ListUsers}
      />
      <stack.Screen
        name="RDVs"
        options={{ headerShown: false }}
        component={ListRDVs}
      />
      <stack.Screen
        name="Centers"
        options={{ headerShown: false }}
        component={ListCenters}
      />
      <stack.Screen
        name="Regions"
        options={{ headerShown: false }}
        component={ListRegions}
      />
      <stack.Screen
        name="Villes"
        options={{ headerShown: false }}
        component={ListVilles}
      />
      <stack.Screen
        name="userform"
        options={{ headerShown: false }}
        component={UserForm}
      />
      <stack.Screen
        name="centerform"
        options={{ headerShown: false }}
        component={CenterForm}
      />
      <stack.Screen
        name="villeform"
        options={{ headerShown: false }}
        component={VilleForm}
      />
      <stack.Screen
        name="regionform"
        options={{ headerShown: false }}
        component={RegionForm}
      />
      <stack.Screen
        name="rdvform"
        options={{ headerShown: false }}
        component={RdvForm}
      />
    </stack.Navigator>
  );
}
