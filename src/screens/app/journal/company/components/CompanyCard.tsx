import { StyleSheet, View } from "react-native";
import React from "react";
import { company } from "../../../../../../data/data";
import { IconButton, Surface, Text, useTheme } from "react-native-paper";

type Props = {
  companyDetails: company;
};

const CompanyCard = ({ companyDetails }: Props) => {
  return (
    <Surface style={[styles.container]}>
      <Text variant="headlineLarge">{companyDetails.companyName}</Text>
      <Text variant="titleSmall">
        Amount Due:{" "}
        {companyDetails.initalBalance.toLocaleString("en-IN", {
          style: "currency",
          currency: "INR",
        })}
      </Text>
      <Text variant="titleSmall">Last Paid Date:</Text>
      <Text variant="titleSmall">Last Paid Amount:</Text>
    </Surface>
  );
};

export default CompanyCard;

const styles = StyleSheet.create({
  container: {
    height: 135,
    margin: 10,
    borderRadius: 10,
    padding: 10,
    rowGap: 5,
  },
});
