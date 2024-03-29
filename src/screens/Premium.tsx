import React, { useEffect, useState } from "react";
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackBase,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Box, Text, theme, SPrimaryButton } from "../components";
import axios from "axios";
import { getData } from "../Utils/Storage";
import AsyncStorage from "@react-native-async-storage/async-storage";

const { width: wWidth, height: wHeight } = Dimensions.get("window");
const CARD_HEIGHT = 160;

const PremiumButton = ({
  label,
  onPress,
}: {
  label: String;
  onPress: () => void;
}) => {
  return (
    <TouchableWithoutFeedback {...{ onPress }}>
      <Box
        width={wWidth * 0.6}
        borderRadius="xl"
        justifyContent="center"
        alignItems="center"
        height={60}
        backgroundColor="card"
      >
        <Text>{label}</Text>
      </Box>
    </TouchableWithoutFeedback>
  );
};
const premiumCardData = [
  {
    title: "Premium Family",
    price: "15",
    detail1:
      "Choose 1,3,6 or 12 months of Premium * Pay with Paytm or UPI. Top up when you want",
    detail2:
      "Prices vary according to duration of plan.Terms and conditions apply",
    color: ["#ad5389", "#3c1053"],
  },
  {
    title: "Mini ",
    price: "7",
    detail1:
      "Choose 1,3,6 or 12 months of Premium * Pay with Paytm or UPI. Top up when you want",
    detail2:
      "Prices vary according to duration of plan.Terms and conditions apply",
    color: ["#00b4db", "#0083b0"],
  },
  {
    title: "Premium Individual",
    price: "129",
    detail1: "Ad-free music * Download to listen offline",
    detail2:
      "Prices vary according to duration of plan.Terms and conditions apply",
    color: ["#11998e", "#38ef7d"],
  },
];
const PremiumGroupCard = ({ title, price, detail1, detail2, color }) => {
  return (
    <Box borderRadius="l">
      <LinearGradient
        style={{ borderRadius: 10 }}
        colors={[color[0], color[1]]}
      >
        <Box
          marginVertical="xl"
          marginHorizontal="m"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Text variant="title2">{title}</Text>
          <Text variant="title1">From $15</Text>
        </Box>
        <Box marginBottom="xl" marginHorizontal="xl">
          <Text variant="body" textAlign="center" marginVertical="m">
            Choose 1,3,6 or 12 months of Premium * Pay with Paytm or UPI. Top up
            when you want
          </Text>
          <Box alignSelf="center">
            <PremiumButton label="VIEW PLANS" onPress={() => {}} />
          </Box>
          <Text variant="body" textAlign="center">
            Prices vary according to duration of plan.Terms and conditions apply
          </Text>
        </Box>
      </LinearGradient>
    </Box>
  );
};

const SlideCard = () => {
  return (
    <Box
      flexDirection="row"
      height={160}
      borderRadius="xl"
      width={wWidth - 52}
      marginHorizontal="m"
      backgroundColor="notification"
    >
      <Box alignItems="center" flex={1} backgroundColor="darkLight">
        <Text color="card" variant="premiumFreeText" marginVertical="s">
          FREE
        </Text>
        <Box height={50} />
        <Text variant="premiumCardLabel">Ad breaks</Text>
      </Box>
      <LinearGradient style={{ flex: 1 }} colors={["#11998e", "#38ef7d"]}>
        <Box alignItems="center" flex={1}>
          <Text color="card" variant="premiumFreeText" marginVertical="s">
            PREMIUM
          </Text>
          <Box height={50} />
          <Text variant="premiumCardLabel">Ad-free music</Text>
        </Box>
      </LinearGradient>
    </Box>
  );
};

const Premium = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Box flex={1} backgroundColor="primary">
          <Box marginHorizontal="xl" marginVertical="xl">
            <Text textAlign="center" variant="premiumCardTitle">
              Get more out of your music with Premium
            </Text>
          </Box>
          <Box>
            <Box marginHorizontal="m" width={wWidth - 32}>
              <ScrollView
                showsHorizontalScrollIndicator={false}
                horizontal={true}
              >
                {[1, 2, 3, 4].map((_, i) => {
                  return <SlideCard key={i} />;
                })}
              </ScrollView>
            </Box>
            <Box alignSelf="center" marginVertical="xl">
              <SPrimaryButton label="GET PREMIUM" onPress={() => {}} />
              <Text marginVertical="s" textAlign="center" variant="body">
                Terms and conditions apply
              </Text>
            </Box>
            <Box marginHorizontal="m" marginVertical="s">
              <Box
                borderRadius="m"
                backgroundColor="darkLight"
                height={60}
                paddingHorizontal="m"
                alignItems="center"
                justifyContent="space-between"
                flexDirection="row"
              >
                <Text variant="title2">Spotify Free</Text>
                <Text variant="body">CURRENT PLAN</Text>
              </Box>
            </Box>

            <Box marginVertical="xl" marginHorizontal="m">
              {premiumCardData.map((item, i) => {
                return (
                  <Box key={i} marginBottom="m">
                    <PremiumGroupCard {...item} />
                  </Box>
                );
              })}
            </Box>
          </Box>
        </Box>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.primary,
  },
});

export default Premium;
