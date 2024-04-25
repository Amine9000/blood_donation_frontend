import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  signupFailure,
  signupStart,
} from "../redux/slices/userSlice";
import axios from "axios";
import HOST_LINK from "../constants/constants";

export default function Signup({ navigation }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [errors, setErrors] = useState(null);
  const [form, setForm] = useState({
    email: "ui4677@gmail.com",
    password: "Admin123$",
    confirmPassword: "Admin123$",
    firstName: "A",
    lastName: "bbd",
    phoneNumber: "+212699092369",
    roles: [1],
  });

  async function signupHandler() {
    setErrors(null);
    try {
      dispatch(signupStart());
      axios
        .post(`${HOST_LINK}/auth/signup`, {
          ...form,
        })
        .then((response) => {
          setForm({
            email: "",
            password: "",
            confirmPassword: "",
            firstName: "",
            lastName: "",
            phoneNumber: "",
          });
          navigation.navigate("login");
        })
        .catch((err) => {
          setErrors(err.response.data.message);
        });
    } catch (error) {
      console.error(error);
      dispatch(signupFailure());
    }
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Welcome back!</Text>

          <Text style={styles.subtitle}>Sign up to your account</Text>
          {errors && <Text style={styles.errorMessage}>{errors}</Text>}
        </View>

        <View style={styles.form}>
          <View style={styles.input}>
            <Text style={styles.inputLabel}>First name</Text>

            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="default"
              onChangeText={(firstName) => setForm({ ...form, firstName })}
              placeholder="Max smith"
              placeholderTextColor="#6b7280"
              style={styles.inputControl}
              value={form.firstName}
            />
          </View>
          <View style={styles.input}>
            <Text style={styles.inputLabel}>Last name</Text>

            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="default"
              onChangeText={(lastName) => setForm({ ...form, lastName })}
              placeholder="Max smith"
              placeholderTextColor="#6b7280"
              style={styles.inputControl}
              value={form.lastName}
            />
          </View>

          <View style={styles.input}>
            <Text style={styles.inputLabel}>Email address</Text>

            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              onChangeText={(email) => setForm({ ...form, email })}
              placeholder="john@example.com"
              placeholderTextColor="#6b7280"
              style={styles.inputControl}
              value={form.email}
            />
          </View>
          <View style={styles.input}>
            <Text style={styles.inputLabel}>Phone number</Text>

            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="numeric"
              onChangeText={(phoneNumber) => setForm({ ...form, phoneNumber })}
              placeholder="06"
              placeholderTextColor="#6b7280"
              style={styles.inputControl}
              value={form.phoneNumber}
            />
          </View>
          <View style={styles.input}>
            <Text style={styles.inputLabel}>Password</Text>

            <TextInput
              autoCorrect={false}
              onChangeText={(password) => setForm({ ...form, password })}
              placeholder="********"
              placeholderTextColor="#6b7280"
              style={styles.inputControl}
              secureTextEntry={true}
              value={form.password}
            />
          </View>

          <View style={styles.input}>
            <Text style={styles.inputLabel}>Confirm Password</Text>

            <TextInput
              autoCorrect={false}
              onChangeText={(confirmPassword) =>
                setForm({ ...form, confirmPassword })
              }
              placeholder="********"
              placeholderTextColor="#6b7280"
              style={styles.inputControl}
              secureTextEntry={true}
              value={form.confirmPassword}
            />
          </View>

          <View style={styles.formAction}>
            <TouchableOpacity onPress={signupHandler}>
              <View style={styles.btn}>
                <Text style={styles.btnText}>
                  {user.isloading ? "signing in please wait" : "sign in"}
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("login");
            }}
          >
            <Text style={styles.formFooter}>
              Don't have an account?{" "}
              <Text style={{ textDecorationLine: "underline" }}>log in</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    justifyContent: "center",
  },
  header: {
    marginVertical: 36,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#1d1d1d",
    marginBottom: 6,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 15,
    fontWeight: "500",
    color: "#929292",
    textAlign: "center",
  },
  /** Form */
  form: {
    marginBottom: 24,
  },
  formAction: {
    marginVertical: 24,
  },
  formFooter: {
    fontSize: 15,
    fontWeight: "500",
    color: "#222",
    textAlign: "center",
  },
  /** Input */
  input: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 17,
    fontWeight: "600",
    color: "#222",
    marginBottom: 8,
  },
  inputControl: {
    height: 44,
    backgroundColor: "#f1f5f9",
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: "500",
    color: "#222",
  },
  /** Button */
  btn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderWidth: 1,
    backgroundColor: "#007aff",
    borderColor: "#007aff",
  },
  btnText: {
    fontSize: 17,
    lineHeight: 24,
    fontWeight: "600",
    color: "#fff",
  },
  // error
  errorMessage: {
    color: "#dd3545",
    backgroundColor: "rgba(120,10,10,0.2)",
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
});
